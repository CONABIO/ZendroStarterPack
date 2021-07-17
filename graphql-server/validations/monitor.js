// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(monitor) {

    monitor.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    monitor.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "first_name": {
                "type": ["string", "null"]
            },
            "last_name": {
                "type": ["string", "null"]
            },
            "second_last_name": {
                "type": ["string", "null"]
            },
            "contact": {
                "type": ["string", "null"]
            },
            "cumulus_id": {
                "type": ["integer", "null"]
            },
            "deployment_ids": {
                "type": ["array", "null"]
            }
        }
    }

    monitor.prototype.asyncValidate = ajv.compile(
        monitor.prototype.validatorSchema
    )

    monitor.prototype.validateForCreate = async function(record) {
        return await monitor.prototype.asyncValidate(record)
    }

    monitor.prototype.validateForUpdate = async function(record) {
        return await monitor.prototype.asyncValidate(record)
    }

    monitor.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    monitor.prototype.validateAfterRead = async function(record) {
        return await monitor.prototype.asyncValidate(record)
    }

    return monitor
}