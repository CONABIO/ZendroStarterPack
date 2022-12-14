module.exports = `
  type pipeline_info{
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
    version: String

    """
    @original-field
    
    """
    url_repo_model: String

    """
    @original-field
    
    """
    execution_params: JSON

    """
    @original-field
    
    """
    last_execution: DateTime

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
    annotationsGeomFilter(search: searchAnnotations_geomInput, order: [ orderAnnotations_geomInput ], pagination: paginationInput!): [annotations_geom]


    """
    @search-request
    """
    annotationsGeomConnection(search: searchAnnotations_geomInput, order: [ orderAnnotations_geomInput ], pagination: paginationCursorInput!): Annotations_geomConnection

    """
    @count-request
    """
    countFilteredAnnotationsGeom(search: searchAnnotations_geomInput) : Int
  
    """
    @search-request
    """
    annotationsMediaFilter(search: searchAnnotations_mediaInput, order: [ orderAnnotations_mediaInput ], pagination: paginationInput!): [annotations_media]


    """
    @search-request
    """
    annotationsMediaConnection(search: searchAnnotations_mediaInput, order: [ orderAnnotations_mediaInput ], pagination: paginationCursorInput!): Annotations_mediaConnection

    """
    @count-request
    """
    countFilteredAnnotationsMedia(search: searchAnnotations_mediaInput) : Int
  
    """
    @search-request
    """
    processedFilesFilter(search: searchFileInput, order: [ orderFileInput ], pagination: paginationInput!): [file]


    """
    @search-request
    """
    processedFilesConnection(search: searchFileInput, order: [ orderFileInput ], pagination: paginationCursorInput!): FileConnection

    """
    @count-request
    """
    countFilteredProcessedFiles(search: searchFileInput) : Int
  
    
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
    name
    version
    url_repo_model
    execution_params
    last_execution
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
    validatePipeline_infoForCreation( name: String, version: String, url_repo_model: String, execution_params: JSON, last_execution: DateTime, updatedAt: DateTime, createdAt: DateTime, comments: String   , addAnnotationsGeom:[ID], addAnnotationsMedia:[ID], addProcessedFiles:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validatePipeline_infoForUpdating(id: ID!, name: String, version: String, url_repo_model: String, execution_params: JSON, last_execution: DateTime, updatedAt: DateTime, createdAt: DateTime, comments: String   , addAnnotationsGeom:[ID], removeAnnotationsGeom:[ID] , addAnnotationsMedia:[ID], removeAnnotationsMedia:[ID] , addProcessedFiles:[ID], removeProcessedFiles:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validatePipeline_infoForDeletion(id: ID!): Boolean!
    validatePipeline_infoAfterReading(id: ID!): Boolean!
    """
    pipeline_infosZendroDefinition would return the static Zendro data model definition
    """
    pipeline_infosZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addPipeline_info( name: String, version: String, url_repo_model: String, execution_params: JSON, last_execution: DateTime, updatedAt: DateTime, createdAt: DateTime, comments: String   , addAnnotationsGeom:[ID], addAnnotationsMedia:[ID], addProcessedFiles:[ID] , skipAssociationsExistenceChecks:Boolean = false): pipeline_info!
    updatePipeline_info(id: ID!, name: String, version: String, url_repo_model: String, execution_params: JSON, last_execution: DateTime, updatedAt: DateTime, createdAt: DateTime, comments: String   , addAnnotationsGeom:[ID], removeAnnotationsGeom:[ID] , addAnnotationsMedia:[ID], removeAnnotationsMedia:[ID] , addProcessedFiles:[ID], removeProcessedFiles:[ID]  , skipAssociationsExistenceChecks:Boolean = false): pipeline_info!
    deletePipeline_info(id: ID!): String!
      }
`;