module.exports = `
  type deployment{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    date_deployment: DateTime

    """
    @original-field
    
    """
    latitude: Float

    """
    @original-field
    
    """
    longitude: Float

    """
    @original-field
    
    """
    altitude: Float

    """
    @original-field
    
    """
    comments: String

    """
    @original-field
    
    """
    metadata: JSON

    """
    @original-field
    
    """
    kobo_url: String

    """
    @original-field
    
    """
    device_id: Int

    """
    @original-field
    
    """
    node_id: Int

    """
    @original-field
    
    """
    cumulus_id: Int

    device(search: searchPhysical_deviceInput): physical_device
  node(search: searchNodeInput): node
  cumulus(search: searchCumulusInput): cumulus
    
    """
    @search-request
    """
    filesFilter(search: searchFileInput, order: [ orderFileInput ], pagination: paginationInput!): [file]


    """
    @search-request
    """
    filesConnection(search: searchFileInput, order: [ orderFileInput ], pagination: paginationCursorInput!): FileConnection

    """
    @count-request
    """
    countFilteredFiles(search: searchFileInput) : Int
  
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type DeploymentConnection{
  edges: [DeploymentEdge]
  deployments: [deployment]
  pageInfo: pageInfo!
}

type DeploymentEdge{
  cursor: String!
  node: deployment!
}

  enum deploymentField {
    id
    date_deployment
    latitude
    longitude
    altitude
    comments
    metadata
    kobo_url
    device_id
    node_id
    cumulus_id
  }
  
  input searchDeploymentInput {
    field: deploymentField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchDeploymentInput]
  }

  input orderDeploymentInput{
    field: deploymentField
    order: Order
  }

  input bulkAssociationDeploymentWithDevice_idInput{
    id: ID!
    device_id: ID!
  }  input bulkAssociationDeploymentWithNode_idInput{
    id: ID!
    node_id: ID!
  }  input bulkAssociationDeploymentWithCumulus_idInput{
    id: ID!
    cumulus_id: ID!
  }

  type Query {
    deployments(search: searchDeploymentInput, order: [ orderDeploymentInput ], pagination: paginationInput! ): [deployment]
    readOneDeployment(id: ID!): deployment
    countDeployments(search: searchDeploymentInput ): Int
    csvTableTemplateDeployment: [String]
    deploymentsConnection(search:searchDeploymentInput, order: [ orderDeploymentInput ], pagination: paginationCursorInput! ): DeploymentConnection
    validateDeploymentForCreation( date_deployment: DateTime, latitude: Float, longitude: Float, altitude: Float, comments: String, metadata: JSON, kobo_url: String , addDevice:ID, addNode:ID, addCumulus:ID  , addFiles:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateDeploymentForUpdating(id: ID!, date_deployment: DateTime, latitude: Float, longitude: Float, altitude: Float, comments: String, metadata: JSON, kobo_url: String , addDevice:ID, removeDevice:ID , addNode:ID, removeNode:ID , addCumulus:ID, removeCumulus:ID   , addFiles:[ID], removeFiles:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateDeploymentForDeletion(id: ID!): Boolean!
    validateDeploymentAfterReading(id: ID!): Boolean!
    """
    deploymentsZendroDefinition would return the static Zendro data model definition
    """
    deploymentsZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addDeployment( date_deployment: DateTime, latitude: Float, longitude: Float, altitude: Float, comments: String, metadata: JSON, kobo_url: String , addDevice:ID, addNode:ID, addCumulus:ID  , addFiles:[ID] , skipAssociationsExistenceChecks:Boolean = false): deployment!
    updateDeployment(id: ID!, date_deployment: DateTime, latitude: Float, longitude: Float, altitude: Float, comments: String, metadata: JSON, kobo_url: String , addDevice:ID, removeDevice:ID , addNode:ID, removeNode:ID , addCumulus:ID, removeCumulus:ID   , addFiles:[ID], removeFiles:[ID]  , skipAssociationsExistenceChecks:Boolean = false): deployment!
    deleteDeployment(id: ID!): String!
    bulkAssociateDeploymentWithDevice_id(bulkAssociationInput: [bulkAssociationDeploymentWithDevice_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateDeploymentWithDevice_id(bulkAssociationInput: [bulkAssociationDeploymentWithDevice_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateDeploymentWithNode_id(bulkAssociationInput: [bulkAssociationDeploymentWithNode_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateDeploymentWithNode_id(bulkAssociationInput: [bulkAssociationDeploymentWithNode_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateDeploymentWithCumulus_id(bulkAssociationInput: [bulkAssociationDeploymentWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateDeploymentWithCumulus_id(bulkAssociationInput: [bulkAssociationDeploymentWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;