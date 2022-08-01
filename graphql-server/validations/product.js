// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(product) {

    product.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    product.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "type": {
                "type": ["string", "null"]
            },
            "url": {
                "type": ["string", "null"]
            },
            "observation_type": {
                "type": ["string", "null"]
            },
            "producer": {
                "type": ["string", "null"]
            },
            "project": {
                "type": ["string", "null"]
            },
            "metadata": {
                "type": ["object", "null"]
            },
            "audio_grid_id": {
                "type": ["integer", "null"]
            },
            "audio_distance_to_mean": {
                "type": ["number", "null"]
            },
            "createdAt": {
                "anyOf": [{
                    "isoDateTime": true
                }, {
                    "type": "null"
                }]
            },
            "updatedAt": {
                "anyOf": [{
                    "isoDateTime": true
                }, {
                    "type": "null"
                }]
            },
            "comments": {
                "type": ["string", "null"]
            },
            "file_ids": {
                "type": ["array", "null"]
            },
            "pipeline_id": {
                "type": ["integer", "null"]
            }
        }
    }

    product.prototype.asyncValidate = ajv.compile(
        product.prototype.validatorSchema
    )

    product.prototype.validateForCreate = async function(record) {
        return await product.prototype.asyncValidate(record)
    }

    product.prototype.validateForUpdate = async function(record) {
        return await product.prototype.asyncValidate(record)
    }

    product.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    product.prototype.validateAfterRead = async function(record) {
        return await product.prototype.asyncValidate(record)
    }

    return product
}