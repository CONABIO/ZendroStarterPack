const bcrypt = require('bcrypt');
const validatorUtil = require('../utils/validatorUtil');
const globals = require('../config/globals');

// Dear user, edit the schema to adjust it to your model
module.exports.logic_patch = function(user) {

    user.addOne = async (input) => {
        //validate input
        await validatorUtil.validateData('validateForCreate', user, input);
        input = user.preWriteCast(input)
        try {
            let hash = await bcrypt.hash(input.password, globals.SALT_ROUNDS);
            input.password = hash;
            const result = await user.sequelize.transaction(async (t) => {
                let item = await user.create(input, {
                    transaction: t
                });
                return item;
            });
            user.postReadCast(result.dataValues)
            user.postReadCast(result._previousDataValues)
            return result;
        } catch (error) {
            throw error;
        }
    }

    user.updateOne = async (input) => {
        //validate input
        await validatorUtil.validateData('validateForUpdate', user, input);
        input = user.preWriteCast(input)
        try {
            //check if password wants to be updated:
            if(input.password !== undefined){
                let hash = await bcrypt.hash(input.password, globals.SALT_ROUNDS);
                input.password = hash;
            }
            let result = await user.sequelize.transaction(async (t) => {
                let to_update = await user.findByPk(input[user.idAttribute()]);
                if (to_update === null) {
                    throw new Error(`Record with ID = ${input[user.idAttribute()]} does not exist`);
                }
                let updated = await to_update.update(input, {
                    transaction: t
                });
                return updated;
            });
            user.postReadCast(result.dataValues)
            user.postReadCast(result._previousDataValues)
            return result;
        } catch (error) {
            throw error;
        }
    }

    return user;
};