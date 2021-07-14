// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(device_catalog) {

    device_catalog.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    device_catalog.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "brand": {
                "type": ["string", "null"]
            },
            "model": {
                "type": ["string", "null"]
            },
            "type": {
                "type": ["string", "null"]
            },
            "serial_number": {
                "type": ["string", "null"]
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

    device_catalog.prototype.asyncValidate = ajv.compile(
        device_catalog.prototype.validatorSchema
    )

    device_catalog.prototype.validateForCreate = async function(record) {
        return await device_catalog.prototype.asyncValidate(record)
    }

    device_catalog.prototype.validateForUpdate = async function(record) {
        return await device_catalog.prototype.asyncValidate(record)
    }

    device_catalog.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    device_catalog.prototype.validateAfterRead = async function(record) {
        return await device_catalog.prototype.asyncValidate(record)
    }

    return device_catalog
}