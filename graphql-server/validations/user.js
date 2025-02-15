// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(user) {

    user.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    user.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "username": {
                "type": ["string", "null"]
            },
            "password": {
                "type": ["string", "null"]
            },
            "first_name": {
                "type": ["string", "null"]
            },
            "last_name": {
                "type": ["string", "null"]
            },
            "email": {
                "type": ["string", "null"]
            },
            "is_active": {
                "type": ["boolean", "null"]
            },
            "last_login": {
                "anyOf": [{
                    "isoDateTime": true
                }, {
                    "type": "null"
                }]
            },
            "institution_id": {
                "type": ["integer", "null"]
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

    user.prototype.asyncValidate = ajv.compile(
        user.prototype.validatorSchema
    )

    user.prototype.validateForCreate = async function(record) {
        return await user.prototype.asyncValidate(record)
    }

    user.prototype.validateForUpdate = async function(record) {
        return await user.prototype.asyncValidate(record)
    }

    user.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    user.prototype.validateAfterRead = async function(record) {
        return await user.prototype.asyncValidate(record)
    }

    return user
}