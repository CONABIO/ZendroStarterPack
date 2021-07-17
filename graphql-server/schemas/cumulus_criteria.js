module.exports = `
  type cumulus_criteria{
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
    created_at: DateTime

      
    """
    @search-request
    """
    cumulusFilter(search: searchCumulusInput, order: [ orderCumulusInput ], pagination: paginationInput!): [cumulus]


    """
    @search-request
    """
    cumulusConnection(search: searchCumulusInput, order: [ orderCumulusInput ], pagination: paginationCursorInput!): CumulusConnection

    """
    @count-request
    """
    countFilteredCumulus(search: searchCumulusInput) : Int
  
    }
type Cumulus_criteriaConnection{
  edges: [Cumulus_criteriaEdge]
  cumulus_criteria: [cumulus_criteria]
  pageInfo: pageInfo!
}

type Cumulus_criteriaEdge{
  cursor: String!
  node: cumulus_criteria!
}

  type VueTableCumulus_criteria{
    data : [cumulus_criteria]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum cumulus_criteriaField {
    id
    name
    created_at
  }
  input searchCumulus_criteriaInput {
    field: cumulus_criteriaField
    value: String
    valueType: InputType
    operator: Operator
    search: [searchCumulus_criteriaInput]
  }

  input orderCumulus_criteriaInput{
    field: cumulus_criteriaField
    order: Order
  }



  type Query {
    cumulus_criteria(search: searchCumulus_criteriaInput, order: [ orderCumulus_criteriaInput ], pagination: paginationInput! ): [cumulus_criteria]
    readOneCumulus_criteria(id: ID!): cumulus_criteria
    countCumulus_criteria(search: searchCumulus_criteriaInput ): Int
    vueTableCumulus_criteria : VueTableCumulus_criteria
    csvTableTemplateCumulus_criteria: [String]
    cumulus_criteriaConnection(search:searchCumulus_criteriaInput, order: [ orderCumulus_criteriaInput ], pagination: paginationCursorInput! ): Cumulus_criteriaConnection
  }

  type Mutation {
    addCumulus_criteria( name: String, created_at: DateTime   , addCumulus:[ID] , skipAssociationsExistenceChecks:Boolean = false): cumulus_criteria!
    updateCumulus_criteria(id: ID!, name: String, created_at: DateTime   , addCumulus:[ID], removeCumulus:[ID]  , skipAssociationsExistenceChecks:Boolean = false): cumulus_criteria!
    deleteCumulus_criteria(id: ID!): String!
    bulkAddCumulus_criteriaCsv: String!
      }
`;