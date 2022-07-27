module.exports = `
  type file_count{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    delivery_date: Date

    """
    @original-field
    
    """
    audio_files: Int

    """
    @original-field
    
    """
    image_files: Int

    """
    @original-field
    
    """
    video_files: Int

    """
    @original-field
    
    """
    size: Int

    """
    @original-field
    
    """
    cumulus_id: Int

    cumulus_files(search: searchCumulusInput): cumulus
    
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type File_countConnection{
  edges: [File_countEdge]
  file_counts: [file_count]
  pageInfo: pageInfo!
}

type File_countEdge{
  cursor: String!
  node: file_count!
}

  enum file_countField {
    id
    delivery_date
    audio_files
    image_files
    video_files
    size
    cumulus_id
  }
  
  input searchFile_countInput {
    field: file_countField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchFile_countInput]
  }

  input orderFile_countInput{
    field: file_countField
    order: Order
  }

  input bulkAssociationFile_countWithCumulus_idInput{
    id: ID!
    cumulus_id: ID!
  }

  type Query {
    file_counts(search: searchFile_countInput, order: [ orderFile_countInput ], pagination: paginationInput! ): [file_count]
    readOneFile_count(id: ID!): file_count
    countFile_counts(search: searchFile_countInput ): Int
    csvTableTemplateFile_count: [String]
    file_countsConnection(search:searchFile_countInput, order: [ orderFile_countInput ], pagination: paginationCursorInput! ): File_countConnection
    validateFile_countForCreation( delivery_date: Date, audio_files: Int, image_files: Int, video_files: Int, size: Int , addCumulus_files:ID   , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateFile_countForUpdating(id: ID!, delivery_date: Date, audio_files: Int, image_files: Int, video_files: Int, size: Int , addCumulus_files:ID, removeCumulus_files:ID    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateFile_countForDeletion(id: ID!): Boolean!
    validateFile_countAfterReading(id: ID!): Boolean!
    """
    file_countsZendroDefinition would return the static Zendro data model definition
    """
    file_countsZendroDefinition: GraphQLJSONObject
  }

  type Mutation {
    addFile_count( delivery_date: Date, audio_files: Int, image_files: Int, video_files: Int, size: Int , addCumulus_files:ID   , skipAssociationsExistenceChecks:Boolean = false): file_count!
    updateFile_count(id: ID!, delivery_date: Date, audio_files: Int, image_files: Int, video_files: Int, size: Int , addCumulus_files:ID, removeCumulus_files:ID    , skipAssociationsExistenceChecks:Boolean = false): file_count!
    deleteFile_count(id: ID!): String!
    bulkAssociateFile_countWithCumulus_id(bulkAssociationInput: [bulkAssociationFile_countWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateFile_countWithCumulus_id(bulkAssociationInput: [bulkAssociationFile_countWithCumulus_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;