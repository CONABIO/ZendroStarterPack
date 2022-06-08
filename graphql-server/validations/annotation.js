// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(annotation) {

    annotation.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    annotation.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "has_fauna": {
                "type": ["boolean", "null"]
            },
            "updatedAt": {
                "anyOf": [{
                    "isoDateTime": true
                }, {
                    "type": "null"
                }]
            },
            "createdAt": {
                "anyOf": [{
                    "isoDateTime": true
                }, {
                    "type": "null"
                }]
            },
            "comments": {
                "type": ["string", "null"]
            },
            "file_id": {
                "type": ["integer", "null"]
            }
        }
    }

    annotation.prototype.asyncValidate = ajv.compile(
        annotation.prototype.validatorSchema
    )

    annotation.prototype.validateForCreate = async function(record) {
        return await annotation.prototype.asyncValidate(record)
    }

    annotation.prototype.validateForUpdate = async function(record) {
        return await annotation.prototype.asyncValidate(record)
    }

    annotation.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    annotation.prototype.validateAfterRead = async function(record) {
        return await annotation.prototype.asyncValidate(record)
    }

    return annotation
}