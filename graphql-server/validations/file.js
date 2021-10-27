// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(file) {

    file.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    file.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "id": {
                "type": ["string", "null"]
            },
            "bucket_url": {
                "type": ["string", "null"]
            },
            "metadata": {
                "type": ["object", "null"]
            },
            "deployment_id": {
                "type": ["integer", "null"]
            }
        }
    }

    file.prototype.asyncValidate = ajv.compile(
        file.prototype.validatorSchema
    )

    file.prototype.validateForCreate = async function(record) {
        return await file.prototype.asyncValidate(record)
    }

    file.prototype.validateForUpdate = async function(record) {
        return await file.prototype.asyncValidate(record)
    }

    file.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    file.prototype.validateAfterRead = async function(record) {
        return await file.prototype.asyncValidate(record)
    }

    return file
}