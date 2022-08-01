module.exports = `
  type pipeline_info{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    version: String

    """
    @original-field
    
    """
    commit_dvc_of_data_ref: String

    """
    @original-field
    
    """
    commit_dvc_of_model: String

    """
    @original-field
    
    """
    url_repo_model: String

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
    @search-request
    """
    pipeline_productsFilter(search: searchProductInput, order: [ orderProductInput ], pagination: paginationInput!): [product]


    """
    @search-request
    """
    pipeline_productsConnection(search: searchProductInput, order: [ orderProductInput ], pagination: paginationCursorInput!): ProductConnection

    """
    @count-request
    """
    countFilteredPipeline_products(search: searchProductInput) : Int
  
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type Pipeline_infoConnection{
  edges: [Pipeline_infoEdge]
  pipeline_infos: [pipeline_info]
  pageInfo: pageInfo!
}

type Pipeline_infoEdge{
  cursor: String!
  node: pipeline_info!
}

  enum pipeline_infoField {
    id
    version
    commit_dvc_of_data_ref
    commit_dvc_of_model
    url_repo_model
    updatedAt
    createdAt
    comments
  }
  
  input searchPipeline_infoInput {
    field: pipeline_infoField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchPipeline_infoInput]
  }

  input orderPipeline_infoInput{
    field: pipeline_infoField
    order: Order
  }



  type Query {
    pipeline_infos(search: searchPipeline_infoInput, order: [ orderPipeline_infoInput ], pagination: paginationInput! ): [pipeline_info]
    readOnePipeline_info(id: ID!): pipeline_info
    countPipeline_infos(search: searchPipeline_infoInput ): Int
    csvTableTemplatePipeline_info: [String]
    pipeline_infosConnection(search:searchPipeline_infoInput, order: [ orderPipeline_infoInput ], pagination: paginationCursorInput! ): Pipeline_infoConnection
    validatePipeline_infoForCreation( version: String, commit_dvc_of_data_ref: String, commit_dvc_of_model: String, url_repo_model: String, updatedAt: DateTime, createdAt: DateTime, comments: String   , addPipeline_products:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validatePipeline_infoForUpdating(id: ID!, version: String, commit_dvc_of_data_ref: String, commit_dvc_of_model: String, url_repo_model: String, updatedAt: DateTime, createdAt: DateTime, comments: String   , addPipeline_products:[ID], removePipeline_products:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validatePipeline_infoForDeletion(id: ID!): Boolean!
    validatePipeline_infoAfterReading(id: ID!): Boolean!
    """
    pipeline_infosZendroDefinition would return the static Zendro data model definition
    """
    pipeline_infosZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addPipeline_info( version: String, commit_dvc_of_data_ref: String, commit_dvc_of_model: String, url_repo_model: String, updatedAt: DateTime, createdAt: DateTime, comments: String   , addPipeline_products:[ID] , skipAssociationsExistenceChecks:Boolean = false): pipeline_info!
    updatePipeline_info(id: ID!, version: String, commit_dvc_of_data_ref: String, commit_dvc_of_model: String, url_repo_model: String, updatedAt: DateTime, createdAt: DateTime, comments: String   , addPipeline_products:[ID], removePipeline_products:[ID]  , skipAssociationsExistenceChecks:Boolean = false): pipeline_info!
    deletePipeline_info(id: ID!): String!
      }
`;