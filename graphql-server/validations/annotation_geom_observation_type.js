// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(annotation_geom_observation_type) {

    annotation_geom_observation_type.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    annotation_geom_observation_type.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "annotations_by": {
                "type": ["string", "null"]
            },
            "observation_type": {
                "type": ["string", "null"]
            },
            "confidence": {
                "type": ["number", "null"]
            },
            "bbox_geometry": {
                "type": ["object", "null"]
            },
            "geometry": {
                "type": ["object", "null"]
            },
            "timestamp_video": {
                "anyOf": [{
                    "isoDateTime": true
                }, {
                    "type": "null"
                }]
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
            "model_id": {
                "type": ["integer", "null"]
            }
        }
    }

    annotation_geom_observation_type.prototype.asyncValidate = ajv.compile(
        annotation_geom_observation_type.prototype.validatorSchema
    )

    annotation_geom_observation_type.prototype.validateForCreate = async function(record) {
        return await annotation_geom_observation_type.prototype.asyncValidate(record)
    }

    annotation_geom_observation_type.prototype.validateForUpdate = async function(record) {
        return await annotation_geom_observation_type.prototype.asyncValidate(record)
    }

    annotation_geom_observation_type.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    annotation_geom_observation_type.prototype.validateAfterRead = async function(record) {
        return await annotation_geom_observation_type.prototype.asyncValidate(record)
    }

    return annotation_geom_observation_type
}