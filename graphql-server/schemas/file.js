module.exports = `
  type file{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    url: String

    """
    @original-field
    
    """
    metadata: JSON

    """
    @original-field
    
    """
    date: DateTime

    """
    @original-field
    
    """
    storage: String

    """
    @original-field
    
    """
    deployment_id: Int

    associated_deployment(search: searchDeploymentInput): deployment
    
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type FileConnection{
  edges: [FileEdge]
  files: [file]
  pageInfo: pageInfo!
}

type FileEdge{
  cursor: String!
  node: file!
}

  enum fileField {
    id
    url
    metadata
    date
    storage
    deployment_id
  }
  
  input searchFileInput {
    field: fileField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchFileInput]
  }

  input orderFileInput{
    field: fileField
    order: Order
  }

  input bulkAssociationFileWithDeployment_idInput{
    id: ID!
    deployment_id: ID!
  }

  type Query {
    files(search: searchFileInput, order: [ orderFileInput ], pagination: paginationInput! ): [file]
    readOneFile(id: ID!): file
    countFiles(search: searchFileInput ): Int
    csvTableTemplateFile: [String]
    filesConnection(search:searchFileInput, order: [ orderFileInput ], pagination: paginationCursorInput! ): FileConnection
    validateFileForCreation( url: String, metadata: JSON, date: DateTime, storage: String , addAssociated_deployment:ID   , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateFileForUpdating(id: ID!, url: String, metadata: JSON, date: DateTime, storage: String , addAssociated_deployment:ID, removeAssociated_deployment:ID    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateFileForDeletion(id: ID!): Boolean!
    validateFileAfterReading(id: ID!): Boolean!
    """
    filesZendroDefinition would return the static Zendro data model definition
    """
    filesZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addFile( url: String, metadata: JSON, date: DateTime, storage: String , addAssociated_deployment:ID   , skipAssociationsExistenceChecks:Boolean = false): file!
    updateFile(id: ID!, url: String, metadata: JSON, date: DateTime, storage: String , addAssociated_deployment:ID, removeAssociated_deployment:ID    , skipAssociationsExistenceChecks:Boolean = false): file!
    deleteFile(id: ID!): String!
    bulkAssociateFileWithDeployment_id(bulkAssociationInput: [bulkAssociationFileWithDeployment_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateFileWithDeployment_id(bulkAssociationInput: [bulkAssociationFileWithDeployment_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;