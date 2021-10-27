module.exports = `
  type visit{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    user_id: Int

    """
    @original-field
    
    """
    calendar_id: Int

    """
    @original-field
    
    """
    comments: String

    """
    @original-field
    
    """
    date_started_pristine: Date

    """
    @original-field
    
    """
    date_finished_pristine: Date

    """
    @original-field
    
    """
    date_started_disturbed: Date

    """
    @original-field
    
    """
    date_finished_disturbed: Date

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

    calendar(search: searchCalendarInput): calendar
  user_visit(search: searchUserInput): user
  cumulus_visit(search: searchCumulusInput): cumulus
  unique_node_pristine(search: searchNodeInput): node
  unique_node_disturbed(search: searchNodeInput): node
    
    """
    @search-request
    """
    deploymentsFilter(search: searchDeploymentInput, order: [ orderDeploymentInput ], pagination: paginationInput!): [deployment]


    """
    @search-request
    """
    deploymentsConnection(search: searchDeploymentInput, order: [ orderDeploymentInput ], pagination: paginationCursorInput!): DeploymentConnection

    """
    @count-request
    """
    countFilteredDeployments(search: searchDeploymentInput) : Int
  
    
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

  type VueTableVisit{
    data : [visit]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum visitField {
    id
    user_id
    calendar_id
    comments
    date_started_pristine
    date_finished_pristine
    date_started_disturbed
    date_finished_disturbed
    cumulus_id
    pristine_id
    disturbed_id
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

  input bulkAssociationVisitWithCalendar_idInput{
    id: ID!
    calendar_id: ID!
  }  input bulkAssociationVisitWithUser_idInput{
    id: ID!
    user_id: ID!
  }  input bulkAssociationVisitWithCumulus_idInput{
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
    vueTableVisit : VueTableVisit
    csvTableTemplateVisit: [String]
    visitsConnection(search:searchVisitInput, order: [ orderVisitInput ], pagination: paginationCursorInput! ): VisitConnection
    validateVisitForCreation( comments: String, date_started_pristine: Date, date_finished_pristine: Date, date_started_disturbed: Date, date_finished_disturbed: Date , addCalendar:ID, addUser_visit:ID, addCumulus_visit:ID, addUnique_node_pristine:ID, addUnique_node_disturbed:ID  , addDeployments:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateVisitForUpdating(id: ID!, comments: String, date_started_pristine: Date, date_finished_pristine: Date, date_started_disturbed: Date, date_finished_disturbed: Date , addCalendar:ID, removeCalendar:ID , addUser_visit:ID, removeUser_visit:ID , addCumulus_visit:ID, removeCumulus_visit:ID , addUnique_node_pristine:ID, removeUnique_node_pristine:ID , addUnique_node_disturbed:ID, removeUnique_node_disturbed:ID   , addDeployments:[ID], removeDeployments:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateVisitForDeletion(id: ID!): Boolean!
    validateVisitAfterReading(id: ID!): Boolean!
  }

  type Mutation {
    addVisit( comments: String, date_started_pristine: Date, date_finished_pristine: Date, date_started_disturbed: Date, date_finished_disturbed: Date , addCalendar:ID, addUser_visit:ID, addCumulus_visit:ID, addUnique_node_pristine:ID, addUnique_node_disturbed:ID  , addDeployments:[ID] , skipAssociationsExistenceChecks:Boolean = false): visit!
    updateVisit(id: ID!, comments: String, date_started_pristine: Date, date_finished_pristine: Date, date_started_disturbed: Date, date_finished_disturbed: Date , addCalendar:ID, removeCalendar:ID , addUser_visit:ID, removeUser_visit:ID , addCumulus_visit:ID, removeCumulus_visit:ID , addUnique_node_pristine:ID, removeUnique_node_pristine:ID , addUnique_node_disturbed:ID, removeUnique_node_disturbed:ID   , addDeployments:[ID], removeDeployments:[ID]  , skipAssociationsExistenceChecks:Boolean = false): visit!
    deleteVisit(id: ID!): String!
    bulkAddVisitCsv: String!
    bulkAssociateVisitWithCalendar_id(bulkAssociationInput: [bulkAssociationVisitWithCalendar_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateVisitWithCalendar_id(bulkAssociationInput: [bulkAssociationVisitWithCalendar_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateVisitWithUser_id(bulkAssociationInput: [bulkAssociationVisitWithUser_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateVisitWithUser_id(bulkAssociationInput: [bulkAssociationVisitWithUser_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateVisitWithCumulus_id(bulkAssociationInput: [bulkAssociationVisitWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateVisitWithCumulus_id(bulkAssociationInput: [bulkAssociationVisitWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateVisitWithPristine_id(bulkAssociationInput: [bulkAssociationVisitWithPristine_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateVisitWithPristine_id(bulkAssociationInput: [bulkAssociationVisitWithPristine_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateVisitWithDisturbed_id(bulkAssociationInput: [bulkAssociationVisitWithDisturbed_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateVisitWithDisturbed_id(bulkAssociationInput: [bulkAssociationVisitWithDisturbed_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;