module.exports = `
  type monitor{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    first_name: String

    """
    @original-field
    
    """
    last_name: String

    """
    @original-field
    
    """
    second_last_name: String

    """
    @original-field
    
    """
    contact: String

    """
    @original-field
    
    """
    cumulus_id: Int

    """
    @original-field
    
    """
    visit_ids: [Int]

    cumulus_monitor(search: searchCumulusInput): cumulus
    
    """
    @search-request
    """
    visitsFilter(search: searchVisitInput, order: [ orderVisitInput ], pagination: paginationInput!): [visit]


    """
    @search-request
    """
    visitsConnection(search: searchVisitInput, order: [ orderVisitInput ], pagination: paginationCursorInput!): VisitConnection

    """
    @count-request
    """
    countFilteredVisits(search: searchVisitInput) : Int
  
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type MonitorConnection{
  edges: [MonitorEdge]
  monitors: [monitor]
  pageInfo: pageInfo!
}

type MonitorEdge{
  cursor: String!
  node: monitor!
}

  type VueTableMonitor{
    data : [monitor]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum monitorField {
    id
    first_name
    last_name
    second_last_name
    contact
    cumulus_id
    visit_ids
  }
  
  input searchMonitorInput {
    field: monitorField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchMonitorInput]
  }

  input orderMonitorInput{
    field: monitorField
    order: Order
  }

  input bulkAssociationMonitorWithCumulus_idInput{
    id: ID!
    cumulus_id: ID!
  }

  type Query {
    monitors(search: searchMonitorInput, order: [ orderMonitorInput ], pagination: paginationInput! ): [monitor]
    readOneMonitor(id: ID!): monitor
    countMonitors(search: searchMonitorInput ): Int
    vueTableMonitor : VueTableMonitor
    csvTableTemplateMonitor: [String]
    monitorsConnection(search:searchMonitorInput, order: [ orderMonitorInput ], pagination: paginationCursorInput! ): MonitorConnection
    validateMonitorForCreation( first_name: String, last_name: String, second_last_name: String, contact: String , addCumulus_monitor:ID  , addVisits:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateMonitorForUpdating(id: ID!, first_name: String, last_name: String, second_last_name: String, contact: String , addCumulus_monitor:ID, removeCumulus_monitor:ID   , addVisits:[ID], removeVisits:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateMonitorForDeletion(id: ID!): Boolean!
    validateMonitorAfterReading(id: ID!): Boolean!
  }

  type Mutation {
    addMonitor( first_name: String, last_name: String, second_last_name: String, contact: String , addCumulus_monitor:ID  , addVisits:[ID] , skipAssociationsExistenceChecks:Boolean = false): monitor!
    updateMonitor(id: ID!, first_name: String, last_name: String, second_last_name: String, contact: String , addCumulus_monitor:ID, removeCumulus_monitor:ID   , addVisits:[ID], removeVisits:[ID]  , skipAssociationsExistenceChecks:Boolean = false): monitor!
    deleteMonitor(id: ID!): String!
    bulkAddMonitorCsv: String!
    bulkAssociateMonitorWithCumulus_id(bulkAssociationInput: [bulkAssociationMonitorWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateMonitorWithCumulus_id(bulkAssociationInput: [bulkAssociationMonitorWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;