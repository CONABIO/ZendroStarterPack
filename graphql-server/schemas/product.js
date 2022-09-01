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
    pipeline_id: Int

    """
    @original-field
    
    """
    file_id: Int

    fileAssoc(search: searchFileInput): file
  pipeline(search: searchPipeline_infoInput): pipeline_info
    
    
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
    createdAt
    updatedAt
    comments
    pipeline_id
    file_id
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

  input bulkAssociationProductWithFile_idInput{
    id: ID!
    file_id: ID!
  }  input bulkAssociationProductWithPipeline_idInput{
    id: ID!
    pipeline_id: ID!
  }

  type Query {
    products(search: searchProductInput, order: [ orderProductInput ], pagination: paginationInput! ): [product]
    readOneProduct(id: ID!): product
    countProducts(search: searchProductInput ): Int
    csvTableTemplateProduct: [String]
    productsConnection(search:searchProductInput, order: [ orderProductInput ], pagination: paginationCursorInput! ): ProductConnection
    validateProductForCreation( type: String, url: String, observation_type: String, producer: String, project: String, metadata: JSON, createdAt: DateTime, updatedAt: DateTime, comments: String , addFileAssoc:ID, addPipeline:ID   , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateProductForUpdating(id: ID!, type: String, url: String, observation_type: String, producer: String, project: String, metadata: JSON, createdAt: DateTime, updatedAt: DateTime, comments: String , addFileAssoc:ID, removeFileAssoc:ID , addPipeline:ID, removePipeline:ID    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateProductForDeletion(id: ID!): Boolean!
    validateProductAfterReading(id: ID!): Boolean!
    """
    productsZendroDefinition would return the static Zendro data model definition
    """
    productsZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addProduct( type: String, url: String, observation_type: String, producer: String, project: String, metadata: JSON, createdAt: DateTime, updatedAt: DateTime, comments: String , addFileAssoc:ID, addPipeline:ID   , skipAssociationsExistenceChecks:Boolean = false): product!
    updateProduct(id: ID!, type: String, url: String, observation_type: String, producer: String, project: String, metadata: JSON, createdAt: DateTime, updatedAt: DateTime, comments: String , addFileAssoc:ID, removeFileAssoc:ID , addPipeline:ID, removePipeline:ID    , skipAssociationsExistenceChecks:Boolean = false): product!
    deleteProduct(id: ID!): String!
    bulkAssociateProductWithFile_id(bulkAssociationInput: [bulkAssociationProductWithFile_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateProductWithFile_id(bulkAssociationInput: [bulkAssociationProductWithFile_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateProductWithPipeline_id(bulkAssociationInput: [bulkAssociationProductWithPipeline_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateProductWithPipeline_id(bulkAssociationInput: [bulkAssociationProductWithPipeline_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;