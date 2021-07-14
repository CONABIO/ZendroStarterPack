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
    @original-field
    
    """
    node_id: Int

    """
    @original-field
    
    """
    created_at: DateTime

    unique_node(search: searchNodeInput): node
    
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
    node_id
    created_at
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

  input bulkAssociationEcosystemWithNode_idInput{
    id: ID!
    node_id: ID!
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
    addEcosystem( name: String, created_at: DateTime , addUnique_node:ID   , skipAssociationsExistenceChecks:Boolean = false): ecosystem!
    updateEcosystem(id: ID!, name: String, created_at: DateTime , addUnique_node:ID, removeUnique_node:ID    , skipAssociationsExistenceChecks:Boolean = false): ecosystem!
    deleteEcosystem(id: ID!): String!
    bulkAddEcosystemCsv: String!
    bulkAssociateEcosystemWithNode_id(bulkAssociationInput: [bulkAssociationEcosystemWithNode_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateEcosystemWithNode_id(bulkAssociationInput: [bulkAssociationEcosystemWithNode_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;