module.exports = `
  type processed_files{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    file_id: Int

    """
    @original-field
    
    """
    pipeline_id: Int

      
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type Processed_filesConnection{
  edges: [Processed_filesEdge]
  processed_files: [processed_files]
  pageInfo: pageInfo!
}

type Processed_filesEdge{
  cursor: String!
  node: processed_files!
}

  enum processed_filesField {
    id
    file_id
    pipeline_id
  }
  
  input searchProcessed_filesInput {
    field: processed_filesField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchProcessed_filesInput]
  }

  input orderProcessed_filesInput{
    field: processed_filesField
    order: Order
  }



  type Query {
    processed_files(search: searchProcessed_filesInput, order: [ orderProcessed_filesInput ], pagination: paginationInput! ): [processed_files]
    readOneProcessed_files(id: ID!): processed_files
    countProcessed_files(search: searchProcessed_filesInput ): Int
    csvTableTemplateProcessed_files: [String]
    processed_filesConnection(search:searchProcessed_filesInput, order: [ orderProcessed_filesInput ], pagination: paginationCursorInput! ): Processed_filesConnection
    validateProcessed_filesForCreation( file_id: Int, pipeline_id: Int    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateProcessed_filesForUpdating(id: ID!, file_id: Int, pipeline_id: Int    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateProcessed_filesForDeletion(id: ID!): Boolean!
    validateProcessed_filesAfterReading(id: ID!): Boolean!
    """
    processed_filesZendroDefinition would return the static Zendro data model definition
    """
    processed_filesZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addProcessed_files( file_id: Int, pipeline_id: Int    , skipAssociationsExistenceChecks:Boolean = false): processed_files!
    updateProcessed_files(id: ID!, file_id: Int, pipeline_id: Int    , skipAssociationsExistenceChecks:Boolean = false): processed_files!
    deleteProcessed_files(id: ID!): String!
      }
`;