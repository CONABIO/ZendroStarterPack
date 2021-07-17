module.exports = `
  type physical_device{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    serial: String

    """
    @original-field
    
    """
    device_id: Int

    """
    @original-field
    
    """
    cumulus_id: Int

    """
    @original-field
    
    """
    created_at: DateTime

    device(search: searchDevice_catalogInput): device_catalog
  cumulus_device(search: searchCumulusInput): cumulus
    
    """
    @search-request
    """
    device_deploymentsFilter(search: searchDeploymentInput, order: [ orderDeploymentInput ], pagination: paginationInput!): [deployment]


    """
    @search-request
    """
    device_deploymentsConnection(search: searchDeploymentInput, order: [ orderDeploymentInput ], pagination: paginationCursorInput!): DeploymentConnection

    """
    @count-request
    """
    countFilteredDevice_deployments(search: searchDeploymentInput) : Int
  
    }
type Physical_deviceConnection{
  edges: [Physical_deviceEdge]
  physical_devices: [physical_device]
  pageInfo: pageInfo!
}

type Physical_deviceEdge{
  cursor: String!
  node: physical_device!
}

  type VueTablePhysical_device{
    data : [physical_device]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum physical_deviceField {
    id
    serial
    device_id
    cumulus_id
    created_at
  }
  input searchPhysical_deviceInput {
    field: physical_deviceField
    value: String
    valueType: InputType
    operator: Operator
    search: [searchPhysical_deviceInput]
  }

  input orderPhysical_deviceInput{
    field: physical_deviceField
    order: Order
  }

  input bulkAssociationPhysical_deviceWithDevice_idInput{
    id: ID!
    device_id: ID!
  }  input bulkAssociationPhysical_deviceWithCumulus_idInput{
    id: ID!
    cumulus_id: ID!
  }

  type Query {
    physical_devices(search: searchPhysical_deviceInput, order: [ orderPhysical_deviceInput ], pagination: paginationInput! ): [physical_device]
    readOnePhysical_device(id: ID!): physical_device
    countPhysical_devices(search: searchPhysical_deviceInput ): Int
    vueTablePhysical_device : VueTablePhysical_device
    csvTableTemplatePhysical_device: [String]
    physical_devicesConnection(search:searchPhysical_deviceInput, order: [ orderPhysical_deviceInput ], pagination: paginationCursorInput! ): Physical_deviceConnection
  }

  type Mutation {
    addPhysical_device( serial: String, created_at: DateTime , addDevice:ID, addCumulus_device:ID  , addDevice_deployments:[ID] , skipAssociationsExistenceChecks:Boolean = false): physical_device!
    updatePhysical_device(id: ID!, serial: String, created_at: DateTime , addDevice:ID, removeDevice:ID , addCumulus_device:ID, removeCumulus_device:ID   , addDevice_deployments:[ID], removeDevice_deployments:[ID]  , skipAssociationsExistenceChecks:Boolean = false): physical_device!
    deletePhysical_device(id: ID!): String!
    bulkAddPhysical_deviceCsv: String!
    bulkAssociatePhysical_deviceWithDevice_id(bulkAssociationInput: [bulkAssociationPhysical_deviceWithDevice_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociatePhysical_deviceWithDevice_id(bulkAssociationInput: [bulkAssociationPhysical_deviceWithDevice_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
bulkAssociatePhysical_deviceWithCumulus_id(bulkAssociationInput: [bulkAssociationPhysical_deviceWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociatePhysical_deviceWithCumulus_id(bulkAssociationInput: [bulkAssociationPhysical_deviceWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;