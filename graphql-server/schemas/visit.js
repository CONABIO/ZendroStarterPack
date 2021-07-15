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
    device_id: Int

    """
    @original-field
    
    """
    calendar_id: Int

    """
    @original-field
    
    """
    created_at: DateTime

    calendar(search: searchCalendarInput): calendar
  user_visit(search: searchUserInput): user
    
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
    device_id
    calendar_id
    created_at
  }
  input searchVisitInput {
    field: visitField
    value: String
    valueType: InputType
    operator: Operator
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
  }

  type Query {
    visits(search: searchVisitInput, order: [ orderVisitInput ], pagination: paginationInput! ): [visit]
    readOneVisit(id: ID!): visit
    countVisits(search: searchVisitInput ): Int
    vueTableVisit : VueTableVisit
    csvTableTemplateVisit: [String]
    visitsConnection(search:searchVisitInput, order: [ orderVisitInput ], pagination: paginationCursorInput! ): VisitConnection
  }

  type Mutation {
    addVisit( device_id: Int, created_at: DateTime , addCalendar:ID, addUser_visit:ID  , addDeployments:[ID] , skipAssociationsExistenceChecks:Boolean = false): visit!
    updateVisit(id: ID!, device_id: Int, created_at: DateTime , addCalendar:ID, removeCalendar:ID , addUser_visit:ID, removeUser_visit:ID   , addDeployments:[ID], removeDeployments:[ID]  , skipAssociationsExistenceChecks:Boolean = false): visit!
    deleteVisit(id: ID!): String!
    bulkAddVisitCsv: String!
    bulkAssociateVisitWithCalendar_id(bulkAssociationInput: [bulkAssociationVisitWithCalendar_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateVisitWithCalendar_id(bulkAssociationInput: [bulkAssociationVisitWithCalendar_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateVisitWithUser_id(bulkAssociationInput: [bulkAssociationVisitWithUser_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateVisitWithUser_id(bulkAssociationInput: [bulkAssociationVisitWithUser_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;