// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(processed_files) {

    processed_files.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    processed_files.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "file_id": {
                "type": ["integer", "null"]
            },
            "pipeline_id": {
                "type": ["integer", "null"]
            }
        }
    }

    processed_files.prototype.asyncValidate = ajv.compile(
        processed_files.prototype.validatorSchema
    )

    processed_files.prototype.validateForCreate = async function(record) {
        return await processed_files.prototype.asyncValidate(record)
    }

    processed_files.prototype.validateForUpdate = async function(record) {
        return await processed_files.prototype.asyncValidate(record)
    }

    processed_files.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    processed_files.prototype.validateAfterRead = async function(record) {
        return await processed_files.prototype.asyncValidate(record)
    }

    return processed_files
}