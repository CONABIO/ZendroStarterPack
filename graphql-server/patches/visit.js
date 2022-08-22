const validatorUtil = require('../utils/validatorUtil');
const CreateVisitToCumulus = require('../utils/create-visit-to-cumulus');
const updateSipecamCalendar = require('../utils/update-sipecam-calendar');

// Dear user, edit the schema to adjust it to your model
module.exports.logic_patch = function(visit) {

    visit.add_cumulus_id = async (id, cumulus_id, benignErrorReporter) => {
        try {
            let updated = await visit.update({
                cumulus_id: cumulus_id
            }, {
                where: {
                    id: id
                }
            });

            await CreateVisitToCumulus(cumulus_id).catch((err) => console.log(err));
            return updated[0];
        } catch (error) {
            benignErrorReporter.push({
                message: error
            });
        }
    }

    visit.updateOne = async (input) => {
        //validate input
        await validatorUtil.validateData('validateForUpdate', visit, input);
        input = visit.preWriteCast(input)
        try {
            let result = await visit.sequelize.transaction(async (t) => {
                let to_update = await visit.findByPk(input[visit.idAttribute()]);
                if (to_update === null) {
                    throw new Error(`Record with ID = ${input[visit.idAttribute()]} does not exist`);
                }

                let updated = await to_update.update(input, {
                    transaction: t
                });

                return updated;
            });

            await updateSipecamCalendar(input,result);
            visit.postReadCast(result.dataValues)
            visit.postReadCast(result._previousDataValues)
            return result;
        } catch (error) {
            throw error;
        }
    }

    return visit;
};