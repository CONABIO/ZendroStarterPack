// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(physical_device) {

    physical_device.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    physical_device.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "serial": {
                "type": ["string", "null"]
            },
            "device_id": {
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

    physical_device.prototype.asyncValidate = ajv.compile(
        physical_device.prototype.validatorSchema
    )

    physical_device.prototype.validateForCreate = async function(record) {
        return await physical_device.prototype.asyncValidate(record)
    }

    physical_device.prototype.validateForUpdate = async function(record) {
        return await physical_device.prototype.asyncValidate(record)
    }

    physical_device.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    physical_device.prototype.validateAfterRead = async function(record) {
        return await physical_device.prototype.asyncValidate(record)
    }

    return physical_device
}