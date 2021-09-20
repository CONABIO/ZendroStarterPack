// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(calendar) {

    calendar.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    calendar.prototype.validatorSchema = {
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
            "created_at": {
                "anyOf": [{
                    "isoDateTime": true
                }, {
                    "type": "null"
                }]
            },
            "updated_at": {
                "anyOf": [{
                    "isoDateTime": true
                }, {
                    "type": "null"
                }]
            },
            "sipecam_year": {
                "type": ["string", "null"]
            },
            "order": {
                "type": ["integer", "null"]
            }
        }
    }

    calendar.prototype.asyncValidate = ajv.compile(
        calendar.prototype.validatorSchema
    )

    calendar.prototype.validateForCreate = async function(record) {
        return await calendar.prototype.asyncValidate(record)
    }

    calendar.prototype.validateForUpdate = async function(record) {
        return await calendar.prototype.asyncValidate(record)
    }

    calendar.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    calendar.prototype.validateAfterRead = async function(record) {
        return await calendar.prototype.asyncValidate(record)
    }

    return calendar
}