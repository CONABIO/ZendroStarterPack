// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(annotations_media) {

    annotations_media.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    annotations_media.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "file_id": {
                "type": ["integer", "null"]
            },
            "user_id": {
                "type": ["integer", "null"]
            },
            "annotation_method_id": {
                "type": ["integer", "null"]
            },
            "observation_type": {
                "type": ["string", "null"]
            },
            "confidence": {
                "type": ["number", "null"]
            },
            "pipeline_id": {
                "type": ["integer", "null"]
            },
            "is_setup_or_pickup": {
                "type": ["boolean", "null"]
            },
            "taxon_id": {
                "type": ["string", "null"]
            },
            "count": {
                "type": ["integer", "null"]
            },
            "life_stage": {
                "type": ["string", "null"]
            },
            "sex": {
                "type": ["string", "null"]
            },
            "behaviour": {
                "type": ["string", "null"]
            },
            "individual_id": {
                "type": ["string", "null"]
            },
            "comments": {
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
            }
        }
    }

    annotations_media.prototype.asyncValidate = ajv.compile(
        annotations_media.prototype.validatorSchema
    )

    annotations_media.prototype.validateForCreate = async function(record) {
        return await annotations_media.prototype.asyncValidate(record)
    }

    annotations_media.prototype.validateForUpdate = async function(record) {
        return await annotations_media.prototype.asyncValidate(record)
    }

    annotations_media.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    annotations_media.prototype.validateAfterRead = async function(record) {
        return await annotations_media.prototype.asyncValidate(record)
    }

    return annotations_media
}