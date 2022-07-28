/*
    Resolvers for basic CRUD operations
*/

const path = require('path');
const ecosystem = require(path.join(__dirname, '..', 'models', 'index.js')).ecosystem;
const cumulus = require(path.join(__dirname, '..', 'models', 'index.js')).cumulus;
const file_count = require(path.join(__dirname, '..', 'models', 'index.js')).file_count;


module.exports = {
    /**
     * visits - Check user authorization and return certain number, specified in pagination argument, of records that
     * holds the condition of search argument, all of them sorted as specified by the order argument.
     *
     * @param  {object} search     Search argument for filtering records
     * @param  {array} order       Type of sorting (ASC, DESC) for each field
     * @param  {object} pagination Offset and limit to get the records from and to respectively
     * @param  {object} context     Provided to every resolver holds contextual information like the resquest query and user info.
     * @return {array}             Array of records holding conditions specified by search, order and pagination argument
     */
    ecosystemFileCounts: async function(input, context) {
        let ecosystemFiles = await ecosystem.findOne({
            where: { id: input.ecosystem_id },
            include: [
                { 
                    model: cumulus, 
                    as: "cumulus_ecosystem",
                    include: [
                        {model: file_count, as: "file_counts"}
                    ] 
                }
            ]  
        })

        let file_count_ecosystem = []
        ecosystemFiles.cumulus_ecosystem.forEach(element => {
            element.file_counts.forEach(f => {
                file_count_ecosystem.push(f.dataValues)
            })
        });
        
        return {
            id: ecosystemFiles.id,
            ecosystem: ecosystemFiles.name,
            file_count_ecosystem: file_count_ecosystem
        }
    },


}