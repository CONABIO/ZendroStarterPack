// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(cumulus_criteria) {

    cumulus_criteria.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    cumulus_criteria.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "name": {
                "type": ["string", "null"]
            },
            "created_at": {
                "anyOf": [{
                    "isoDateTime": true
                }, {
                    "type": "null"
                }]
            }
        }
    }

    cumulus_criteria.prototype.asyncValidate = ajv.compile(
        cumulus_criteria.prototype.validatorSchema
    )

    cumulus_criteria.prototype.validateForCreate = async function(record) {
        return await cumulus_criteria.prototype.asyncValidate(record)
    }

    cumulus_criteria.prototype.validateForUpdate = async function(record) {
        return await cumulus_criteria.prototype.asyncValidate(record)
    }

    cumulus_criteria.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    cumulus_criteria.prototype.validateAfterRead = async function(record) {
        return await cumulus_criteria.prototype.asyncValidate(record)
    }

    return cumulus_criteria
}