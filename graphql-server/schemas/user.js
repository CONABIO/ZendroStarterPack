module.exports = `
  type user{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    username: String

    """
    @original-field
    
    """
    password: String

    """
    @original-field
    
    """
    first_name: String

    """
    @original-field
    
    """
    last_name: String

    """
    @original-field
    
    """
    grade: String

    """
    @original-field
    
    """
    email: String

    """
    @original-field
    
    """
    address: String

    """
    @original-field
    
    """
    is_active: Boolean

    """
    @original-field
    
    """
    comments: String

    """
    @original-field
    
    """
    last_login: DateTime

    """
    @original-field
    
    """
    institution_id: Int

    institutions(search: searchInstitutionInput): institution
    
    """
    @search-request
    """
    rolesFilter(search: searchRoleInput, order: [ orderRoleInput ], pagination: paginationInput!): [role]


    """
    @search-request
    """
    rolesConnection(search: searchRoleInput, order: [ orderRoleInput ], pagination: paginationCursorInput!): RoleConnection

    """
    @count-request
    """
    countFilteredRoles(search: searchRoleInput) : Int
  
    }
type UserConnection{
  edges: [UserEdge]
  users: [user]
  pageInfo: pageInfo!
}

type UserEdge{
  cursor: String!
  node: user!
}

  type VueTableUser{
    data : [user]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum userField {
    id
    username
    password
    first_name
    last_name
    grade
    email
    address
    is_active
    comments
    last_login
    institution_id
  }
  input searchUserInput {
    field: userField
    value: String
    valueType: InputType
    operator: Operator
    search: [searchUserInput]
  }

  input orderUserInput{
    field: userField
    order: Order
  }

  input bulkAssociationUserWithInstitution_idInput{
    id: ID!
    institution_id: ID!
  }

  type Query {
    users(search: searchUserInput, order: [ orderUserInput ], pagination: paginationInput! ): [user]
    readOneUser(id: ID!): user
    countUsers(search: searchUserInput ): Int
    vueTableUser : VueTableUser
    csvTableTemplateUser: [String]
    usersConnection(search:searchUserInput, order: [ orderUserInput ], pagination: paginationCursorInput! ): UserConnection
  }

  type Mutation {
    addUser( username: String, password: String, first_name: String, last_name: String, grade: String, email: String, address: String, is_active: Boolean, comments: String, last_login: DateTime , addInstitutions:ID  , addRoles:[ID] , skipAssociationsExistenceChecks:Boolean = false): user!
    updateUser(id: ID!, username: String, password: String, first_name: String, last_name: String, grade: String, email: String, address: String, is_active: Boolean, comments: String, last_login: DateTime , addInstitutions:ID, removeInstitutions:ID   , addRoles:[ID], removeRoles:[ID]  , skipAssociationsExistenceChecks:Boolean = false): user!
    deleteUser(id: ID!): String!
    bulkAddUserCsv: String!
    bulkAssociateUserWithInstitution_id(bulkAssociationInput: [bulkAssociationUserWithInstitution_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateUserWithInstitution_id(bulkAssociationInput: [bulkAssociationUserWithInstitution_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;