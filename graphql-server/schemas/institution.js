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
    @original-field
    
    """
    cumulus_ids: [Int]

      
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

  type VueTableInstitution{
    data : [institution]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum institutionField {
    id
    name
    address
    phone_number
    cumulus_ids
  }
  input searchInstitutionInput {
    field: institutionField
    value: String
    valueType: InputType
    operator: Operator
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
    vueTableInstitution : VueTableInstitution
    csvTableTemplateInstitution: [String]
    institutionsConnection(search:searchInstitutionInput, order: [ orderInstitutionInput ], pagination: paginationCursorInput! ): InstitutionConnection
  }

  type Mutation {
    addInstitution( name: String, address: String, phone_number: Int   , addAssociated_cumulus:[ID] , skipAssociationsExistenceChecks:Boolean = false): institution!
    updateInstitution(id: ID!, name: String, address: String, phone_number: Int   , addAssociated_cumulus:[ID], removeAssociated_cumulus:[ID]  , skipAssociationsExistenceChecks:Boolean = false): institution!
    deleteInstitution(id: ID!): String!
    bulkAddInstitutionCsv: String!
      }
`;