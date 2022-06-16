const validatorUtil = require('../utils/validatorUtil');

// Dear user, edit the schema to adjust it to your model
module.exports.logic_patch = function(file) {

    file.addOne = async (input) => {
        //validate input
        await validatorUtil.validateData('validateForCreate', file, input);
        input = file.preWriteCast(input)
        try {
            // validate if unique alfresco_id
            await file.findOne({ where: { id_alfresco: input.id_alfresco } })
            .then(function (u) { 
                if (u) {
                    throw new Error('Alfresco id already registered!');  
                }
            });

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