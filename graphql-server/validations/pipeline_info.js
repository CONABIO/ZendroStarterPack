// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(pipeline_info) {

    pipeline_info.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    pipeline_info.prototype.validatorSchema = {
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
            "url_repo_model": {
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

    pipeline_info.prototype.asyncValidate = ajv.compile(
        pipeline_info.prototype.validatorSchema
    )

    pipeline_info.prototype.validateForCreate = async function(record) {
        return await pipeline_info.prototype.asyncValidate(record)
    }

    pipeline_info.prototype.validateForUpdate = async function(record) {
        return await pipeline_info.prototype.asyncValidate(record)
    }

    pipeline_info.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    pipeline_info.prototype.validateAfterRead = async function(record) {
        return await pipeline_info.prototype.asyncValidate(record)
    }

    return pipeline_info
}