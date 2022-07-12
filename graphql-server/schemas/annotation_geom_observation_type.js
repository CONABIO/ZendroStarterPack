module.exports = `
  type annotation_geom_observation_type{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    annotations_by: String

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
    bbox_geometry: Polygon

    """
    @original-field
    
    """
    geometry: GeometryCollection

    """
    @original-field
    
    """
    timestamp_video: DateTime

    """
    @original-field
    
    """
    frequency_min: Float

    """
    @original-field
    
    """
    frequency_max: Float

    """
    @original-field
    
    """
    time_min: Float

    """
    @original-field
    
    """
    time_max: Float

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
    model_id: Int

    fileTo(search: searchFileInput): file
  model(search: searchModel_infoInput): model_info
    
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type Annotation_geom_observation_typeConnection{
  edges: [Annotation_geom_observation_typeEdge]
  annotation_geom_observation_types: [annotation_geom_observation_type]
  pageInfo: pageInfo!
}

type Annotation_geom_observation_typeEdge{
  cursor: String!
  node: annotation_geom_observation_type!
}

  enum annotation_geom_observation_typeField {
    id
    annotations_by
    observation_type
    confidence
    bbox_geometry
    geometry
    timestamp_video
    frequency_min
    frequency_max
    time_min
    time_max
    updatedAt
    createdAt
    file_id
    model_id
  }
  
  input searchAnnotation_geom_observation_typeInput {
    field: annotation_geom_observation_typeField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchAnnotation_geom_observation_typeInput]
  }

  input orderAnnotation_geom_observation_typeInput{
    field: annotation_geom_observation_typeField
    order: Order
  }

  input bulkAssociationAnnotation_geom_observation_typeWithFile_idInput{
    id: ID!
    file_id: ID!
  }  input bulkAssociationAnnotation_geom_observation_typeWithModel_idInput{
    id: ID!
    model_id: ID!
  }

  type Query {
    annotation_geom_observation_types(search: searchAnnotation_geom_observation_typeInput, order: [ orderAnnotation_geom_observation_typeInput ], pagination: paginationInput! ): [annotation_geom_observation_type]
    readOneAnnotation_geom_observation_type(id: ID!): annotation_geom_observation_type
    countAnnotation_geom_observation_types(search: searchAnnotation_geom_observation_typeInput ): Int
    csvTableTemplateAnnotation_geom_observation_type: [String]
    annotation_geom_observation_typesConnection(search:searchAnnotation_geom_observation_typeInput, order: [ orderAnnotation_geom_observation_typeInput ], pagination: paginationCursorInput! ): Annotation_geom_observation_typeConnection
    validateAnnotation_geom_observation_typeForCreation( annotations_by: String, observation_type: String, confidence: Float, bbox_geometry: Polygon, geometry: GeometryCollection, timestamp_video: DateTime, frequency_min: Float, frequency_max: Float, time_min: Float, time_max: Float, updatedAt: DateTime, createdAt: DateTime , addFileTo:ID, addModel:ID   , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateAnnotation_geom_observation_typeForUpdating(id: ID!, annotations_by: String, observation_type: String, confidence: Float, bbox_geometry: Polygon, geometry: GeometryCollection, timestamp_video: DateTime, frequency_min: Float, frequency_max: Float, time_min: Float, time_max: Float, updatedAt: DateTime, createdAt: DateTime , addFileTo:ID, removeFileTo:ID , addModel:ID, removeModel:ID    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateAnnotation_geom_observation_typeForDeletion(id: ID!): Boolean!
    validateAnnotation_geom_observation_typeAfterReading(id: ID!): Boolean!
    """
    annotation_geom_observation_typesZendroDefinition would return the static Zendro data model definition
    """
    annotation_geom_observation_typesZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addAnnotation_geom_observation_type( annotations_by: String, observation_type: String, confidence: Float, bbox_geometry: Polygon, geometry: GeometryCollection, timestamp_video: DateTime, frequency_min: Float, frequency_max: Float, time_min: Float, time_max: Float, updatedAt: DateTime, createdAt: DateTime , addFileTo:ID, addModel:ID   , skipAssociationsExistenceChecks:Boolean = false): annotation_geom_observation_type!
    updateAnnotation_geom_observation_type(id: ID!, annotations_by: String, observation_type: String, confidence: Float, bbox_geometry: Polygon, geometry: GeometryCollection, timestamp_video: DateTime, frequency_min: Float, frequency_max: Float, time_min: Float, time_max: Float, updatedAt: DateTime, createdAt: DateTime , addFileTo:ID, removeFileTo:ID , addModel:ID, removeModel:ID    , skipAssociationsExistenceChecks:Boolean = false): annotation_geom_observation_type!
    deleteAnnotation_geom_observation_type(id: ID!): String!
    bulkAssociateAnnotation_geom_observation_typeWithFile_id(bulkAssociationInput: [bulkAssociationAnnotation_geom_observation_typeWithFile_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotation_geom_observation_typeWithFile_id(bulkAssociationInput: [bulkAssociationAnnotation_geom_observation_typeWithFile_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateAnnotation_geom_observation_typeWithModel_id(bulkAssociationInput: [bulkAssociationAnnotation_geom_observation_typeWithModel_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotation_geom_observation_typeWithModel_id(bulkAssociationInput: [bulkAssociationAnnotation_geom_observation_typeWithModel_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;