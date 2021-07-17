module.exports = `
  type node{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    nomenclatura: String

    """
    @original-field
    
    """
    has_partner: Boolean

    """
    @original-field
    
    """
    fid: Int

    """
    @original-field
    
    """
    location: Point

    """
    @original-field
    
    """
    cat_integr: String

    """
    @original-field
    
    """
    integrity: Boolean

    """
    @original-field
    
    """
    cumulus_id: Int

    """
    @original-field
    
    """
    ecosystem_id: Int

    """
    @original-field
    
    """
    created_at: DateTime

    cumulus_node(search: searchCumulusInput): cumulus
  unique_visit(search: searchVisitInput): visit
  ecosystems(search: searchEcosystemInput): ecosystem
    
    }
type NodeConnection{
  edges: [NodeEdge]
  nodes: [node]
  pageInfo: pageInfo!
}

type NodeEdge{
  cursor: String!
  node: node!
}

  type VueTableNode{
    data : [node]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum nodeField {
    id
    nomenclatura
    has_partner
    fid
    location
    cat_integr
    integrity
    cumulus_id
    ecosystem_id
    created_at
  }
  input searchNodeInput {
    field: nodeField
    value: String
    valueType: InputType
    operator: Operator
    search: [searchNodeInput]
  }

  input orderNodeInput{
    field: nodeField
    order: Order
  }

  input bulkAssociationNodeWithCumulus_idInput{
    id: ID!
    cumulus_id: ID!
  }  input bulkAssociationNodeWithEcosystem_idInput{
    id: ID!
    ecosystem_id: ID!
  }

  type Query {
    nodes(search: searchNodeInput, order: [ orderNodeInput ], pagination: paginationInput! ): [node]
    readOneNode(id: ID!): node
    countNodes(search: searchNodeInput ): Int
    vueTableNode : VueTableNode
    csvTableTemplateNode: [String]
    nodesConnection(search:searchNodeInput, order: [ orderNodeInput ], pagination: paginationCursorInput! ): NodeConnection
  }

  type Mutation {
    addNode( nomenclatura: String, has_partner: Boolean, fid: Int, location: Point, cat_integr: String, integrity: Boolean, created_at: DateTime , addCumulus_node:ID, addUnique_visit:ID, addEcosystems:ID   , skipAssociationsExistenceChecks:Boolean = false): node!
    updateNode(id: ID!, nomenclatura: String, has_partner: Boolean, fid: Int, location: Point, cat_integr: String, integrity: Boolean, created_at: DateTime , addCumulus_node:ID, removeCumulus_node:ID , addUnique_visit:ID, removeUnique_visit:ID , addEcosystems:ID, removeEcosystems:ID    , skipAssociationsExistenceChecks:Boolean = false): node!
    deleteNode(id: ID!): String!
    bulkAddNodeCsv: String!
    bulkAssociateNodeWithCumulus_id(bulkAssociationInput: [bulkAssociationNodeWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateNodeWithCumulus_id(bulkAssociationInput: [bulkAssociationNodeWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateNodeWithEcosystem_id(bulkAssociationInput: [bulkAssociationNodeWithEcosystem_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateNodeWithEcosystem_id(bulkAssociationInput: [bulkAssociationNodeWithEcosystem_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;