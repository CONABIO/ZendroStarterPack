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

    associated_deployment(search: searchDeploymentInput): deployment
    
    """
    @search-request
    """
    file_annotations_geomFilter(search: searchAnnotations_geomInput, order: [ orderAnnotations_geomInput ], pagination: paginationInput!): [annotations_geom]


    """
    @search-request
    """
    file_annotations_geomConnection(search: searchAnnotations_geomInput, order: [ orderAnnotations_geomInput ], pagination: paginationCursorInput!): Annotations_geomConnection

    """
    @count-request
    """
    countFilteredFile_annotations_geom(search: searchAnnotations_geomInput) : Int
  
    """
    @search-request
    """
    file_annotations_mediaFilter(search: searchAnnotations_mediaInput, order: [ orderAnnotations_mediaInput ], pagination: paginationInput!): [annotations_media]


    """
    @search-request
    """
    file_annotations_mediaConnection(search: searchAnnotations_mediaInput, order: [ orderAnnotations_mediaInput ], pagination: paginationCursorInput!): Annotations_mediaConnection

    """
    @count-request
    """
    countFilteredFile_annotations_media(search: searchAnnotations_mediaInput) : Int
  
    """
    @search-request
    """
    pipelineInfoFilter(search: searchPipeline_infoInput, order: [ orderPipeline_infoInput ], pagination: paginationInput!): [pipeline_info]


    """
    @search-request
    """
    pipelineInfoConnection(search: searchPipeline_infoInput, order: [ orderPipeline_infoInput ], pagination: paginationCursorInput!): Pipeline_infoConnection

    """
    @count-request
    """
    countFilteredPipelineInfo(search: searchPipeline_infoInput) : Int
  
    
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
    validateFileForCreation( url: String, date_deployment_device: Date, type: String, id_alfresco: String, storage: String, updatedAt: DateTime, createdAt: DateTime , addAssociated_deployment:ID  , addFile_annotations_geom:[ID], addFile_annotations_media:[ID], addPipelineInfo:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateFileForUpdating(id: ID!, url: String, date_deployment_device: Date, type: String, id_alfresco: String, storage: String, updatedAt: DateTime, createdAt: DateTime , addAssociated_deployment:ID, removeAssociated_deployment:ID   , addFile_annotations_geom:[ID], removeFile_annotations_geom:[ID] , addFile_annotations_media:[ID], removeFile_annotations_media:[ID] , addPipelineInfo:[ID], removePipelineInfo:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateFileForDeletion(id: ID!): Boolean!
    validateFileAfterReading(id: ID!): Boolean!
    """
    filesZendroDefinition would return the static Zendro data model definition
    """
    filesZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addFile( url: String, date_deployment_device: Date, type: String, id_alfresco: String, storage: String, updatedAt: DateTime, createdAt: DateTime , addAssociated_deployment:ID  , addFile_annotations_geom:[ID], addFile_annotations_media:[ID], addPipelineInfo:[ID] , skipAssociationsExistenceChecks:Boolean = false): file!
    updateFile(id: ID!, url: String, date_deployment_device: Date, type: String, id_alfresco: String, storage: String, updatedAt: DateTime, createdAt: DateTime , addAssociated_deployment:ID, removeAssociated_deployment:ID   , addFile_annotations_geom:[ID], removeFile_annotations_geom:[ID] , addFile_annotations_media:[ID], removeFile_annotations_media:[ID] , addPipelineInfo:[ID], removePipelineInfo:[ID]  , skipAssociationsExistenceChecks:Boolean = false): file!
    deleteFile(id: ID!): String!
    bulkAssociateFileWithDeployment_id(bulkAssociationInput: [bulkAssociationFileWithDeployment_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateFileWithDeployment_id(bulkAssociationInput: [bulkAssociationFileWithDeployment_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;