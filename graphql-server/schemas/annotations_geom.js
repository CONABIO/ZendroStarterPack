module.exports = `
  type annotations_geom{
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
    bbox: String

    """
    @original-field
    
    """
    video_frame_num: Int

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

    fileToGeom(search: searchFileInput): file
  userToGeom(search: searchUserInput): user
  annotationMethodGeom(search: searchAnnotations_methodInput): annotations_method
  pipeline_annotation_geom(search: searchPipeline_infoInput): pipeline_info
    
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type Annotations_geomConnection{
  edges: [Annotations_geomEdge]
  annotations_geoms: [annotations_geom]
  pageInfo: pageInfo!
}

type Annotations_geomEdge{
  cursor: String!
  node: annotations_geom!
}

  enum annotations_geomField {
    id
    file_id
    user_id
    annotation_method_id
    observation_type
    confidence
    pipeline_id
    bbox
    video_frame_num
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
  
  input searchAnnotations_geomInput {
    field: annotations_geomField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchAnnotations_geomInput]
  }

  input orderAnnotations_geomInput{
    field: annotations_geomField
    order: Order
  }

  input bulkAssociationAnnotations_geomWithFile_idInput{
    id: ID!
    file_id: ID!
  }  input bulkAssociationAnnotations_geomWithUser_idInput{
    id: ID!
    user_id: ID!
  }  input bulkAssociationAnnotations_geomWithAnnotation_method_idInput{
    id: ID!
    annotation_method_id: ID!
  }  input bulkAssociationAnnotations_geomWithPipeline_idInput{
    id: ID!
    pipeline_id: ID!
  }

  type Query {
    annotations_geoms(search: searchAnnotations_geomInput, order: [ orderAnnotations_geomInput ], pagination: paginationInput! ): [annotations_geom]
    readOneAnnotations_geom(id: ID!): annotations_geom
    countAnnotations_geoms(search: searchAnnotations_geomInput ): Int
    csvTableTemplateAnnotations_geom: [String]
    annotations_geomsConnection(search:searchAnnotations_geomInput, order: [ orderAnnotations_geomInput ], pagination: paginationCursorInput! ): Annotations_geomConnection
    validateAnnotations_geomForCreation( observation_type: String, confidence: Float, bbox: String, video_frame_num: Int, is_setup_or_pickup: Boolean, taxon_id: String, count: Int, life_stage: String, sex: String, behaviour: String, individual_id: String, comments: String, updatedAt: DateTime, createdAt: DateTime , addFileToGeom:ID, addUserToGeom:ID, addAnnotationMethodGeom:ID, addPipeline_annotation_geom:ID   , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateAnnotations_geomForUpdating(id: ID!, observation_type: String, confidence: Float, bbox: String, video_frame_num: Int, is_setup_or_pickup: Boolean, taxon_id: String, count: Int, life_stage: String, sex: String, behaviour: String, individual_id: String, comments: String, updatedAt: DateTime, createdAt: DateTime , addFileToGeom:ID, removeFileToGeom:ID , addUserToGeom:ID, removeUserToGeom:ID , addAnnotationMethodGeom:ID, removeAnnotationMethodGeom:ID , addPipeline_annotation_geom:ID, removePipeline_annotation_geom:ID    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateAnnotations_geomForDeletion(id: ID!): Boolean!
    validateAnnotations_geomAfterReading(id: ID!): Boolean!
    """
    annotations_geomsZendroDefinition would return the static Zendro data model definition
    """
    annotations_geomsZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addAnnotations_geom( observation_type: String, confidence: Float, bbox: String, video_frame_num: Int, is_setup_or_pickup: Boolean, taxon_id: String, count: Int, life_stage: String, sex: String, behaviour: String, individual_id: String, comments: String, updatedAt: DateTime, createdAt: DateTime , addFileToGeom:ID, addUserToGeom:ID, addAnnotationMethodGeom:ID, addPipeline_annotation_geom:ID   , skipAssociationsExistenceChecks:Boolean = false): annotations_geom!
    updateAnnotations_geom(id: ID!, observation_type: String, confidence: Float, bbox: String, video_frame_num: Int, is_setup_or_pickup: Boolean, taxon_id: String, count: Int, life_stage: String, sex: String, behaviour: String, individual_id: String, comments: String, updatedAt: DateTime, createdAt: DateTime , addFileToGeom:ID, removeFileToGeom:ID , addUserToGeom:ID, removeUserToGeom:ID , addAnnotationMethodGeom:ID, removeAnnotationMethodGeom:ID , addPipeline_annotation_geom:ID, removePipeline_annotation_geom:ID    , skipAssociationsExistenceChecks:Boolean = false): annotations_geom!
    deleteAnnotations_geom(id: ID!): String!
    bulkAssociateAnnotations_geomWithFile_id(bulkAssociationInput: [bulkAssociationAnnotations_geomWithFile_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotations_geomWithFile_id(bulkAssociationInput: [bulkAssociationAnnotations_geomWithFile_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateAnnotations_geomWithUser_id(bulkAssociationInput: [bulkAssociationAnnotations_geomWithUser_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotations_geomWithUser_id(bulkAssociationInput: [bulkAssociationAnnotations_geomWithUser_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateAnnotations_geomWithAnnotation_method_id(bulkAssociationInput: [bulkAssociationAnnotations_geomWithAnnotation_method_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotations_geomWithAnnotation_method_id(bulkAssociationInput: [bulkAssociationAnnotations_geomWithAnnotation_method_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateAnnotations_geomWithPipeline_id(bulkAssociationInput: [bulkAssociationAnnotations_geomWithPipeline_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotations_geomWithPipeline_id(bulkAssociationInput: [bulkAssociationAnnotations_geomWithPipeline_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;