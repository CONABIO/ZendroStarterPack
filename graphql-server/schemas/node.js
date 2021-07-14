module.exports = `
  type node{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    has_partner: Boolean

    """
    @original-field
    
    """
    id_sipe: String

    """
    @original-field
    
    """
    fid: Int

    """
    @original-field
    
    """
    latitude: Float

    """
    @original-field
    
    """
    longitude: Float

    """
    @original-field
    
    """
    altitude: Float

    """
    @original-field
    
    """
    cat_integr: String

    """
    @original-field
    
    """
    anpmarcelo: Boolean

    """
    @original-field
    
    """
    by_fauna: Int

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
    created_at: DateTime

    cumulus(search: searchCumulusInput): cumulus
  unique_ecosystem(search: searchEcosystemInput): ecosystem
  unique_calendar(search: searchCalendarInput): calendar
    
    """
    @search-request
    """
    physical_devicesFilter(search: searchPhysical_deviceInput, order: [ orderPhysical_deviceInput ], pagination: paginationInput!): [physical_device]


    """
    @search-request
    """
    physical_devicesConnection(search: searchPhysical_deviceInput, order: [ orderPhysical_deviceInput ], pagination: paginationCursorInput!): Physical_deviceConnection

    """
    @count-request
    """
    countFilteredPhysical_devices(search: searchPhysical_deviceInput) : Int
  
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
    has_partner
    id_sipe
    fid
    latitude
    longitude
    altitude
    cat_integr
    anpmarcelo
    by_fauna
    integrity
    cumulus_id
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
    addNode( has_partner: Boolean, id_sipe: String, fid: Int, latitude: Float, longitude: Float, altitude: Float, cat_integr: String, anpmarcelo: Boolean, by_fauna: Int, integrity: Boolean, created_at: DateTime , addCumulus:ID, addUnique_ecosystem:ID, addUnique_calendar:ID  , addPhysical_devices:[ID] , skipAssociationsExistenceChecks:Boolean = false): node!
    updateNode(id: ID!, has_partner: Boolean, id_sipe: String, fid: Int, latitude: Float, longitude: Float, altitude: Float, cat_integr: String, anpmarcelo: Boolean, by_fauna: Int, integrity: Boolean, created_at: DateTime , addCumulus:ID, removeCumulus:ID , addUnique_ecosystem:ID, removeUnique_ecosystem:ID , addUnique_calendar:ID, removeUnique_calendar:ID   , addPhysical_devices:[ID], removePhysical_devices:[ID]  , skipAssociationsExistenceChecks:Boolean = false): node!
    deleteNode(id: ID!): String!
    bulkAddNodeCsv: String!
    bulkAssociateNodeWithCumulus_id(bulkAssociationInput: [bulkAssociationNodeWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateNodeWithCumulus_id(bulkAssociationInput: [bulkAssociationNodeWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;