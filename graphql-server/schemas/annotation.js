module.exports = `
  type annotation{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    has_fauna: Boolean

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

    fileTo(search: searchFileInput): file
    
    
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
    has_fauna
    updatedAt
    createdAt
    comments
    file_id
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
  }

  type Query {
    annotations(search: searchAnnotationInput, order: [ orderAnnotationInput ], pagination: paginationInput! ): [annotation]
    readOneAnnotation(id: ID!): annotation
    countAnnotations(search: searchAnnotationInput ): Int
    csvTableTemplateAnnotation: [String]
    annotationsConnection(search:searchAnnotationInput, order: [ orderAnnotationInput ], pagination: paginationCursorInput! ): AnnotationConnection
    validateAnnotationForCreation( has_fauna: Boolean, updatedAt: DateTime, createdAt: DateTime, comments: String , addFileTo:ID   , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateAnnotationForUpdating(id: ID!, has_fauna: Boolean, updatedAt: DateTime, createdAt: DateTime, comments: String , addFileTo:ID, removeFileTo:ID    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateAnnotationForDeletion(id: ID!): Boolean!
    validateAnnotationAfterReading(id: ID!): Boolean!
    """
    annotationsZendroDefinition would return the static Zendro data model definition
    """
    annotationsZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addAnnotation( has_fauna: Boolean, updatedAt: DateTime, createdAt: DateTime, comments: String , addFileTo:ID   , skipAssociationsExistenceChecks:Boolean = false): annotation!
    updateAnnotation(id: ID!, has_fauna: Boolean, updatedAt: DateTime, createdAt: DateTime, comments: String , addFileTo:ID, removeFileTo:ID    , skipAssociationsExistenceChecks:Boolean = false): annotation!
    deleteAnnotation(id: ID!): String!
    bulkAssociateAnnotationWithFile_id(bulkAssociationInput: [bulkAssociationAnnotationWithFile_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateAnnotationWithFile_id(bulkAssociationInput: [bulkAssociationAnnotationWithFile_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;