module.exports = `
  type annotations_media{
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
    user_id: Int

    """
    @original-field
    
    """
    annotation_method_id: Int

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
    pipeline_id: Int

    """
    @original-field
    
    """
    is_setup_or_pickup: Boolean

    """
    @original-field
    
    """
    taxon_id: String

    """
    @original-field
    
    """
    count: Int

    """
    @original-field
    
    """
    life_stage: String

    """
    @original-field
    
    """
    sex: String

    """
    @original-field
    
    """
    behaviour: String

    """
    @original-field
    
    """
    individual_id: String

    """
    @original-field
    
    """
    comments: String

    """
    @original-field
    
    """
    updatedAt: DateTime

    """
    @original-field
    
    """
    createdAt: DateTime

    fileToMedia(search: searchFileInput): file
  userToMedia(search: searchUserInput): user
  annotationMethodMedia(search: searchAnnotations_methodInput): annotations_method
  pipeline_annotation_media(search: searchPipeline_infoInput): pipeline_info
    
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type Annotations_mediaConnection{
  edges: [Annotations_mediaEdge]
  annotations_media: [annotations_media]
  pageInfo: pageInfo!
}

type Annotations_mediaEdge{
  cursor: String!
  node: annotations_media!
}

  enum annotations_mediaField {
    id
    file_id
    user_id
    annotation_method_id
    observation_type
    confidence
    pipeline_id
    is_setup_or_pickup
    taxon_id
    count
    life_stage
    sex
    behaviour
    individual_id
    comments
    updatedAt
    createdAt
  }
  
  input searchAnnotations_mediaInput {
    field: annotations_mediaField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchAnnotations_mediaInput]
  }

  input orderAnnotations_mediaInput{
    field: annotations_mediaField
    order: Order
  }

  input bulkAssociationAnnotations_mediaWithFile_idInput{
    id: ID!
    file_id: ID!
  }  input bulkAssociationAnnotations_mediaWithUser_idInput{
    id: ID!
    user_id: ID!
  }  input bulkAssociationAnnotations_mediaWithAnnotation_method_idInput{
    id: ID!
    annotation_method_id: ID!
  }  input bulkAssociationAnnotations_mediaWithPipeline_idInput{
    id: ID!
    pipeline_id: ID!
  }

  type Query {
    annotations_media(search: searchAnnotations_mediaInput, order: [ orderAnnotations_mediaInput ], pagination: paginationInput! ): [annotations_media]
    readOneAnnotations_media(id: ID!): annotations_media
    countAnnotations_media(search: searchAnnotations_mediaInput ): Int
    csvTableTemplateAnnotations_media: [String]
    annotations_mediaConnection(search:searchAnnotations_mediaInput, order: [ orderAnnotations_mediaInput ], pagination: paginationCursorInput! ): Annotations_mediaConnection
    validateAnnotations_mediaForCreation( observation_type: String, confidence: Float, is_setup_or_pickup: Boolean, taxon_id: String, count: Int, life_stage: String, sex: String, behaviour: String, individual_id: String, comments: String, updatedAt: DateTime, createdAt: DateTime , addFileToMedia:ID, addUserToMedia:ID, addAnnotationMethodMedia:ID, addPipeline_annotation_media:ID   , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateAnnotations_mediaForUpdating(id: ID!, observation_type: String, confidence: Float, is_setup_or_pickup: Boolean, taxon_id: String, count: Int, life_stage: String, sex: String, behaviour: String, individual_id: String, comments: String, updatedAt: DateTime, createdAt: DateTime , addFileToMedia:ID, removeFileToMedia:ID , addUserToMedia:ID, removeUserToMedia:ID , addAnnotationMethodMedia:ID, removeAnnotationMethodMedia:ID , addPipeline_annotation_media:ID, removePipeline_annotation_media:ID    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateAnnotations_mediaForDeletion(id: ID!): Boolean!
    validateAnnotations_mediaAfterReading(id: ID!): Boolean!
    """
    annotations_mediaZendroDefinition would return the static Zendro data model definition
    """
    annotations_mediaZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addAnnotations_media( observation_type: String, confidence: Float, is_setup_or_pickup: Boolean, taxon_id: String, count: Int, life_stage: String, sex: String, behaviour: String, individual_id: String, comments: String, updatedAt: DateTime, createdAt: DateTime , addFileToMedia:ID, addUserToMedia:ID, addAnnotationMethodMedia:ID, addPipeline_annotation_media:ID   , skipAssociationsExistenceChecks:Boolean = false): annotations_media!
    updateAnnotations_media(id: ID!, observation_type: String, confidence: Float, is_setup_or_pickup: Boolean, taxon_id: String, count: Int, life_stage: String, sex: String, behaviour: String, individual_id: String, comments: String, updatedAt: DateTime, createdAt: DateTime , addFileToMedia:ID, removeFileToMedia:ID , addUserToMedia:ID, removeUserToMedia:ID , addAnnotationMethodMedia:ID, removeAnnotationMethodMedia:ID , addPipeline_annotation_media:ID, removePipeline_annotation_media:ID    , skipAssociationsExistenceChecks:Boolean = false): annotations_media!
    deleteAnnotations_media(id: ID!): String!
    bulkAssociateAnnotations_mediaWithFile_id(bulkAssociationInput: [bulkAssociationAnnotations_mediaWithFile_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotations_mediaWithFile_id(bulkAssociationInput: [bulkAssociationAnnotations_mediaWithFile_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateAnnotations_mediaWithUser_id(bulkAssociationInput: [bulkAssociationAnnotations_mediaWithUser_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotations_mediaWithUser_id(bulkAssociationInput: [bulkAssociationAnnotations_mediaWithUser_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateAnnotations_mediaWithAnnotation_method_id(bulkAssociationInput: [bulkAssociationAnnotations_mediaWithAnnotation_method_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotations_mediaWithAnnotation_method_id(bulkAssociationInput: [bulkAssociationAnnotations_mediaWithAnnotation_method_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateAnnotations_mediaWithPipeline_id(bulkAssociationInput: [bulkAssociationAnnotations_mediaWithPipeline_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotations_mediaWithPipeline_id(bulkAssociationInput: [bulkAssociationAnnotations_mediaWithPipeline_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;