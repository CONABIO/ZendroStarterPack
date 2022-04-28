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
    type: String

      
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
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
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

  enum device_catalogField {
    id
    brand
    type
  }
  
  input searchDevice_catalogInput {
    field: device_catalogField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
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
    csvTableTemplateDevice_catalog: [String]
    device_catalogsConnection(search:searchDevice_catalogInput, order: [ orderDevice_catalogInput ], pagination: paginationCursorInput! ): Device_catalogConnection
    validateDevice_catalogForCreation( brand: String, type: String   , addPhysical_devices:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateDevice_catalogForUpdating(id: ID!, brand: String, type: String   , addPhysical_devices:[ID], removePhysical_devices:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateDevice_catalogForDeletion(id: ID!): Boolean!
    validateDevice_catalogAfterReading(id: ID!): Boolean!
    """
    device_catalogsZendroDefinition would return the static Zendro data model definition
    """
    device_catalogsZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addDevice_catalog( brand: String, type: String   , addPhysical_devices:[ID] , skipAssociationsExistenceChecks:Boolean = false): device_catalog!
    updateDevice_catalog(id: ID!, brand: String, type: String   , addPhysical_devices:[ID], removePhysical_devices:[ID]  , skipAssociationsExistenceChecks:Boolean = false): device_catalog!
    deleteDevice_catalog(id: ID!): String!
      }
`;