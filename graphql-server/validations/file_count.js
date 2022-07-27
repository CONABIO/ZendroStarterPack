// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(file_count) {

    file_count.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    file_count.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "delivery_date": {
                "anyOf": [{
                    "isoDate": true
                }, {
                    "type": "null"
                }]
            },
            "cumulus": {
                "type": ["string", "null"]
            },
            "audio_files": {
                "type": ["integer", "null"]
            },
            "image_files": {
                "type": ["integer", "null"]
            },
            "video_files": {
                "type": ["integer", "null"]
            },
            "size": {
                "type": ["integer", "null"]
            },
            "cumulus_id": {
                "type": ["integer", "null"]
            }
        }
    }

    file_count.prototype.asyncValidate = ajv.compile(
        file_count.prototype.validatorSchema
    )

    file_count.prototype.validateForCreate = async function(record) {
        return await file_count.prototype.asyncValidate(record)
    }

    file_count.prototype.validateForUpdate = async function(record) {
        return await file_count.prototype.asyncValidate(record)
    }

    file_count.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    file_count.prototype.validateAfterRead = async function(record) {
        return await file_count.prototype.asyncValidate(record)
    }

    return file_count
}