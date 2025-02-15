module.exports = `
  type cumulus_criteria{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    name: String

      
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
  
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type Cumulus_criteriaConnection{
  edges: [Cumulus_criteriaEdge]
  cumulus_criteria: [cumulus_criteria]
  pageInfo: pageInfo!
}

type Cumulus_criteriaEdge{
  cursor: String!
  node: cumulus_criteria!
}

  enum cumulus_criteriaField {
    id
    name
  }
  
  input searchCumulus_criteriaInput {
    field: cumulus_criteriaField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchCumulus_criteriaInput]
  }

  input orderCumulus_criteriaInput{
    field: cumulus_criteriaField
    order: Order
  }



  type Query {
    cumulus_criteria(search: searchCumulus_criteriaInput, order: [ orderCumulus_criteriaInput ], pagination: paginationInput! ): [cumulus_criteria]
    readOneCumulus_criteria(id: ID!): cumulus_criteria
    countCumulus_criteria(search: searchCumulus_criteriaInput ): Int
    csvTableTemplateCumulus_criteria: [String]
    cumulus_criteriaConnection(search:searchCumulus_criteriaInput, order: [ orderCumulus_criteriaInput ], pagination: paginationCursorInput! ): Cumulus_criteriaConnection
    validateCumulus_criteriaForCreation( name: String   , addCumulus:[ID] , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateCumulus_criteriaForUpdating(id: ID!, name: String   , addCumulus:[ID], removeCumulus:[ID]  , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateCumulus_criteriaForDeletion(id: ID!): Boolean!
    validateCumulus_criteriaAfterReading(id: ID!): Boolean!
    """
    cumulus_criteriaZendroDefinition would return the static Zendro data model definition
    """
    cumulus_criteriaZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addCumulus_criteria( name: String   , addCumulus:[ID] , skipAssociationsExistenceChecks:Boolean = false): cumulus_criteria!
    updateCumulus_criteria(id: ID!, name: String   , addCumulus:[ID], removeCumulus:[ID]  , skipAssociationsExistenceChecks:Boolean = false): cumulus_criteria!
    deleteCumulus_criteria(id: ID!): String!
      }
`;