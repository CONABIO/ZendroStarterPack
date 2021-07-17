module.exports = `
  type deployment{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    date_started: Date

    """
    @original-field
    
    """
    date_finished: Date

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
    device_id: Int

    """
    @original-field
    
    """
    visit_id: Int

    """
    @original-field
    
    """
    created_at: DateTime

    """
    @original-field
    
    """
    monitor_ids: [Int]

    device(search: searchPhysical_deviceInput): physical_device
  visit_deployment(search: searchVisitInput): visit
    
    """
    @search-request
    """
    monitorsFilter(search: searchMonitorInput, order: [ orderMonitorInput ], pagination: paginationInput!): [monitor]


    """
    @search-request
    """
    monitorsConnection(search: searchMonitorInput, order: [ orderMonitorInput ], pagination: paginationCursorInput!): MonitorConnection

    """
    @count-request
    """
    countFilteredMonitors(search: searchMonitorInput) : Int
  
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

  type VueTableDeployment{
    data : [deployment]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum deploymentField {
    id
    date_started
    date_finished
    latitude
    longitude
    altitude
    comments
    device_id
    visit_id
    created_at
    monitor_ids
  }
  input searchDeploymentInput {
    field: deploymentField
    value: String
    valueType: InputType
    operator: Operator
    search: [searchDeploymentInput]
  }

  input orderDeploymentInput{
    field: deploymentField
    order: Order
  }

  input bulkAssociationDeploymentWithDevice_idInput{
    id: ID!
    device_id: ID!
  }  input bulkAssociationDeploymentWithVisit_idInput{
    id: ID!
    visit_id: ID!
  }

  type Query {
    deployments(search: searchDeploymentInput, order: [ orderDeploymentInput ], pagination: paginationInput! ): [deployment]
    readOneDeployment(id: ID!): deployment
    countDeployments(search: searchDeploymentInput ): Int
    vueTableDeployment : VueTableDeployment
    csvTableTemplateDeployment: [String]
    deploymentsConnection(search:searchDeploymentInput, order: [ orderDeploymentInput ], pagination: paginationCursorInput! ): DeploymentConnection
  }

  type Mutation {
    addDeployment( date_started: Date, date_finished: Date, latitude: Float, longitude: Float, altitude: Float, comments: String, created_at: DateTime , addDevice:ID, addVisit_deployment:ID  , addMonitors:[ID] , skipAssociationsExistenceChecks:Boolean = false): deployment!
    updateDeployment(id: ID!, date_started: Date, date_finished: Date, latitude: Float, longitude: Float, altitude: Float, comments: String, created_at: DateTime , addDevice:ID, removeDevice:ID , addVisit_deployment:ID, removeVisit_deployment:ID   , addMonitors:[ID], removeMonitors:[ID]  , skipAssociationsExistenceChecks:Boolean = false): deployment!
    deleteDeployment(id: ID!): String!
    bulkAddDeploymentCsv: String!
    bulkAssociateDeploymentWithDevice_id(bulkAssociationInput: [bulkAssociationDeploymentWithDevice_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateDeploymentWithDevice_id(bulkAssociationInput: [bulkAssociationDeploymentWithDevice_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateDeploymentWithVisit_id(bulkAssociationInput: [bulkAssociationDeploymentWithVisit_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateDeploymentWithVisit_id(bulkAssociationInput: [bulkAssociationDeploymentWithVisit_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;