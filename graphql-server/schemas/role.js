module.exports = `
  type role{
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
    description: String

      
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
type RoleConnection{
  edges: [RoleEdge]
  roles: [role]
  pageInfo: pageInfo!
}

type RoleEdge{
  cursor: String!
  node: role!
}

  enum roleField {
    id
    name
    description
  }
  
  input searchRoleInput {
    field: roleField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchRoleInput]
  }

  input orderRoleInput{
    field: roleField
    order: Order
  }



  type Query {
    roles(search: searchRoleInput, order: [ orderRoleInput ], pagination: paginationInput! ): [role]
    readOneRole(id: ID!): role
    countRoles(search: searchRoleInput ): Int
    csvTableTemplateRole: [String]
    rolesConnection(search:searchRoleInput, order: [ orderRoleInput ], pagination: paginationCursorInput! ): RoleConnection
    validateRoleForCreation( name: String, description: String   , addUsers:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateRoleForUpdating(id: ID!, name: String, description: String   , addUsers:[ID], removeUsers:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateRoleForDeletion(id: ID!): Boolean!
    validateRoleAfterReading(id: ID!): Boolean!
    """
    rolesZendroDefinition would return the static Zendro data model definition
    """
    rolesZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addRole( name: String, description: String   , addUsers:[ID] , skipAssociationsExistenceChecks:Boolean = false): role!
    updateRole(id: ID!, name: String, description: String   , addUsers:[ID], removeUsers:[ID]  , skipAssociationsExistenceChecks:Boolean = false): role!
    deleteRole(id: ID!): String!
      }
`;