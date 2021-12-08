module.exports = `
  type transect{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    number: Int

    """
    @original-field
    
    """
    sum_vegetation_structure: Float

    """
    @original-field
    
    """
    sum_indicator_species: Float

    """
    @original-field
    
    """
    sum_impact: Float

    """
    @original-field
    
    """
    date_transecto: DateTime

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
    percentage: Float

    """
    @original-field
    
    """
    node_id: Int

    associated_node(search: searchNodeInput): node
    
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type TransectConnection{
  edges: [TransectEdge]
  transects: [transect]
  pageInfo: pageInfo!
}

type TransectEdge{
  cursor: String!
  node: transect!
}

  type VueTableTransect{
    data : [transect]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum transectField {
    id
    number
    sum_vegetation_structure
    sum_indicator_species
    sum_impact
    date_transecto
    latitude
    longitude
    percentage
    node_id
  }
  
  input searchTransectInput {
    field: transectField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchTransectInput]
  }

  input orderTransectInput{
    field: transectField
    order: Order
  }

  input bulkAssociationTransectWithNode_idInput{
    id: ID!
    node_id: ID!
  }

  type Query {
    transects(search: searchTransectInput, order: [ orderTransectInput ], pagination: paginationInput! ): [transect]
    readOneTransect(id: ID!): transect
    countTransects(search: searchTransectInput ): Int
    vueTableTransect : VueTableTransect
    csvTableTemplateTransect: [String]
    transectsConnection(search:searchTransectInput, order: [ orderTransectInput ], pagination: paginationCursorInput! ): TransectConnection
    validateTransectForCreation( number: Int, sum_vegetation_structure: Float, sum_indicator_species: Float, sum_impact: Float, date_transecto: DateTime, latitude: Float, longitude: Float, percentage: Float , addAssociated_node:ID   , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateTransectForUpdating(id: ID!, number: Int, sum_vegetation_structure: Float, sum_indicator_species: Float, sum_impact: Float, date_transecto: DateTime, latitude: Float, longitude: Float, percentage: Float , addAssociated_node:ID, removeAssociated_node:ID    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateTransectForDeletion(id: ID!): Boolean!
    validateTransectAfterReading(id: ID!): Boolean!
  }

  type Mutation {
    addTransect( number: Int, sum_vegetation_structure: Float, sum_indicator_species: Float, sum_impact: Float, date_transecto: DateTime, latitude: Float, longitude: Float, percentage: Float , addAssociated_node:ID   , skipAssociationsExistenceChecks:Boolean = false): transect!
    updateTransect(id: ID!, number: Int, sum_vegetation_structure: Float, sum_indicator_species: Float, sum_impact: Float, date_transecto: DateTime, latitude: Float, longitude: Float, percentage: Float , addAssociated_node:ID, removeAssociated_node:ID    , skipAssociationsExistenceChecks:Boolean = false): transect!
    deleteTransect(id: ID!): String!
    bulkAddTransectCsv: String!
    bulkAssociateTransectWithNode_id(bulkAssociationInput: [bulkAssociationTransectWithNode_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateTransectWithNode_id(bulkAssociationInput: [bulkAssociationTransectWithNode_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;