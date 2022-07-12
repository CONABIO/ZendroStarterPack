module.exports = `
  type model_info{
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
    model_annotationsFilter(search: searchAnnotation_geom_observation_typeInput, order: [ orderAnnotation_geom_observation_typeInput ], pagination: paginationInput!): [annotation_geom_observation_type]


    """
    @search-request
    """
    model_annotationsConnection(search: searchAnnotation_geom_observation_typeInput, order: [ orderAnnotation_geom_observation_typeInput ], pagination: paginationCursorInput!): Annotation_geom_observation_typeConnection

    """
    @count-request
    """
    countFilteredModel_annotations(search: searchAnnotation_geom_observation_typeInput) : Int
  
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type Model_infoConnection{
  edges: [Model_infoEdge]
  model_infos: [model_info]
  pageInfo: pageInfo!
}

type Model_infoEdge{
  cursor: String!
  node: model_info!
}

  enum model_infoField {
    id
    version
    commit_dvc_of_data_ref
    commit_dvc_of_model
    url_repo_model_info
    updatedAt
    createdAt
    comments
  }
  
  input searchModel_infoInput {
    field: model_infoField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchModel_infoInput]
  }

  input orderModel_infoInput{
    field: model_infoField
    order: Order
  }



  type Query {
    model_infos(search: searchModel_infoInput, order: [ orderModel_infoInput ], pagination: paginationInput! ): [model_info]
    readOneModel_info(id: ID!): model_info
    countModel_infos(search: searchModel_infoInput ): Int
    csvTableTemplateModel_info: [String]
    model_infosConnection(search:searchModel_infoInput, order: [ orderModel_infoInput ], pagination: paginationCursorInput! ): Model_infoConnection
    validateModel_infoForCreation( version: String, commit_dvc_of_data_ref: String, commit_dvc_of_model: String, url_repo_model_info: String, updatedAt: DateTime, createdAt: DateTime, comments: String   , addModel_annotations:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateModel_infoForUpdating(id: ID!, version: String, commit_dvc_of_data_ref: String, commit_dvc_of_model: String, url_repo_model_info: String, updatedAt: DateTime, createdAt: DateTime, comments: String   , addModel_annotations:[ID], removeModel_annotations:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateModel_infoForDeletion(id: ID!): Boolean!
    validateModel_infoAfterReading(id: ID!): Boolean!
    """
    model_infosZendroDefinition would return the static Zendro data model definition
    """
    model_infosZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addModel_info( version: String, commit_dvc_of_data_ref: String, commit_dvc_of_model: String, url_repo_model_info: String, updatedAt: DateTime, createdAt: DateTime, comments: String   , addModel_annotations:[ID] , skipAssociationsExistenceChecks:Boolean = false): model_info!
    updateModel_info(id: ID!, version: String, commit_dvc_of_data_ref: String, commit_dvc_of_model: String, url_repo_model_info: String, updatedAt: DateTime, createdAt: DateTime, comments: String   , addModel_annotations:[ID], removeModel_annotations:[ID]  , skipAssociationsExistenceChecks:Boolean = false): model_info!
    deleteModel_info(id: ID!): String!
      }
`;