// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(annotations_geom_obs_type) {

    annotations_geom_obs_type.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    annotations_geom_obs_type.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "classified_by": {
                "type": ["string", "null"]
            },
            "classification_method": {
                "type": ["string", "null"]
            },
            "observation_type": {
                "type": ["string", "null"]
            },
            "confidence": {
                "type": ["number", "null"]
            },
            "geometry": {
                "type": ["object", "null"]
            },
            "video_frame_num": {
                "type": ["integer", "null"]
            },
            "frequency_min": {
                "type": ["number", "null"]
            },
            "frequency_max": {
                "type": ["number", "null"]
            },
            "time_min": {
                "type": ["number", "null"]
            },
            "time_max": {
                "type": ["number", "null"]
            },
            "metadata": {
                "type": ["object", "null"]
            },
            "product_id_alfesco": {
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
            "file_id": {
                "type": ["integer", "null"]
            },
            "pipeline_id": {
                "type": ["integer", "null"]
            }
        }
    }

    annotations_geom_obs_type.prototype.asyncValidate = ajv.compile(
        annotations_geom_obs_type.prototype.validatorSchema
    )

    annotations_geom_obs_type.prototype.validateForCreate = async function(record) {
        return await annotations_geom_obs_type.prototype.asyncValidate(record)
    }

    annotations_geom_obs_type.prototype.validateForUpdate = async function(record) {
        return await annotations_geom_obs_type.prototype.asyncValidate(record)
    }

    annotations_geom_obs_type.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    annotations_geom_obs_type.prototype.validateAfterRead = async function(record) {
        return await annotations_geom_obs_type.prototype.asyncValidate(record)
    }

    return annotations_geom_obs_type
}