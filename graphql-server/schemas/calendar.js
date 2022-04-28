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
    csvTableTemplateCalendar: [String]
    calendarsConnection(search:searchCalendarInput, order: [ orderCalendarInput ], pagination: paginationCursorInput! ): CalendarConnection
    validateCalendarForCreation( date_started: Date, date_finished: Date, sipecam_year: String, order: Int    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateCalendarForUpdating(id: ID!, date_started: Date, date_finished: Date, sipecam_year: String, order: Int    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateCalendarForDeletion(id: ID!): Boolean!
    validateCalendarAfterReading(id: ID!): Boolean!
    """
    calendarsZendroDefinition would return the static Zendro data model definition
    """
    calendarsZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addCalendar( date_started: Date, date_finished: Date, sipecam_year: String, order: Int    , skipAssociationsExistenceChecks:Boolean = false): calendar!
    updateCalendar(id: ID!, date_started: Date, date_finished: Date, sipecam_year: String, order: Int    , skipAssociationsExistenceChecks:Boolean = false): calendar!
    deleteCalendar(id: ID!): String!
      }
`;