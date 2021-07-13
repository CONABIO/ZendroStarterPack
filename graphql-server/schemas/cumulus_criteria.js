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
    cumulus_id: Int

    unique_cumulus(search: searchCumulusInput): cumulus
    
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
    cumulus_id
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
    addCumulus_criteria( name: String, cumulus_id: Int , addUnique_cumulus:ID   , skipAssociationsExistenceChecks:Boolean = false): cumulus_criteria!
    updateCumulus_criteria(id: ID!, name: String, cumulus_id: Int , addUnique_cumulus:ID, removeUnique_cumulus:ID    , skipAssociationsExistenceChecks:Boolean = false): cumulus_criteria!
    deleteCumulus_criteria(id: ID!): String!
    bulkAddCumulus_criteriaCsv: String!
      }
`;