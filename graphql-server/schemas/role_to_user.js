module.exports = `
  type role_to_user{
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
    role_id: Int

      
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type Role_to_userConnection{
  edges: [Role_to_userEdge]
  role_to_users: [role_to_user]
  pageInfo: pageInfo!
}

type Role_to_userEdge{
  cursor: String!
  node: role_to_user!
}

  enum role_to_userField {
    id
    user_id
    role_id
  }
  
  input searchRole_to_userInput {
    field: role_to_userField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchRole_to_userInput]
  }

  input orderRole_to_userInput{
    field: role_to_userField
    order: Order
  }



  type Query {
    role_to_users(search: searchRole_to_userInput, order: [ orderRole_to_userInput ], pagination: paginationInput! ): [role_to_user]
    readOneRole_to_user(id: ID!): role_to_user
    countRole_to_users(search: searchRole_to_userInput ): Int
    csvTableTemplateRole_to_user: [String]
    role_to_usersConnection(search:searchRole_to_userInput, order: [ orderRole_to_userInput ], pagination: paginationCursorInput! ): Role_to_userConnection
    validateRole_to_userForCreation( user_id: Int, role_id: Int    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateRole_to_userForUpdating(id: ID!, user_id: Int, role_id: Int    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateRole_to_userForDeletion(id: ID!): Boolean!
    validateRole_to_userAfterReading(id: ID!): Boolean!
    """
    role_to_usersZendroDefinition would return the static Zendro data model definition
    """
    role_to_usersZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addRole_to_user( user_id: Int, role_id: Int    , skipAssociationsExistenceChecks:Boolean = false): role_to_user!
    updateRole_to_user(id: ID!, user_id: Int, role_id: Int    , skipAssociationsExistenceChecks:Boolean = false): role_to_user!
    deleteRole_to_user(id: ID!): String!
      }
`;