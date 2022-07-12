// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(model_info) {

    model_info.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    model_info.prototype.validatorSchema = {
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

    model_info.prototype.asyncValidate = ajv.compile(
        model_info.prototype.validatorSchema
    )

    model_info.prototype.validateForCreate = async function(record) {
        return await model_info.prototype.asyncValidate(record)
    }

    model_info.prototype.validateForUpdate = async function(record) {
        return await model_info.prototype.asyncValidate(record)
    }

    model_info.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    model_info.prototype.validateAfterRead = async function(record) {
        return await model_info.prototype.asyncValidate(record)
    }

    return model_info
}