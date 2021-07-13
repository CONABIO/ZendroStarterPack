module.exports = `
  type device_catalog{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    brand: String

    """
    @original-field
    
    """
    model: String

    """
    @original-field
    
    """
    type: String

    """
    @original-field
    
    """
    serial_number: String

    """
    @original-field
    
    """
    cumulus_ids: [Int]

      
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
  
    """
    @search-request
    """
    cumulusFilter(search: searchCumulusInput, order: [ orderCumulusInput ], pagination: paginationInput!): [cumulus]


    """
    @search-request
    """
    cumulusConnection(search: searchCumulusInput, order: [ orderCumulusInput ], pagination: paginationCursorInput!): CumulusConnection

    """
    @count-request
    """
    countFilteredCumulus(search: searchCumulusInput) : Int
  
    }
type Device_catalogConnection{
  edges: [Device_catalogEdge]
  device_catalogs: [device_catalog]
  pageInfo: pageInfo!
}

type Device_catalogEdge{
  cursor: String!
  node: device_catalog!
}

  type VueTableDevice_catalog{
    data : [device_catalog]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum device_catalogField {
    id
    brand
    model
    type
    serial_number
    cumulus_ids
  }
  input searchDevice_catalogInput {
    field: device_catalogField
    value: String
    valueType: InputType
    operator: Operator
    search: [searchDevice_catalogInput]
  }

  input orderDevice_catalogInput{
    field: device_catalogField
    order: Order
  }



  type Query {
    device_catalogs(search: searchDevice_catalogInput, order: [ orderDevice_catalogInput ], pagination: paginationInput! ): [device_catalog]
    readOneDevice_catalog(id: ID!): device_catalog
    countDevice_catalogs(search: searchDevice_catalogInput ): Int
    vueTableDevice_catalog : VueTableDevice_catalog
    csvTableTemplateDevice_catalog: [String]
    device_catalogsConnection(search:searchDevice_catalogInput, order: [ orderDevice_catalogInput ], pagination: paginationCursorInput! ): Device_catalogConnection
  }

  type Mutation {
    addDevice_catalog( brand: String, model: String, type: String, serial_number: String   , addPhysical_devices:[ID], addCumulus:[ID] , skipAssociationsExistenceChecks:Boolean = false): device_catalog!
    updateDevice_catalog(id: ID!, brand: String, model: String, type: String, serial_number: String   , addPhysical_devices:[ID], removePhysical_devices:[ID] , addCumulus:[ID], removeCumulus:[ID]  , skipAssociationsExistenceChecks:Boolean = false): device_catalog!
    deleteDevice_catalog(id: ID!): String!
    bulkAddDevice_catalogCsv: String!
      }
`;