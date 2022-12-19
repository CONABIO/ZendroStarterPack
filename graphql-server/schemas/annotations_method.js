module.exports = `
  type annotations_method{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    name: String

    """
    @original-field
    
    """
    description: String

      
    """
    @search-request
    """
    geomAnnFilter(search: searchAnnotations_geomInput, order: [ orderAnnotations_geomInput ], pagination: paginationInput!): [annotations_geom]


    """
    @search-request
    """
    geomAnnConnection(search: searchAnnotations_geomInput, order: [ orderAnnotations_geomInput ], pagination: paginationCursorInput!): Annotations_geomConnection

    """
    @count-request
    """
    countFilteredGeomAnn(search: searchAnnotations_geomInput) : Int
  
    """
    @search-request
    """
    mediaAnnFilter(search: searchAnnotations_mediaInput, order: [ orderAnnotations_mediaInput ], pagination: paginationInput!): [annotations_media]


    """
    @search-request
    """
    mediaAnnConnection(search: searchAnnotations_mediaInput, order: [ orderAnnotations_mediaInput ], pagination: paginationCursorInput!): Annotations_mediaConnection

    """
    @count-request
    """
    countFilteredMediaAnn(search: searchAnnotations_mediaInput) : Int
  
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type Annotations_methodConnection{
  edges: [Annotations_methodEdge]
  annotations_methods: [annotations_method]
  pageInfo: pageInfo!
}

type Annotations_methodEdge{
  cursor: String!
  node: annotations_method!
}

  enum annotations_methodField {
    id
    name
    description
  }
  
  input searchAnnotations_methodInput {
    field: annotations_methodField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchAnnotations_methodInput]
  }

  input orderAnnotations_methodInput{
    field: annotations_methodField
    order: Order
  }



  type Query {
    annotations_methods(search: searchAnnotations_methodInput, order: [ orderAnnotations_methodInput ], pagination: paginationInput! ): [annotations_method]
    readOneAnnotations_method(id: ID!): annotations_method
    countAnnotations_methods(search: searchAnnotations_methodInput ): Int
    csvTableTemplateAnnotations_method: [String]
    annotations_methodsConnection(search:searchAnnotations_methodInput, order: [ orderAnnotations_methodInput ], pagination: paginationCursorInput! ): Annotations_methodConnection
    validateAnnotations_methodForCreation( name: String, description: String   , addGeomAnn:[ID], addMediaAnn:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateAnnotations_methodForUpdating(id: ID!, name: String, description: String   , addGeomAnn:[ID], removeGeomAnn:[ID] , addMediaAnn:[ID], removeMediaAnn:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateAnnotations_methodForDeletion(id: ID!): Boolean!
    validateAnnotations_methodAfterReading(id: ID!): Boolean!
    """
    annotations_methodsZendroDefinition would return the static Zendro data model definition
    """
    annotations_methodsZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addAnnotations_method( name: String, description: String   , addGeomAnn:[ID], addMediaAnn:[ID] , skipAssociationsExistenceChecks:Boolean = false): annotations_method!
    updateAnnotations_method(id: ID!, name: String, description: String   , addGeomAnn:[ID], removeGeomAnn:[ID] , addMediaAnn:[ID], removeMediaAnn:[ID]  , skipAssociationsExistenceChecks:Boolean = false): annotations_method!
    deleteAnnotations_method(id: ID!): String!
      }
`;