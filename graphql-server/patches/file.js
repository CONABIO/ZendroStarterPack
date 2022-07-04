const validatorUtil = require('../utils/validatorUtil');

// Dear user, edit the schema to adjust it to your model
module.exports.logic_patch = function(file) {

    file.addOne = async (input) => {
        //validate input
        await validatorUtil.validateData('validateForCreate', file, input);
        input = file.preWriteCast(input)
        try {
            // validate if unique alfresco_id
            const alreadyRegistered = await file.findOne({ where: { id_alfresco: input.id_alfresco } })

            if(alreadyRegistered) {
                return alreadyRegistered;
            }

            const result = await file.sequelize.transaction(async (t) => {
                let item = await file.create(input, {
                    transaction: t
                });
                return item;
            });
            file.postReadCast(result.dataValues)
            file.postReadCast(result._previousDataValues)
            return result;
        } catch (error) {
            throw error;
        }
    }

    return file;
};