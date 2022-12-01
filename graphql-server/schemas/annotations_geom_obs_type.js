module.exports = `
  type annotations_geom_obs_type{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    classified_by: String

    """
    @original-field
    
    """
    classification_method: String

    """
    @original-field
    
    """
    observation_type: String

    """
    @original-field
    
    """
    confidence: Float

    """
    @original-field
    
    """
    geometry: GeometryCollection

    """
    @original-field
    
    """
    video_frame_num: Int

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
    file_id: Int

    """
    @original-field
    
    """
    user_id: Int

    """
    @original-field
    
    """
    pipeline_id: Int

    fileTo(search: searchFileInput): file
  userTo(search: searchUserInput): user
  pipeline_annotation(search: searchPipeline_infoInput): pipeline_info
    
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type Annotations_geom_obs_typeConnection{
  edges: [Annotations_geom_obs_typeEdge]
  annotations_geom_obs_types: [annotations_geom_obs_type]
  pageInfo: pageInfo!
}

type Annotations_geom_obs_typeEdge{
  cursor: String!
  node: annotations_geom_obs_type!
}

  enum annotations_geom_obs_typeField {
    id
    classified_by
    classification_method
    observation_type
    confidence
    geometry
    video_frame_num
    updatedAt
    createdAt
    file_id
    user_id
    pipeline_id
  }
  
  input searchAnnotations_geom_obs_typeInput {
    field: annotations_geom_obs_typeField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchAnnotations_geom_obs_typeInput]
  }

  input orderAnnotations_geom_obs_typeInput{
    field: annotations_geom_obs_typeField
    order: Order
  }

  input bulkAssociationAnnotations_geom_obs_typeWithFile_idInput{
    id: ID!
    file_id: ID!
  }  input bulkAssociationAnnotations_geom_obs_typeWithUser_idInput{
    id: ID!
    user_id: ID!
  }  input bulkAssociationAnnotations_geom_obs_typeWithPipeline_idInput{
    id: ID!
    pipeline_id: ID!
  }

  type Query {
    annotations_geom_obs_types(search: searchAnnotations_geom_obs_typeInput, order: [ orderAnnotations_geom_obs_typeInput ], pagination: paginationInput! ): [annotations_geom_obs_type]
    readOneAnnotations_geom_obs_type(id: ID!): annotations_geom_obs_type
    countAnnotations_geom_obs_types(search: searchAnnotations_geom_obs_typeInput ): Int
    csvTableTemplateAnnotations_geom_obs_type: [String]
    annotations_geom_obs_typesConnection(search:searchAnnotations_geom_obs_typeInput, order: [ orderAnnotations_geom_obs_typeInput ], pagination: paginationCursorInput! ): Annotations_geom_obs_typeConnection
    validateAnnotations_geom_obs_typeForCreation( classified_by: String, classification_method: String, observation_type: String, confidence: Float, geometry: GeometryCollection, video_frame_num: Int, updatedAt: DateTime, createdAt: DateTime , addFileTo:ID, addUserTo:ID, addPipeline_annotation:ID   , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateAnnotations_geom_obs_typeForUpdating(id: ID!, classified_by: String, classification_method: String, observation_type: String, confidence: Float, geometry: GeometryCollection, video_frame_num: Int, updatedAt: DateTime, createdAt: DateTime , addFileTo:ID, removeFileTo:ID , addUserTo:ID, removeUserTo:ID , addPipeline_annotation:ID, removePipeline_annotation:ID    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateAnnotations_geom_obs_typeForDeletion(id: ID!): Boolean!
    validateAnnotations_geom_obs_typeAfterReading(id: ID!): Boolean!
    """
    annotations_geom_obs_typesZendroDefinition would return the static Zendro data model definition
    """
    annotations_geom_obs_typesZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addAnnotations_geom_obs_type( classified_by: String, classification_method: String, observation_type: String, confidence: Float, geometry: GeometryCollection, video_frame_num: Int, updatedAt: DateTime, createdAt: DateTime , addFileTo:ID, addUserTo:ID, addPipeline_annotation:ID   , skipAssociationsExistenceChecks:Boolean = false): annotations_geom_obs_type!
    updateAnnotations_geom_obs_type(id: ID!, classified_by: String, classification_method: String, observation_type: String, confidence: Float, geometry: GeometryCollection, video_frame_num: Int, updatedAt: DateTime, createdAt: DateTime , addFileTo:ID, removeFileTo:ID , addUserTo:ID, removeUserTo:ID , addPipeline_annotation:ID, removePipeline_annotation:ID    , skipAssociationsExistenceChecks:Boolean = false): annotations_geom_obs_type!
    deleteAnnotations_geom_obs_type(id: ID!): String!
    bulkAssociateAnnotations_geom_obs_typeWithFile_id(bulkAssociationInput: [bulkAssociationAnnotations_geom_obs_typeWithFile_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotations_geom_obs_typeWithFile_id(bulkAssociationInput: [bulkAssociationAnnotations_geom_obs_typeWithFile_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateAnnotations_geom_obs_typeWithUser_id(bulkAssociationInput: [bulkAssociationAnnotations_geom_obs_typeWithUser_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotations_geom_obs_typeWithUser_id(bulkAssociationInput: [bulkAssociationAnnotations_geom_obs_typeWithUser_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateAnnotations_geom_obs_typeWithPipeline_id(bulkAssociationInput: [bulkAssociationAnnotations_geom_obs_typeWithPipeline_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotations_geom_obs_typeWithPipeline_id(bulkAssociationInput: [bulkAssociationAnnotations_geom_obs_typeWithPipeline_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;