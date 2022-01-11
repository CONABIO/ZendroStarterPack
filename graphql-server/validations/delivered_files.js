// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(delivered_files) {

    delivered_files.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    delivered_files.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "who_delivers": {
                "type": ["string", "null"]
            },
            "reception_date": {
                "anyOf": [{
                    "isoDate": true
                }, {
                    "type": "null"
                }]
            },
            "total_files": {
                "type": ["integer", "null"]
            },
            "audio_files": {
                "type": ["integer", "null"]
            },
            "image_files": {
                "type": ["integer", "null"]
            },
            "node_id": {
                "type": ["integer", "null"]
            }
        }
    }

    delivered_files.prototype.asyncValidate = ajv.compile(
        delivered_files.prototype.validatorSchema
    )

    delivered_files.prototype.validateForCreate = async function(record) {
        return await delivered_files.prototype.asyncValidate(record)
    }

    delivered_files.prototype.validateForUpdate = async function(record) {
        return await delivered_files.prototype.asyncValidate(record)
    }

    delivered_files.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    delivered_files.prototype.validateAfterRead = async function(record) {
        return await delivered_files.prototype.asyncValidate(record)
    }

    return delivered_files
}