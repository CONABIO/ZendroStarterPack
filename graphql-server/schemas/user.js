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
    @search-request
    """
    user_annotations_geomFilter(search: searchAnnotations_geomInput, order: [ orderAnnotations_geomInput ], pagination: paginationInput!): [annotations_geom]


    """
    @search-request
    """
    user_annotations_geomConnection(search: searchAnnotations_geomInput, order: [ orderAnnotations_geomInput ], pagination: paginationCursorInput!): Annotations_geomConnection

    """
    @count-request
    """
    countFilteredUser_annotations_geom(search: searchAnnotations_geomInput) : Int
  
    """
    @search-request
    """
    user_annotations_mediaFilter(search: searchAnnotations_mediaInput, order: [ orderAnnotations_mediaInput ], pagination: paginationInput!): [annotations_media]


    """
    @search-request
    """
    user_annotations_mediaConnection(search: searchAnnotations_mediaInput, order: [ orderAnnotations_mediaInput ], pagination: paginationCursorInput!): Annotations_mediaConnection

    """
    @count-request
    """
    countFilteredUser_annotations_media(search: searchAnnotations_mediaInput) : Int
  
    
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
    csvTableTemplateUser: [String]
    usersConnection(search:searchUserInput, order: [ orderUserInput ], pagination: paginationCursorInput! ): UserConnection
    validateUserForCreation( username: String, password: String, first_name: String, last_name: String, email: String, is_active: Boolean, last_login: DateTime , addInstitutions:ID  , addRoles:[ID], addAssociated_cumulus:[ID], addUser_annotations_geom:[ID], addUser_annotations_media:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateUserForUpdating(id: ID!, username: String, password: String, first_name: String, last_name: String, email: String, is_active: Boolean, last_login: DateTime , addInstitutions:ID, removeInstitutions:ID   , addRoles:[ID], removeRoles:[ID] , addAssociated_cumulus:[ID], removeAssociated_cumulus:[ID] , addUser_annotations_geom:[ID], removeUser_annotations_geom:[ID] , addUser_annotations_media:[ID], removeUser_annotations_media:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateUserForDeletion(id: ID!): Boolean!
    validateUserAfterReading(id: ID!): Boolean!
    """
    usersZendroDefinition would return the static Zendro data model definition
    """
    usersZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addUser( username: String, password: String, first_name: String, last_name: String, email: String, is_active: Boolean, last_login: DateTime , addInstitutions:ID  , addRoles:[ID], addAssociated_cumulus:[ID], addUser_annotations_geom:[ID], addUser_annotations_media:[ID] , skipAssociationsExistenceChecks:Boolean = false): user!
    updateUser(id: ID!, username: String, password: String, first_name: String, last_name: String, email: String, is_active: Boolean, last_login: DateTime , addInstitutions:ID, removeInstitutions:ID   , addRoles:[ID], removeRoles:[ID] , addAssociated_cumulus:[ID], removeAssociated_cumulus:[ID] , addUser_annotations_geom:[ID], removeUser_annotations_geom:[ID] , addUser_annotations_media:[ID], removeUser_annotations_media:[ID]  , skipAssociationsExistenceChecks:Boolean = false): user!
    deleteUser(id: ID!): String!
    bulkAssociateUserWithInstitution_id(bulkAssociationInput: [bulkAssociationUserWithInstitution_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateUserWithInstitution_id(bulkAssociationInput: [bulkAssociationUserWithInstitution_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;