module.exports = `
  type calendar{
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
    node_id: Int

    """
    @original-field
    
    """
    created_at: DateTime

    """
    @original-field
    
    """
    updated_at: DateTime

    unique_node(search: searchNodeInput): node
    
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
  
    }
type CalendarConnection{
  edges: [CalendarEdge]
  calendars: [calendar]
  pageInfo: pageInfo!
}

type CalendarEdge{
  cursor: String!
  node: calendar!
}

  type VueTableCalendar{
    data : [calendar]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum calendarField {
    id
    date_started
    date_finished
    node_id
    created_at
    updated_at
  }
  input searchCalendarInput {
    field: calendarField
    value: String
    valueType: InputType
    operator: Operator
    search: [searchCalendarInput]
  }

  input orderCalendarInput{
    field: calendarField
    order: Order
  }

  input bulkAssociationCalendarWithNode_idInput{
    id: ID!
    node_id: ID!
  }

  type Query {
    calendars(search: searchCalendarInput, order: [ orderCalendarInput ], pagination: paginationInput! ): [calendar]
    readOneCalendar(id: ID!): calendar
    countCalendars(search: searchCalendarInput ): Int
    vueTableCalendar : VueTableCalendar
    csvTableTemplateCalendar: [String]
    calendarsConnection(search:searchCalendarInput, order: [ orderCalendarInput ], pagination: paginationCursorInput! ): CalendarConnection
  }

  type Mutation {
    addCalendar( date_started: Date, date_finished: Date, created_at: DateTime, updated_at: DateTime , addUnique_node:ID  , addVisits:[ID] , skipAssociationsExistenceChecks:Boolean = false): calendar!
    updateCalendar(id: ID!, date_started: Date, date_finished: Date, created_at: DateTime, updated_at: DateTime , addUnique_node:ID, removeUnique_node:ID   , addVisits:[ID], removeVisits:[ID]  , skipAssociationsExistenceChecks:Boolean = false): calendar!
    deleteCalendar(id: ID!): String!
    bulkAddCalendarCsv: String!
    bulkAssociateCalendarWithNode_id(bulkAssociationInput: [bulkAssociationCalendarWithNode_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateCalendarWithNode_id(bulkAssociationInput: [bulkAssociationCalendarWithNode_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;