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
    type: String

    """
    @original-field
    
    """
    id_alfresco: String

    """
    @original-field
    
    """
    storage: String

    """
    @original-field
    
    """
    updatedAt: DateTime

    """
    @original-field
    
    """
    createdAt: DateTime

    """
    @original-field
    
    """
    deployment_id: Int

    associated_deployment(search: searchDeploymentInput): deployment
    
    """
    @search-request
    """
    file_annotationsFilter(search: searchAnnotationInput, order: [ orderAnnotationInput ], pagination: paginationInput!): [annotation]


    """
    @search-request
    """
    file_annotationsConnection(search: searchAnnotationInput, order: [ orderAnnotationInput ], pagination: paginationCursorInput!): AnnotationConnection

    """
    @count-request
    """
    countFilteredFile_annotations(search: searchAnnotationInput) : Int
  
    
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
    type
    id_alfresco
    storage
    updatedAt
    createdAt
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
    validateFileForCreation( url: String, type: String, id_alfresco: String, storage: String, updatedAt: DateTime, createdAt: DateTime , addAssociated_deployment:ID  , addFile_annotations:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateFileForUpdating(id: ID!, url: String, type: String, id_alfresco: String, storage: String, updatedAt: DateTime, createdAt: DateTime , addAssociated_deployment:ID, removeAssociated_deployment:ID   , addFile_annotations:[ID], removeFile_annotations:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateFileForDeletion(id: ID!): Boolean!
    validateFileAfterReading(id: ID!): Boolean!
    """
    filesZendroDefinition would return the static Zendro data model definition
    """
    filesZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addFile( url: String, type: String, id_alfresco: String, storage: String, updatedAt: DateTime, createdAt: DateTime , addAssociated_deployment:ID  , addFile_annotations:[ID] , skipAssociationsExistenceChecks:Boolean = false): file!
    updateFile(id: ID!, url: String, type: String, id_alfresco: String, storage: String, updatedAt: DateTime, createdAt: DateTime , addAssociated_deployment:ID, removeAssociated_deployment:ID   , addFile_annotations:[ID], removeFile_annotations:[ID]  , skipAssociationsExistenceChecks:Boolean = false): file!
    deleteFile(id: ID!): String!
    bulkAssociateFileWithDeployment_id(bulkAssociationInput: [bulkAssociationFileWithDeployment_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateFileWithDeployment_id(bulkAssociationInput: [bulkAssociationFileWithDeployment_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;