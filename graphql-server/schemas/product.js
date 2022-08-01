module.exports = `
  type product{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    type: String

    """
    @original-field
    
    """
    url: String

    """
    @original-field
    
    """
    observation_type: String

    """
    @original-field
    
    """
    producer: String

    """
    @original-field
    
    """
    project: String

    """
    @original-field
    
    """
    metadata: JSON

    """
    @original-field
    
    """
    audio_grid_id: Int

    """
    @original-field
    
    """
    audio_distance_to_mean: Float

    """
    @original-field
    
    """
    createdAt: DateTime

    """
    @original-field
    
    """
    updatedAt: DateTime

    """
    @original-field
    
    """
    comments: String

    """
    @original-field
    
    """
    file_ids: [Int]

    """
    @original-field
    
    """
    pipeline_id: Int

    pipeline(search: searchPipeline_infoInput): pipeline_info
    
    """
    @search-request
    """
    fileAssocFilter(search: searchFileInput, order: [ orderFileInput ], pagination: paginationInput!): [file]


    """
    @search-request
    """
    fileAssocConnection(search: searchFileInput, order: [ orderFileInput ], pagination: paginationCursorInput!): FileConnection

    """
    @count-request
    """
    countFilteredFileAssoc(search: searchFileInput) : Int
  
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type ProductConnection{
  edges: [ProductEdge]
  products: [product]
  pageInfo: pageInfo!
}

type ProductEdge{
  cursor: String!
  node: product!
}

  enum productField {
    id
    type
    url
    observation_type
    producer
    project
    metadata
    audio_grid_id
    audio_distance_to_mean
    createdAt
    updatedAt
    comments
    file_ids
    pipeline_id
  }
  
  input searchProductInput {
    field: productField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchProductInput]
  }

  input orderProductInput{
    field: productField
    order: Order
  }

  input bulkAssociationProductWithPipeline_idInput{
    id: ID!
    pipeline_id: ID!
  }

  type Query {
    products(search: searchProductInput, order: [ orderProductInput ], pagination: paginationInput! ): [product]
    readOneProduct(id: ID!): product
    countProducts(search: searchProductInput ): Int
    csvTableTemplateProduct: [String]
    productsConnection(search:searchProductInput, order: [ orderProductInput ], pagination: paginationCursorInput! ): ProductConnection
    validateProductForCreation( type: String, url: String, observation_type: String, producer: String, project: String, metadata: JSON, audio_grid_id: Int, audio_distance_to_mean: Float, createdAt: DateTime, updatedAt: DateTime, comments: String , addPipeline:ID  , addFileAssoc:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateProductForUpdating(id: ID!, type: String, url: String, observation_type: String, producer: String, project: String, metadata: JSON, audio_grid_id: Int, audio_distance_to_mean: Float, createdAt: DateTime, updatedAt: DateTime, comments: String , addPipeline:ID, removePipeline:ID   , addFileAssoc:[ID], removeFileAssoc:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateProductForDeletion(id: ID!): Boolean!
    validateProductAfterReading(id: ID!): Boolean!
    """
    productsZendroDefinition would return the static Zendro data model definition
    """
    productsZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addProduct( type: String, url: String, observation_type: String, producer: String, project: String, metadata: JSON, audio_grid_id: Int, audio_distance_to_mean: Float, createdAt: DateTime, updatedAt: DateTime, comments: String , addPipeline:ID  , addFileAssoc:[ID] , skipAssociationsExistenceChecks:Boolean = false): product!
    updateProduct(id: ID!, type: String, url: String, observation_type: String, producer: String, project: String, metadata: JSON, audio_grid_id: Int, audio_distance_to_mean: Float, createdAt: DateTime, updatedAt: DateTime, comments: String , addPipeline:ID, removePipeline:ID   , addFileAssoc:[ID], removeFileAssoc:[ID]  , skipAssociationsExistenceChecks:Boolean = false): product!
    deleteProduct(id: ID!): String!
    bulkAssociateProductWithPipeline_id(bulkAssociationInput: [bulkAssociationProductWithPipeline_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateProductWithPipeline_id(bulkAssociationInput: [bulkAssociationProductWithPipeline_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;