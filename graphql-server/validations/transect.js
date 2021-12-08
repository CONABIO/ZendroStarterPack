// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(transect) {

    transect.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    transect.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "number": {
                "type": ["integer", "null"]
            },
            "sum_vegetation_structure": {
                "type": ["number", "null"]
            },
            "sum_indicator_species": {
                "type": ["number", "null"]
            },
            "sum_impact": {
                "type": ["number", "null"]
            },
            "date_transecto": {
                "anyOf": [{
                    "isoDateTime": true
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
            "percentage": {
                "type": ["number", "null"]
            },
            "node_id": {
                "type": ["integer", "null"]
            }
        }
    }

    transect.prototype.asyncValidate = ajv.compile(
        transect.prototype.validatorSchema
    )

    transect.prototype.validateForCreate = async function(record) {
        return await transect.prototype.asyncValidate(record)
    }

    transect.prototype.validateForUpdate = async function(record) {
        return await transect.prototype.asyncValidate(record)
    }

    transect.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    transect.prototype.validateAfterRead = async function(record) {
        return await transect.prototype.asyncValidate(record)
    }

    return transect
}