module.exports = `
  type model_data{
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
    url_repo_model_info: String

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
    model_annotationsFilter(search: searchAnnotationInput, order: [ orderAnnotationInput ], pagination: paginationInput!): [annotation]


    """
    @search-request
    """
    model_annotationsConnection(search: searchAnnotationInput, order: [ orderAnnotationInput ], pagination: paginationCursorInput!): AnnotationConnection

    """
    @count-request
    """
    countFilteredModel_annotations(search: searchAnnotationInput) : Int
  
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type Model_dataConnection{
  edges: [Model_dataEdge]
  model_data: [model_data]
  pageInfo: pageInfo!
}

type Model_dataEdge{
  cursor: String!
  node: model_data!
}

  enum model_dataField {
    id
    version
    commit_dvc_of_data_ref
    commit_dvc_of_model
    url_repo_model_info
    updatedAt
    createdAt
    comments
  }
  
  input searchModel_dataInput {
    field: model_dataField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchModel_dataInput]
  }

  input orderModel_dataInput{
    field: model_dataField
    order: Order
  }



  type Query {
    model_data(search: searchModel_dataInput, order: [ orderModel_dataInput ], pagination: paginationInput! ): [model_data]
    readOneModel_data(id: ID!): model_data
    countModel_data(search: searchModel_dataInput ): Int
    csvTableTemplateModel_data: [String]
    model_dataConnection(search:searchModel_dataInput, order: [ orderModel_dataInput ], pagination: paginationCursorInput! ): Model_dataConnection
    validateModel_dataForCreation( version: String, commit_dvc_of_data_ref: String, commit_dvc_of_model: String, url_repo_model_info: String, updatedAt: DateTime, createdAt: DateTime, comments: String   , addModel_annotations:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateModel_dataForUpdating(id: ID!, version: String, commit_dvc_of_data_ref: String, commit_dvc_of_model: String, url_repo_model_info: String, updatedAt: DateTime, createdAt: DateTime, comments: String   , addModel_annotations:[ID], removeModel_annotations:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateModel_dataForDeletion(id: ID!): Boolean!
    validateModel_dataAfterReading(id: ID!): Boolean!
    """
    model_dataZendroDefinition would return the static Zendro data model definition
    """
    model_dataZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addModel_data( version: String, commit_dvc_of_data_ref: String, commit_dvc_of_model: String, url_repo_model_info: String, updatedAt: DateTime, createdAt: DateTime, comments: String   , addModel_annotations:[ID] , skipAssociationsExistenceChecks:Boolean = false): model_data!
    updateModel_data(id: ID!, version: String, commit_dvc_of_data_ref: String, commit_dvc_of_model: String, url_repo_model_info: String, updatedAt: DateTime, createdAt: DateTime, comments: String   , addModel_annotations:[ID], removeModel_annotations:[ID]  , skipAssociationsExistenceChecks:Boolean = false): model_data!
    deleteModel_data(id: ID!): String!
      }
`;