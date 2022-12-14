// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(annotations_method) {

    annotations_method.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    annotations_method.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "name": {
                "type": ["string", "null"]
            },
            "description": {
                "type": ["string", "null"]
            }
        }
    }

    annotations_method.prototype.asyncValidate = ajv.compile(
        annotations_method.prototype.validatorSchema
    )

    annotations_method.prototype.validateForCreate = async function(record) {
        return await annotations_method.prototype.asyncValidate(record)
    }

    annotations_method.prototype.validateForUpdate = async function(record) {
        return await annotations_method.prototype.asyncValidate(record)
    }

    annotations_method.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    annotations_method.prototype.validateAfterRead = async function(record) {
        return await annotations_method.prototype.asyncValidate(record)
    }

    return annotations_method
}