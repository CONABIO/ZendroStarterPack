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
    con_socio: Int

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
    cumulus_id: Int

    """
    @original-field
    
    """
    ecosystem_id: Int

    cumulus_node(search: searchCumulusInput): cumulus
  unique_visit_pristine(search: searchVisitInput): visit
  unique_visit_disturbed(search: searchVisitInput): visit
  ecosystems(search: searchEcosystemInput): ecosystem
  individuals(search: searchIndividualInput): individual
    
    """
    @search-request
    """
    deploymentsFilter(search: searchDeploymentInput, order: [ orderDeploymentInput ], pagination: paginationInput!): [deployment]


    """
    @search-request
    """
    deploymentsConnection(search: searchDeploymentInput, order: [ orderDeploymentInput ], pagination: paginationCursorInput!): DeploymentConnection

    """
    @count-request
    """
    countFilteredDeployments(search: searchDeploymentInput) : Int
  
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
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
    con_socio
    fid
    location
    cat_integr
    cumulus_id
    ecosystem_id
  }
  
  input searchNodeInput {
    field: nodeField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
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
    validateNodeForCreation( nomenclatura: String, con_socio: Int, fid: Int, location: Point, cat_integr: String , addCumulus_node:ID, addUnique_visit_pristine:ID, addUnique_visit_disturbed:ID, addEcosystems:ID, addIndividuals:ID  , addDeployments:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateNodeForUpdating(id: ID!, nomenclatura: String, con_socio: Int, fid: Int, location: Point, cat_integr: String , addCumulus_node:ID, removeCumulus_node:ID , addUnique_visit_pristine:ID, removeUnique_visit_pristine:ID , addUnique_visit_disturbed:ID, removeUnique_visit_disturbed:ID , addEcosystems:ID, removeEcosystems:ID , addIndividuals:ID, removeIndividuals:ID   , addDeployments:[ID], removeDeployments:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateNodeForDeletion(id: ID!): Boolean!
    validateNodeAfterReading(id: ID!): Boolean!
  }

  type Mutation {
    addNode( nomenclatura: String, con_socio: Int, fid: Int, location: Point, cat_integr: String , addCumulus_node:ID, addUnique_visit_pristine:ID, addUnique_visit_disturbed:ID, addEcosystems:ID, addIndividuals:ID  , addDeployments:[ID] , skipAssociationsExistenceChecks:Boolean = false): node!
    updateNode(id: ID!, nomenclatura: String, con_socio: Int, fid: Int, location: Point, cat_integr: String , addCumulus_node:ID, removeCumulus_node:ID , addUnique_visit_pristine:ID, removeUnique_visit_pristine:ID , addUnique_visit_disturbed:ID, removeUnique_visit_disturbed:ID , addEcosystems:ID, removeEcosystems:ID , addIndividuals:ID, removeIndividuals:ID   , addDeployments:[ID], removeDeployments:[ID]  , skipAssociationsExistenceChecks:Boolean = false): node!
    deleteNode(id: ID!): String!
    bulkAddNodeCsv: String!
    bulkAssociateNodeWithCumulus_id(bulkAssociationInput: [bulkAssociationNodeWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateNodeWithCumulus_id(bulkAssociationInput: [bulkAssociationNodeWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateNodeWithEcosystem_id(bulkAssociationInput: [bulkAssociationNodeWithEcosystem_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateNodeWithEcosystem_id(bulkAssociationInput: [bulkAssociationNodeWithEcosystem_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;