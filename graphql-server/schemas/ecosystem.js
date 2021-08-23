module.exports = `
  type ecosystem{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    name: String

      
    """
    @search-request
    """
    unique_nodeFilter(search: searchNodeInput, order: [ orderNodeInput ], pagination: paginationInput!): [node]


    """
    @search-request
    """
    unique_nodeConnection(search: searchNodeInput, order: [ orderNodeInput ], pagination: paginationCursorInput!): NodeConnection

    """
    @count-request
    """
    countFilteredUnique_node(search: searchNodeInput) : Int
  
    """
    @search-request
    """
    cumulus_ecosystemFilter(search: searchCumulusInput, order: [ orderCumulusInput ], pagination: paginationInput!): [cumulus]


    """
    @search-request
    """
    cumulus_ecosystemConnection(search: searchCumulusInput, order: [ orderCumulusInput ], pagination: paginationCursorInput!): CumulusConnection

    """
    @count-request
    """
    countFilteredCumulus_ecosystem(search: searchCumulusInput) : Int
  
    }
type EcosystemConnection{
  edges: [EcosystemEdge]
  ecosystems: [ecosystem]
  pageInfo: pageInfo!
}

type EcosystemEdge{
  cursor: String!
  node: ecosystem!
}

  type VueTableEcosystem{
    data : [ecosystem]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum ecosystemField {
    id
    name
  }
  input searchEcosystemInput {
    field: ecosystemField
    value: String
    valueType: InputType
    operator: Operator
    search: [searchEcosystemInput]
  }

  input orderEcosystemInput{
    field: ecosystemField
    order: Order
  }



  type Query {
    ecosystems(search: searchEcosystemInput, order: [ orderEcosystemInput ], pagination: paginationInput! ): [ecosystem]
    readOneEcosystem(id: ID!): ecosystem
    countEcosystems(search: searchEcosystemInput ): Int
    vueTableEcosystem : VueTableEcosystem
    csvTableTemplateEcosystem: [String]
    ecosystemsConnection(search:searchEcosystemInput, order: [ orderEcosystemInput ], pagination: paginationCursorInput! ): EcosystemConnection
  }

  type Mutation {
    addEcosystem( name: String   , addUnique_node:[ID], addCumulus_ecosystem:[ID] , skipAssociationsExistenceChecks:Boolean = false): ecosystem!
    updateEcosystem(id: ID!, name: String   , addUnique_node:[ID], removeUnique_node:[ID] , addCumulus_ecosystem:[ID], removeCumulus_ecosystem:[ID]  , skipAssociationsExistenceChecks:Boolean = false): ecosystem!
    deleteEcosystem(id: ID!): String!
    bulkAddEcosystemCsv: String!
      }
`;