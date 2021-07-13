module.exports = `
  type cumulus{
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
    geometry: String

    """
    @original-field
    
    """
    criteria_id: Int

    """
    @original-field
    
    """
    devices_ids: [Int]

    """
    @original-field
    
    """
    institutions_ids: [Int]

    unique_cumulus_criteria(search: searchCumulus_criteriaInput): cumulus_criteria
    
    """
    @search-request
    """
    nodesFilter(search: searchNodeInput, order: [ orderNodeInput ], pagination: paginationInput!): [node]


    """
    @search-request
    """
    nodesConnection(search: searchNodeInput, order: [ orderNodeInput ], pagination: paginationCursorInput!): NodeConnection

    """
    @count-request
    """
    countFilteredNodes(search: searchNodeInput) : Int
  
    """
    @search-request
    """
    devicesFilter(search: searchDevice_catalogInput, order: [ orderDevice_catalogInput ], pagination: paginationInput!): [device_catalog]


    """
    @search-request
    """
    devicesConnection(search: searchDevice_catalogInput, order: [ orderDevice_catalogInput ], pagination: paginationCursorInput!): Device_catalogConnection

    """
    @count-request
    """
    countFilteredDevices(search: searchDevice_catalogInput) : Int
  
    """
    @search-request
    """
    associated_institutionsFilter(search: searchInstitutionInput, order: [ orderInstitutionInput ], pagination: paginationInput!): [institution]


    """
    @search-request
    """
    associated_institutionsConnection(search: searchInstitutionInput, order: [ orderInstitutionInput ], pagination: paginationCursorInput!): InstitutionConnection

    """
    @count-request
    """
    countFilteredAssociated_institutions(search: searchInstitutionInput) : Int
  
    }
type CumulusConnection{
  edges: [CumulusEdge]
  cumulus: [cumulus]
  pageInfo: pageInfo!
}

type CumulusEdge{
  cursor: String!
  node: cumulus!
}

  type VueTableCumulus{
    data : [cumulus]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum cumulusField {
    id
    name
    geometry
    criteria_id
    devices_ids
    institutions_ids
  }
  input searchCumulusInput {
    field: cumulusField
    value: String
    valueType: InputType
    operator: Operator
    search: [searchCumulusInput]
  }

  input orderCumulusInput{
    field: cumulusField
    order: Order
  }

  input bulkAssociationCumulusWithCriteria_idInput{
    id: ID!
    criteria_id: ID!
  }

  type Query {
    cumulus(search: searchCumulusInput, order: [ orderCumulusInput ], pagination: paginationInput! ): [cumulus]
    readOneCumulus(id: ID!): cumulus
    countCumulus(search: searchCumulusInput ): Int
    vueTableCumulus : VueTableCumulus
    csvTableTemplateCumulus: [String]
    cumulusConnection(search:searchCumulusInput, order: [ orderCumulusInput ], pagination: paginationCursorInput! ): CumulusConnection
  }

  type Mutation {
    addCumulus( name: String, geometry: String , addUnique_cumulus_criteria:ID  , addNodes:[ID], addDevices:[ID], addAssociated_institutions:[ID] , skipAssociationsExistenceChecks:Boolean = false): cumulus!
    updateCumulus(id: ID!, name: String, geometry: String , addUnique_cumulus_criteria:ID, removeUnique_cumulus_criteria:ID   , addNodes:[ID], removeNodes:[ID] , addDevices:[ID], removeDevices:[ID] , addAssociated_institutions:[ID], removeAssociated_institutions:[ID]  , skipAssociationsExistenceChecks:Boolean = false): cumulus!
    deleteCumulus(id: ID!): String!
    bulkAddCumulusCsv: String!
    bulkAssociateCumulusWithCriteria_id(bulkAssociationInput: [bulkAssociationCumulusWithCriteria_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateCumulusWithCriteria_id(bulkAssociationInput: [bulkAssociationCumulusWithCriteria_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;