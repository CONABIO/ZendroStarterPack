const validatorUtil = require('../utils/validatorUtil');

// Dear user, edit the schema to adjust it to your model
module.exports.logic_patch = function(product) {

    product.addOne = async (input) => {
        //validate input
        await validatorUtil.validateData('validateForCreate', product, input);
        input = product.preWriteCast(input)
        try {
            // validate if unique url
            if(input.url !== undefined) {
                const alreadyRegistered = await product.findOne({ where: { url: input.url } })

                if(alreadyRegistered) {
                    return alreadyRegistered;
                }
            }

            const result = await product.sequelize.transaction(async (t) => {
                let item = await product.create(input, {
                    transaction: t
                });
                return item;
            });
            product.postReadCast(result.dataValues)
            product.postReadCast(result._previousDataValues)
            return result;
        } catch (error) {
            throw error;
        }
    }

    product.updateOne = async (input) => {
        //validate input
        await validatorUtil.validateData('validateForUpdate', product, input);
        input = product.preWriteCast(input)
        try {
            let result = await product.sequelize.transaction(async (t) => {
                let to_update = await product.findByPk(input[product.idAttribute()]);
                if (to_update === null) {
                    throw new Error(`Record with ID = ${input[product.idAttribute()]} does not exist`);
                }

                // validate if unique url
                if(input.url !== undefined) {
                    const alreadyRegistered = await product.findOne({ where: { url: input.url } })
                    
                    if(alreadyRegistered && alreadyRegistered.id !== parseInt(input.id)) {
                        throw new Error(`Record with url field = ${input.url} already exists`);
                    }
                }

                let updated = await to_update.update(input, {
                    transaction: t
                });
                return updated;
            });
            product.postReadCast(result.dataValues)
            product.postReadCast(result._previousDataValues)
            return result;
        } catch (error) {
            throw error;
        }
    }

    return product;
};