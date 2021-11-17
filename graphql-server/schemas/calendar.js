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
    sipecam_year: String

    """
    @original-field
    
    """
    order: Int

      
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
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
    sipecam_year
    order
  }
  
  input searchCalendarInput {
    field: calendarField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchCalendarInput]
  }

  input orderCalendarInput{
    field: calendarField
    order: Order
  }



  type Query {
    calendars(search: searchCalendarInput, order: [ orderCalendarInput ], pagination: paginationInput! ): [calendar]
    readOneCalendar(id: ID!): calendar
    countCalendars(search: searchCalendarInput ): Int
    vueTableCalendar : VueTableCalendar
    csvTableTemplateCalendar: [String]
    calendarsConnection(search:searchCalendarInput, order: [ orderCalendarInput ], pagination: paginationCursorInput! ): CalendarConnection
    validateCalendarForCreation( date_started: Date, date_finished: Date, sipecam_year: String, order: Int    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateCalendarForUpdating(id: ID!, date_started: Date, date_finished: Date, sipecam_year: String, order: Int    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateCalendarForDeletion(id: ID!): Boolean!
    validateCalendarAfterReading(id: ID!): Boolean!
  }

  type Mutation {
    addCalendar( date_started: Date, date_finished: Date, sipecam_year: String, order: Int    , skipAssociationsExistenceChecks:Boolean = false): calendar!
    updateCalendar(id: ID!, date_started: Date, date_finished: Date, sipecam_year: String, order: Int    , skipAssociationsExistenceChecks:Boolean = false): calendar!
    deleteCalendar(id: ID!): String!
    bulkAddCalendarCsv: String!
      }
`;