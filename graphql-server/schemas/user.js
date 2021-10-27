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
    email: String

    """
    @original-field
    
    """
    is_active: Boolean

    """
    @original-field
    
    """
    last_login: DateTime

    """
    @original-field
    
    """
    institution_id: Int

    """
    @original-field
    
    """
    cumulus_ids: [Int]

    """
    @original-field
    
    """
    created_at: DateTime

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
  
    """
    @search-request
    """
    associated_cumulusFilter(search: searchCumulusInput, order: [ orderCumulusInput ], pagination: paginationInput!): [cumulus]


    """
    @search-request
    """
    associated_cumulusConnection(search: searchCumulusInput, order: [ orderCumulusInput ], pagination: paginationCursorInput!): CumulusConnection

    """
    @count-request
    """
    countFilteredAssociated_cumulus(search: searchCumulusInput) : Int
  
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
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
    email
    is_active
    last_login
    institution_id
    cumulus_ids
    created_at
  }
  
  input searchUserInput {
    field: userField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
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
    validateUserForCreation( username: String, password: String, first_name: String, last_name: String, email: String, is_active: Boolean, last_login: DateTime, created_at: DateTime , addInstitutions:ID  , addRoles:[ID], addVisits:[ID], addAssociated_cumulus:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateUserForUpdating(id: ID!, username: String, password: String, first_name: String, last_name: String, email: String, is_active: Boolean, last_login: DateTime, created_at: DateTime , addInstitutions:ID, removeInstitutions:ID   , addRoles:[ID], removeRoles:[ID] , addVisits:[ID], removeVisits:[ID] , addAssociated_cumulus:[ID], removeAssociated_cumulus:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateUserForDeletion(id: ID!): Boolean!
    validateUserAfterReading(id: ID!): Boolean!
  }

  type Mutation {
    addUser( username: String, password: String, first_name: String, last_name: String, email: String, is_active: Boolean, last_login: DateTime, created_at: DateTime , addInstitutions:ID  , addRoles:[ID], addVisits:[ID], addAssociated_cumulus:[ID] , skipAssociationsExistenceChecks:Boolean = false): user!
    updateUser(id: ID!, username: String, password: String, first_name: String, last_name: String, email: String, is_active: Boolean, last_login: DateTime, created_at: DateTime , addInstitutions:ID, removeInstitutions:ID   , addRoles:[ID], removeRoles:[ID] , addVisits:[ID], removeVisits:[ID] , addAssociated_cumulus:[ID], removeAssociated_cumulus:[ID]  , skipAssociationsExistenceChecks:Boolean = false): user!
    deleteUser(id: ID!): String!
    bulkAddUserCsv: String!
    bulkAssociateUserWithInstitution_id(bulkAssociationInput: [bulkAssociationUserWithInstitution_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateUserWithInstitution_id(bulkAssociationInput: [bulkAssociationUserWithInstitution_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;