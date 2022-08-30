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
    date_deployment_device: Date

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

    """
    @original-field
    
    """
    product_ids: [Int]

    associated_deployment(search: searchDeploymentInput): deployment
    
    """
    @search-request
    """
    file_annotationsFilter(search: searchAnnotations_geom_obs_typeInput, order: [ orderAnnotations_geom_obs_typeInput ], pagination: paginationInput!): [annotations_geom_obs_type]


    """
    @search-request
    """
    file_annotationsConnection(search: searchAnnotations_geom_obs_typeInput, order: [ orderAnnotations_geom_obs_typeInput ], pagination: paginationCursorInput!): Annotations_geom_obs_typeConnection

    """
    @count-request
    """
    countFilteredFile_annotations(search: searchAnnotations_geom_obs_typeInput) : Int
  
    """
    @search-request
    """
    file_productsFilter(search: searchProductInput, order: [ orderProductInput ], pagination: paginationInput!): [product]


    """
    @search-request
    """
    file_productsConnection(search: searchProductInput, order: [ orderProductInput ], pagination: paginationCursorInput!): ProductConnection

    """
    @count-request
    """
    countFilteredFile_products(search: searchProductInput) : Int
  
    
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
    date_deployment_device
    type
    id_alfresco
    storage
    updatedAt
    createdAt
    deployment_id
    product_ids
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
    validateFileForCreation( url: String, date_deployment_device: Date, type: String, id_alfresco: String, storage: String, updatedAt: DateTime, createdAt: DateTime , addAssociated_deployment:ID  , addFile_annotations:[ID], addFile_products:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateFileForUpdating(id: ID!, url: String, date_deployment_device: Date, type: String, id_alfresco: String, storage: String, updatedAt: DateTime, createdAt: DateTime , addAssociated_deployment:ID, removeAssociated_deployment:ID   , addFile_annotations:[ID], removeFile_annotations:[ID] , addFile_products:[ID], removeFile_products:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateFileForDeletion(id: ID!): Boolean!
    validateFileAfterReading(id: ID!): Boolean!
    """
    filesZendroDefinition would return the static Zendro data model definition
    """
    filesZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addFile( url: String, date_deployment_device: Date, type: String, id_alfresco: String, storage: String, updatedAt: DateTime, createdAt: DateTime , addAssociated_deployment:ID  , addFile_annotations:[ID], addFile_products:[ID] , skipAssociationsExistenceChecks:Boolean = false): file!
    updateFile(id: ID!, url: String, date_deployment_device: Date, type: String, id_alfresco: String, storage: String, updatedAt: DateTime, createdAt: DateTime , addAssociated_deployment:ID, removeAssociated_deployment:ID   , addFile_annotations:[ID], removeFile_annotations:[ID] , addFile_products:[ID], removeFile_products:[ID]  , skipAssociationsExistenceChecks:Boolean = false): file!
    deleteFile(id: ID!): String!
    bulkAssociateFileWithDeployment_id(bulkAssociationInput: [bulkAssociationFileWithDeployment_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateFileWithDeployment_id(bulkAssociationInput: [bulkAssociationFileWithDeployment_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;