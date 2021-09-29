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
    @original-field
    
    """
    created_at: DateTime

      
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

  type VueTableRole_to_user{
    data : [role_to_user]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum role_to_userField {
    id
    user_id
    role_id
    created_at
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
    vueTableRole_to_user : VueTableRole_to_user
    csvTableTemplateRole_to_user: [String]
    role_to_usersConnection(search:searchRole_to_userInput, order: [ orderRole_to_userInput ], pagination: paginationCursorInput! ): Role_to_userConnection
  }

  type Mutation {
    addRole_to_user( user_id: Int, role_id: Int, created_at: DateTime    , skipAssociationsExistenceChecks:Boolean = false): role_to_user!
    updateRole_to_user(id: ID!, user_id: Int, role_id: Int, created_at: DateTime    , skipAssociationsExistenceChecks:Boolean = false): role_to_user!
    deleteRole_to_user(id: ID!): String!
    bulkAddRole_to_userCsv: String!
      }
`;