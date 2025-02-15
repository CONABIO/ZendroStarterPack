// Delete this file, if you do not want or need any validations.
const validatorUtil = require('../utils/validatorUtil')
const Ajv = require('ajv')
const ajv = validatorUtil.addValidatorFunc(validatorUtil.addDateTimeAjvKeywords(new Ajv({
    allErrors: true
})))

// Dear user, edit the schema to adjust it to your model
module.exports.validator_patch = function(node) {

    node.prototype.validationControl = {
        validateForCreate: true,
        validateForUpdate: true,
        validateForDelete: false,
        validateAfterRead: false
    }

    node.prototype.validatorSchema = {
        "$async": true,
        "properties": {
            "nomenclatura": {
                "type": ["string", "null"]
            },
            "con_socio": {
                "type": ["integer", "null"]
            },
            "fid": {
                "type": ["integer", "null"]
            },
            "location": {
                "type": ["object", "null"]
            },
            "cat_integr": {
                "type": ["string", "null"]
            },
            "cumulus_id": {
                "type": ["integer", "null"]
            },
            "ecosystem_id": {
                "type": ["integer", "null"]
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

    node.prototype.asyncValidate = ajv.compile(
        node.prototype.validatorSchema
    )

    node.prototype.validateForCreate = async function(record) {
        return await node.prototype.asyncValidate(record)
    }

    node.prototype.validateForUpdate = async function(record) {
        return await node.prototype.asyncValidate(record)
    }

    node.prototype.validateForDelete = async function(id) {

        //TODO: on the input you have the id of the record to be deleted, no generic
        // validation checks are available. You might need to import the correspondant model
        // in order to read the whole record info and the do the validation.

        return {
            error: null
        }
    }

    node.prototype.validateAfterRead = async function(record) {
        return await node.prototype.asyncValidate(record)
    }

    return node
}