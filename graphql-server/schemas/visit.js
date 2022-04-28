module.exports = `
  type visit{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    comments: String

    """
    @original-field
    
    """
    date_sipecam_first_season: Date

    """
    @original-field
    
    """
    date_sipecam_second_season: Date

    """
    @original-field
    
    """
    date_first_season: Date

    """
    @original-field
    
    """
    date_second_season: Date

    """
    @original-field
    
    """
    report_first_season: String

    """
    @original-field
    
    """
    report_second_season: String

    """
    @original-field
    
    """
    cumulus_id: Int

    """
    @original-field
    
    """
    pristine_id: Int

    """
    @original-field
    
    """
    disturbed_id: Int

    """
    @original-field
    
    """
    monitor_ids: [Int]

    cumulus_visit(search: searchCumulusInput): cumulus
  unique_node_pristine(search: searchNodeInput): node
  unique_node_disturbed(search: searchNodeInput): node
    
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
  
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type VisitConnection{
  edges: [VisitEdge]
  visits: [visit]
  pageInfo: pageInfo!
}

type VisitEdge{
  cursor: String!
  node: visit!
}

  enum visitField {
    id
    comments
    date_sipecam_first_season
    date_sipecam_second_season
    date_first_season
    date_second_season
    report_first_season
    report_second_season
    cumulus_id
    pristine_id
    disturbed_id
    monitor_ids
  }
  
  input searchVisitInput {
    field: visitField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchVisitInput]
  }

  input orderVisitInput{
    field: visitField
    order: Order
  }

  input bulkAssociationVisitWithCumulus_idInput{
    id: ID!
    cumulus_id: ID!
  }  input bulkAssociationVisitWithPristine_idInput{
    id: ID!
    pristine_id: ID!
  }  input bulkAssociationVisitWithDisturbed_idInput{
    id: ID!
    disturbed_id: ID!
  }

  type Query {
    visits(search: searchVisitInput, order: [ orderVisitInput ], pagination: paginationInput! ): [visit]
    readOneVisit(id: ID!): visit
    countVisits(search: searchVisitInput ): Int
    csvTableTemplateVisit: [String]
    visitsConnection(search:searchVisitInput, order: [ orderVisitInput ], pagination: paginationCursorInput! ): VisitConnection
    validateVisitForCreation( comments: String, date_sipecam_first_season: Date, date_sipecam_second_season: Date, date_first_season: Date, date_second_season: Date, report_first_season: String, report_second_season: String , addCumulus_visit:ID, addUnique_node_pristine:ID, addUnique_node_disturbed:ID  , addMonitors:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateVisitForUpdating(id: ID!, comments: String, date_sipecam_first_season: Date, date_sipecam_second_season: Date, date_first_season: Date, date_second_season: Date, report_first_season: String, report_second_season: String , addCumulus_visit:ID, removeCumulus_visit:ID , addUnique_node_pristine:ID, removeUnique_node_pristine:ID , addUnique_node_disturbed:ID, removeUnique_node_disturbed:ID   , addMonitors:[ID], removeMonitors:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateVisitForDeletion(id: ID!): Boolean!
    validateVisitAfterReading(id: ID!): Boolean!
    """
    visitsZendroDefinition would return the static Zendro data model definition
    """
    visitsZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addVisit( comments: String, date_sipecam_first_season: Date, date_sipecam_second_season: Date, date_first_season: Date, date_second_season: Date, report_first_season: String, report_second_season: String , addCumulus_visit:ID, addUnique_node_pristine:ID, addUnique_node_disturbed:ID  , addMonitors:[ID] , skipAssociationsExistenceChecks:Boolean = false): visit!
    updateVisit(id: ID!, comments: String, date_sipecam_first_season: Date, date_sipecam_second_season: Date, date_first_season: Date, date_second_season: Date, report_first_season: String, report_second_season: String , addCumulus_visit:ID, removeCumulus_visit:ID , addUnique_node_pristine:ID, removeUnique_node_pristine:ID , addUnique_node_disturbed:ID, removeUnique_node_disturbed:ID   , addMonitors:[ID], removeMonitors:[ID]  , skipAssociationsExistenceChecks:Boolean = false): visit!
    deleteVisit(id: ID!): String!
    bulkAssociateVisitWithCumulus_id(bulkAssociationInput: [bulkAssociationVisitWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateVisitWithCumulus_id(bulkAssociationInput: [bulkAssociationVisitWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateVisitWithPristine_id(bulkAssociationInput: [bulkAssociationVisitWithPristine_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateVisitWithPristine_id(bulkAssociationInput: [bulkAssociationVisitWithPristine_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateVisitWithDisturbed_id(bulkAssociationInput: [bulkAssociationVisitWithDisturbed_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateVisitWithDisturbed_id(bulkAssociationInput: [bulkAssociationVisitWithDisturbed_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;