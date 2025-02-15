module.exports = `
  type institution{
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
    address: String

    """
    @original-field
    
    """
    phone_number: Int

      
    """
    @search-request
    """
    usersFilter(search: searchUserInput, order: [ orderUserInput ], pagination: paginationInput!): [user]


    """
    @search-request
    """
    usersConnection(search: searchUserInput, order: [ orderUserInput ], pagination: paginationCursorInput!): UserConnection

    """
    @count-request
    """
    countFilteredUsers(search: searchUserInput) : Int
  
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type InstitutionConnection{
  edges: [InstitutionEdge]
  institutions: [institution]
  pageInfo: pageInfo!
}

type InstitutionEdge{
  cursor: String!
  node: institution!
}

  enum institutionField {
    id
    name
    address
    phone_number
  }
  
  input searchInstitutionInput {
    field: institutionField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchInstitutionInput]
  }

  input orderInstitutionInput{
    field: institutionField
    order: Order
  }



  type Query {
    institutions(search: searchInstitutionInput, order: [ orderInstitutionInput ], pagination: paginationInput! ): [institution]
    readOneInstitution(id: ID!): institution
    countInstitutions(search: searchInstitutionInput ): Int
    csvTableTemplateInstitution: [String]
    institutionsConnection(search:searchInstitutionInput, order: [ orderInstitutionInput ], pagination: paginationCursorInput! ): InstitutionConnection
    validateInstitutionForCreation( name: String, address: String, phone_number: Int   , addUsers:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateInstitutionForUpdating(id: ID!, name: String, address: String, phone_number: Int   , addUsers:[ID], removeUsers:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateInstitutionForDeletion(id: ID!): Boolean!
    validateInstitutionAfterReading(id: ID!): Boolean!
    """
    institutionsZendroDefinition would return the static Zendro data model definition
    """
    institutionsZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addInstitution( name: String, address: String, phone_number: Int   , addUsers:[ID] , skipAssociationsExistenceChecks:Boolean = false): institution!
    updateInstitution(id: ID!, name: String, address: String, phone_number: Int   , addUsers:[ID], removeUsers:[ID]  , skipAssociationsExistenceChecks:Boolean = false): institution!
    deleteInstitution(id: ID!): String!
      }
`;