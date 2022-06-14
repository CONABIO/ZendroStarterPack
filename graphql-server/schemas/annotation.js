module.exports = `
  type annotation{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    classification_method: String

    """
    @original-field
    
    """
    classification_by: String

    """
    @original-field
    
    """
    observation_type: String

    """
    @original-field
    
    """
    label_id: String

    """
    @original-field
    
    """
    label: String

    """
    @original-field
    
    """
    confidence: Float

    """
    @original-field
    
    """
    behaviour: String

    """
    @original-field
    
    """
    sex: String

    """
    @original-field
    
    """
    age: Int

    """
    @original-field
    
    """
    bbox_geometry: Polygon

    """
    @original-field
    
    """
    geometry_wkt: GeometryCollection

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
    comments: String

    """
    @original-field
    
    """
    file_id: Int

    """
    @original-field
    
    """
    model_id: Int

    """
    @original-field
    
    """
    taxon_id: Int

    fileTo(search: searchFileInput): file
  model(search: searchModel_dataInput): model_data
    
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type AnnotationConnection{
  edges: [AnnotationEdge]
  annotations: [annotation]
  pageInfo: pageInfo!
}

type AnnotationEdge{
  cursor: String!
  node: annotation!
}

  enum annotationField {
    id
    classification_method
    classification_by
    observation_type
    label_id
    label
    confidence
    behaviour
    sex
    age
    bbox_geometry
    geometry_wkt
    timestamp_video
    frequency_min
    frequency_max
    time_min
    time_max
    updatedAt
    createdAt
    comments
    file_id
    model_id
    taxon_id
  }
  
  input searchAnnotationInput {
    field: annotationField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchAnnotationInput]
  }

  input orderAnnotationInput{
    field: annotationField
    order: Order
  }

  input bulkAssociationAnnotationWithFile_idInput{
    id: ID!
    file_id: ID!
  }  input bulkAssociationAnnotationWithModel_idInput{
    id: ID!
    model_id: ID!
  }

  type Query {
    annotations(search: searchAnnotationInput, order: [ orderAnnotationInput ], pagination: paginationInput! ): [annotation]
    readOneAnnotation(id: ID!): annotation
    countAnnotations(search: searchAnnotationInput ): Int
    csvTableTemplateAnnotation: [String]
    annotationsConnection(search:searchAnnotationInput, order: [ orderAnnotationInput ], pagination: paginationCursorInput! ): AnnotationConnection
    validateAnnotationForCreation( classification_method: String, classification_by: String, observation_type: String, label_id: String, label: String, confidence: Float, behaviour: String, sex: String, age: Int, bbox_geometry: Polygon, geometry_wkt: GeometryCollection, timestamp_video: DateTime, frequency_min: Float, frequency_max: Float, time_min: Float, time_max: Float, updatedAt: DateTime, createdAt: DateTime, comments: String, taxon_id: Int , addFileTo:ID, addModel:ID   , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateAnnotationForUpdating(id: ID!, classification_method: String, classification_by: String, observation_type: String, label_id: String, label: String, confidence: Float, behaviour: String, sex: String, age: Int, bbox_geometry: Polygon, geometry_wkt: GeometryCollection, timestamp_video: DateTime, frequency_min: Float, frequency_max: Float, time_min: Float, time_max: Float, updatedAt: DateTime, createdAt: DateTime, comments: String, taxon_id: Int , addFileTo:ID, removeFileTo:ID , addModel:ID, removeModel:ID    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateAnnotationForDeletion(id: ID!): Boolean!
    validateAnnotationAfterReading(id: ID!): Boolean!
    """
    annotationsZendroDefinition would return the static Zendro data model definition
    """
    annotationsZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addAnnotation( classification_method: String, classification_by: String, observation_type: String, label_id: String, label: String, confidence: Float, behaviour: String, sex: String, age: Int, bbox_geometry: Polygon, geometry_wkt: GeometryCollection, timestamp_video: DateTime, frequency_min: Float, frequency_max: Float, time_min: Float, time_max: Float, updatedAt: DateTime, createdAt: DateTime, comments: String, taxon_id: Int , addFileTo:ID, addModel:ID   , skipAssociationsExistenceChecks:Boolean = false): annotation!
    updateAnnotation(id: ID!, classification_method: String, classification_by: String, observation_type: String, label_id: String, label: String, confidence: Float, behaviour: String, sex: String, age: Int, bbox_geometry: Polygon, geometry_wkt: GeometryCollection, timestamp_video: DateTime, frequency_min: Float, frequency_max: Float, time_min: Float, time_max: Float, updatedAt: DateTime, createdAt: DateTime, comments: String, taxon_id: Int , addFileTo:ID, removeFileTo:ID , addModel:ID, removeModel:ID    , skipAssociationsExistenceChecks:Boolean = false): annotation!
    deleteAnnotation(id: ID!): String!
    bulkAssociateAnnotationWithFile_id(bulkAssociationInput: [bulkAssociationAnnotationWithFile_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotationWithFile_id(bulkAssociationInput: [bulkAssociationAnnotationWithFile_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateAnnotationWithModel_id(bulkAssociationInput: [bulkAssociationAnnotationWithModel_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotationWithModel_id(bulkAssociationInput: [bulkAssociationAnnotationWithModel_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;