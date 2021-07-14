// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(institution) {

    institution.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    institution.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "name": {
                "type": ["string", "null"]
            },
            "address": {
                "type": ["string", "null"]
            },
            "phone_number": {
                "type": ["integer", "null"]
            },
            "cumulus_ids": {
                "type": ["array", "null"]
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

    institution.prototype.asyncValidate = ajv.compile(
        institution.prototype.validatorSchema
    )

    institution.prototype.validateForCreate = async function(record) {
        return await institution.prototype.asyncValidate(record)
    }

    institution.prototype.validateForUpdate = async function(record) {
        return await institution.prototype.asyncValidate(record)
    }

    institution.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    institution.prototype.validateAfterRead = async function(record) {
        return await institution.prototype.asyncValidate(record)
    }

    return institution
}