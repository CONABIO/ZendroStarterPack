// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(deployment) {

    deployment.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    deployment.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "date_started": {
                "anyOf": [{
                    "isoDate": true
                }, {
                    "type": "null"
                }]
            },
            "date_finished": {
                "anyOf": [{
                    "isoDate": true
                }, {
                    "type": "null"
                }]
            },
            "latitude": {
                "type": ["number", "null"]
            },
            "longitude": {
                "type": ["number", "null"]
            },
            "altitude": {
                "type": ["number", "null"]
            },
            "comments": {
                "type": ["string", "null"]
            },
            "device_id": {
                "type": ["integer", "null"]
            }
        }
    }

    deployment.prototype.asyncValidate = ajv.compile(
        deployment.prototype.validatorSchema
    )

    deployment.prototype.validateForCreate = async function(record) {
        return await deployment.prototype.asyncValidate(record)
    }

    deployment.prototype.validateForUpdate = async function(record) {
        return await deployment.prototype.asyncValidate(record)
    }

    deployment.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    deployment.prototype.validateAfterRead = async function(record) {
        return await deployment.prototype.asyncValidate(record)
    }

    return deployment
}