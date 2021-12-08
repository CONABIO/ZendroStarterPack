module.exports = `
  type individual{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    date_trap: DateTime

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
    comments: String

    """
    @original-field
    
    """
    metadata: JSON

    """
    @original-field
    
    """
    kobo_url: String

    """
    @original-field
    
    """
    clave_posicion_malla: String

    """
    @original-field
    
    """
    arete: Int

    """
    @original-field
    
    """
    node_id: Int

    """
    @original-field
    
    """
    cumulus_id: Int

    associated_node(search: searchNodeInput): node
  associated_cumulus(search: searchCumulusInput): cumulus
    
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type IndividualConnection{
  edges: [IndividualEdge]
  individuals: [individual]
  pageInfo: pageInfo!
}

type IndividualEdge{
  cursor: String!
  node: individual!
}

  type VueTableIndividual{
    data : [individual]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum individualField {
    id
    date_trap
    latitude
    longitude
    altitude
    comments
    metadata
    kobo_url
    clave_posicion_malla
    arete
    node_id
    cumulus_id
  }
  
  input searchIndividualInput {
    field: individualField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchIndividualInput]
  }

  input orderIndividualInput{
    field: individualField
    order: Order
  }

  input bulkAssociationIndividualWithNode_idInput{
    id: ID!
    node_id: ID!
  }  input bulkAssociationIndividualWithCumulus_idInput{
    id: ID!
    cumulus_id: ID!
  }

  type Query {
    individuals(search: searchIndividualInput, order: [ orderIndividualInput ], pagination: paginationInput! ): [individual]
    readOneIndividual(id: ID!): individual
    countIndividuals(search: searchIndividualInput ): Int
    vueTableIndividual : VueTableIndividual
    csvTableTemplateIndividual: [String]
    individualsConnection(search:searchIndividualInput, order: [ orderIndividualInput ], pagination: paginationCursorInput! ): IndividualConnection
    validateIndividualForCreation( date_trap: DateTime, latitude: Float, longitude: Float, altitude: Float, comments: String, metadata: JSON, kobo_url: String, clave_posicion_malla: String, arete: Int , addAssociated_node:ID, addAssociated_cumulus:ID   , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateIndividualForUpdating(id: ID!, date_trap: DateTime, latitude: Float, longitude: Float, altitude: Float, comments: String, metadata: JSON, kobo_url: String, clave_posicion_malla: String, arete: Int , addAssociated_node:ID, removeAssociated_node:ID , addAssociated_cumulus:ID, removeAssociated_cumulus:ID    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateIndividualForDeletion(id: ID!): Boolean!
    validateIndividualAfterReading(id: ID!): Boolean!
  }

  type Mutation {
    addIndividual( date_trap: DateTime, latitude: Float, longitude: Float, altitude: Float, comments: String, metadata: JSON, kobo_url: String, clave_posicion_malla: String, arete: Int , addAssociated_node:ID, addAssociated_cumulus:ID   , skipAssociationsExistenceChecks:Boolean = false): individual!
    updateIndividual(id: ID!, date_trap: DateTime, latitude: Float, longitude: Float, altitude: Float, comments: String, metadata: JSON, kobo_url: String, clave_posicion_malla: String, arete: Int , addAssociated_node:ID, removeAssociated_node:ID , addAssociated_cumulus:ID, removeAssociated_cumulus:ID    , skipAssociationsExistenceChecks:Boolean = false): individual!
    deleteIndividual(id: ID!): String!
    bulkAddIndividualCsv: String!
    bulkAssociateIndividualWithNode_id(bulkAssociationInput: [bulkAssociationIndividualWithNode_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateIndividualWithNode_id(bulkAssociationInput: [bulkAssociationIndividualWithNode_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateIndividualWithCumulus_id(bulkAssociationInput: [bulkAssociationIndividualWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateIndividualWithCumulus_id(bulkAssociationInput: [bulkAssociationIndividualWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;