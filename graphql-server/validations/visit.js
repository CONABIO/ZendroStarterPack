// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(visit) {

    visit.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    visit.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "user_id": {
                "type": ["integer", "null"]
            },
            "calendar_id": {
                "type": ["integer", "null"]
            },
            "created_at": {
                "anyOf": [{
                    "isoDateTime": true
                }, {
                    "type": "null"
                }]
            },
            "cumulus_id": {
                "type": ["integer", "null"]
            },
            "pristine_id": {
                "type": ["integer", "null"]
            },
            "disturbed_id": {
                "type": ["integer", "null"]
            }
        }
    }

    visit.prototype.asyncValidate = ajv.compile(
        visit.prototype.validatorSchema
    )

    visit.prototype.validateForCreate = async function(record) {
        return await visit.prototype.asyncValidate(record)
    }

    visit.prototype.validateForUpdate = async function(record) {
        return await visit.prototype.asyncValidate(record)
    }

    visit.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    visit.prototype.validateAfterRead = async function(record) {
        return await visit.prototype.asyncValidate(record)
    }

    return visit
}