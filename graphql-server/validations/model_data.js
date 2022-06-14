// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(model_data) {

    model_data.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    model_data.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "version": {
                "type": ["string", "null"]
            },
            "commit_dvc_of_data_ref": {
                "type": ["string", "null"]
            },
            "commit_dvc_of_model": {
                "type": ["string", "null"]
            },
            "url_repo_model_info": {
                "type": ["string", "null"]
            },
            "updatedAt": {
                "anyOf": [{
                    "isoDateTime": true
                }, {
                    "type": "null"
                }]
            },
            "createdAt": {
                "anyOf": [{
                    "isoDateTime": true
                }, {
                    "type": "null"
                }]
            },
            "comments": {
                "type": ["string", "null"]
            }
        }
    }

    model_data.prototype.asyncValidate = ajv.compile(
        model_data.prototype.validatorSchema
    )

    model_data.prototype.validateForCreate = async function(record) {
        return await model_data.prototype.asyncValidate(record)
    }

    model_data.prototype.validateForUpdate = async function(record) {
        return await model_data.prototype.asyncValidate(record)
    }

    model_data.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    model_data.prototype.validateAfterRead = async function(record) {
        return await model_data.prototype.asyncValidate(record)
    }

    return model_data
}