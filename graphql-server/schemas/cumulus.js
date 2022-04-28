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
    geometry: Polygon

    """
    @original-field
    
    """
    criteria_id: Int

    """
    @original-field
    
    """
    user_ids: [Int]

    """
    @original-field
    
    """
    ecosystem_id: Int

    """
    @original-field
    
    """
    con_socio: Int

    cumulus_criteria(search: searchCumulus_criteriaInput): cumulus_criteria
  unique_ecosystem(search: searchEcosystemInput): ecosystem
    
    """
    @search-request
    """
    devicesFilter(search: searchPhysical_deviceInput, order: [ orderPhysical_deviceInput ], pagination: paginationInput!): [physical_device]


    """
    @search-request
    """
    devicesConnection(search: searchPhysical_deviceInput, order: [ orderPhysical_deviceInput ], pagination: paginationCursorInput!): Physical_deviceConnection

    """
    @count-request
    """
    countFilteredDevices(search: searchPhysical_deviceInput) : Int
  
    """
    @search-request
    """
    associated_partnersFilter(search: searchUserInput, order: [ orderUserInput ], pagination: paginationInput!): [user]


    """
    @search-request
    """
    associated_partnersConnection(search: searchUserInput, order: [ orderUserInput ], pagination: paginationCursorInput!): UserConnection

    """
    @count-request
    """
    countFilteredAssociated_partners(search: searchUserInput) : Int
  
    """
    @search-request
    """
    visitsFilter(search: searchVisitInput, order: [ orderVisitInput ], pagination: paginationInput!): [visit]


    """
    @search-request
    """
    visitsConnection(search: searchVisitInput, order: [ orderVisitInput ], pagination: paginationCursorInput!): VisitConnection

    """
    @count-request
    """
    countFilteredVisits(search: searchVisitInput) : Int
  
    """
    @search-request
    """
    monitorsFilter(search: searchMonitorInput, order: [ orderMonitorInput ], pagination: paginationInput!): [monitor]


    """
    @search-request
    """
    monitorsConnection(search: searchMonitorInput, order: [ orderMonitorInput ], pagination: paginationCursorInput!): MonitorConnection

    """
    @count-request
    """
    countFilteredMonitors(search: searchMonitorInput) : Int
  
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
    @search-request
    """
    individualsFilter(search: searchIndividualInput, order: [ orderIndividualInput ], pagination: paginationInput!): [individual]


    """
    @search-request
    """
    individualsConnection(search: searchIndividualInput, order: [ orderIndividualInput ], pagination: paginationCursorInput!): IndividualConnection

    """
    @count-request
    """
    countFilteredIndividuals(search: searchIndividualInput) : Int
  
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
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

  enum cumulusField {
    id
    name
    geometry
    criteria_id
    user_ids
    ecosystem_id
    con_socio
  }
  
  input searchCumulusInput {
    field: cumulusField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchCumulusInput]
  }

  input orderCumulusInput{
    field: cumulusField
    order: Order
  }

  input bulkAssociationCumulusWithCriteria_idInput{
    id: ID!
    criteria_id: ID!
  }  input bulkAssociationCumulusWithEcosystem_idInput{
    id: ID!
    ecosystem_id: ID!
  }

  type Query {
    cumulus(search: searchCumulusInput, order: [ orderCumulusInput ], pagination: paginationInput! ): [cumulus]
    readOneCumulus(id: ID!): cumulus
    countCumulus(search: searchCumulusInput ): Int
    csvTableTemplateCumulus: [String]
    cumulusConnection(search:searchCumulusInput, order: [ orderCumulusInput ], pagination: paginationCursorInput! ): CumulusConnection
    validateCumulusForCreation( name: String, geometry: Polygon, con_socio: Int , addCumulus_criteria:ID, addUnique_ecosystem:ID  , addDevices:[ID], addAssociated_partners:[ID], addVisits:[ID], addMonitors:[ID], addNodes:[ID], addDeployments:[ID], addIndividuals:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateCumulusForUpdating(id: ID!, name: String, geometry: Polygon, con_socio: Int , addCumulus_criteria:ID, removeCumulus_criteria:ID , addUnique_ecosystem:ID, removeUnique_ecosystem:ID   , addDevices:[ID], removeDevices:[ID] , addAssociated_partners:[ID], removeAssociated_partners:[ID] , addVisits:[ID], removeVisits:[ID] , addMonitors:[ID], removeMonitors:[ID] , addNodes:[ID], removeNodes:[ID] , addDeployments:[ID], removeDeployments:[ID] , addIndividuals:[ID], removeIndividuals:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateCumulusForDeletion(id: ID!): Boolean!
    validateCumulusAfterReading(id: ID!): Boolean!
    """
    cumulusZendroDefinition would return the static Zendro data model definition
    """
    cumulusZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addCumulus( name: String, geometry: Polygon, con_socio: Int , addCumulus_criteria:ID, addUnique_ecosystem:ID  , addDevices:[ID], addAssociated_partners:[ID], addVisits:[ID], addMonitors:[ID], addNodes:[ID], addDeployments:[ID], addIndividuals:[ID] , skipAssociationsExistenceChecks:Boolean = false): cumulus!
    updateCumulus(id: ID!, name: String, geometry: Polygon, con_socio: Int , addCumulus_criteria:ID, removeCumulus_criteria:ID , addUnique_ecosystem:ID, removeUnique_ecosystem:ID   , addDevices:[ID], removeDevices:[ID] , addAssociated_partners:[ID], removeAssociated_partners:[ID] , addVisits:[ID], removeVisits:[ID] , addMonitors:[ID], removeMonitors:[ID] , addNodes:[ID], removeNodes:[ID] , addDeployments:[ID], removeDeployments:[ID] , addIndividuals:[ID], removeIndividuals:[ID]  , skipAssociationsExistenceChecks:Boolean = false): cumulus!
    deleteCumulus(id: ID!): String!
    bulkAssociateCumulusWithCriteria_id(bulkAssociationInput: [bulkAssociationCumulusWithCriteria_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateCumulusWithCriteria_id(bulkAssociationInput: [bulkAssociationCumulusWithCriteria_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociateCumulusWithEcosystem_id(bulkAssociationInput: [bulkAssociationCumulusWithEcosystem_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateCumulusWithEcosystem_id(bulkAssociationInput: [bulkAssociationCumulusWithEcosystem_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;