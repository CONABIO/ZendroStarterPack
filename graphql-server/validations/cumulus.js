// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(cumulus) {

    cumulus.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    cumulus.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "name": {
                "type": ["string", "null"]
            },
            "geometry": {
                "type": ["object", "null"]
            },
            "criteria_id": {
                "type": ["integer", "null"]
            },
            "user_ids": {
                "type": ["array", "null"]
            },
            "ecosystem_id": {
                "type": ["integer", "null"]
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

    cumulus.prototype.asyncValidate = ajv.compile(
        cumulus.prototype.validatorSchema
    )

    cumulus.prototype.validateForCreate = async function(record) {
        return await cumulus.prototype.asyncValidate(record)
    }

    cumulus.prototype.validateForUpdate = async function(record) {
        return await cumulus.prototype.asyncValidate(record)
    }

    cumulus.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    cumulus.prototype.validateAfterRead = async function(record) {
        return await cumulus.prototype.asyncValidate(record)
    }

    return cumulus
}