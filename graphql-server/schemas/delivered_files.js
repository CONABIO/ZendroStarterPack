module.exports = `
  type delivered_files{
    """
    @original-field
    """
    id: ID
    """
    @original-field
    
    """
    who_delivers: String

    """
    @original-field
    
    """
    reception_date: Date

    """
    @original-field
    
    """
    total_files: Int

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
    node_id: Int

    node_delivered_files(search: searchNodeInput): node
    
    
    """
    @record as base64 encoded cursor for paginated connections
    """
    asCursor: String!
}
type Delivered_filesConnection{
  edges: [Delivered_filesEdge]
  delivered_files: [delivered_files]
  pageInfo: pageInfo!
}

type Delivered_filesEdge{
  cursor: String!
  node: delivered_files!
}

  type VueTableDelivered_files{
    data : [delivered_files]
    total: Int
    per_page: Int
    current_page: Int
    last_page: Int
    prev_page_url: String
    next_page_url: String
    from: Int
    to: Int
  }
  enum delivered_filesField {
    id
    who_delivers
    reception_date
    total_files
    audio_files
    image_files
    video_files
    node_id
  }
  
  input searchDelivered_filesInput {
    field: delivered_filesField
    value: String
    valueType: InputType
    operator: GenericPrestoSqlOperator 
    search: [searchDelivered_filesInput]
  }

  input orderDelivered_filesInput{
    field: delivered_filesField
    order: Order
  }

  input bulkAssociationDelivered_filesWithNode_idInput{
    id: ID!
    node_id: ID!
  }

  type Query {
    delivered_files(search: searchDelivered_filesInput, order: [ orderDelivered_filesInput ], pagination: paginationInput! ): [delivered_files]
    readOneDelivered_files(id: ID!): delivered_files
    countDelivered_files(search: searchDelivered_filesInput ): Int
    vueTableDelivered_files : VueTableDelivered_files
    csvTableTemplateDelivered_files: [String]
    delivered_filesConnection(search:searchDelivered_filesInput, order: [ orderDelivered_filesInput ], pagination: paginationCursorInput! ): Delivered_filesConnection
    validateDelivered_filesForCreation( who_delivers: String, reception_date: Date, total_files: Int, audio_files: Int, image_files: Int, video_files: Int , addNode_delivered_files:ID   , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateDelivered_filesForUpdating(id: ID!, who_delivers: String, reception_date: Date, total_files: Int, audio_files: Int, image_files: Int, video_files: Int , addNode_delivered_files:ID, removeNode_delivered_files:ID    , skipAssociationsExistenceChecks:Boolean = false): Boolean!
    validateDelivered_filesForDeletion(id: ID!): Boolean!
    validateDelivered_filesAfterReading(id: ID!): Boolean!
  }

  type Mutation {
    addDelivered_files( who_delivers: String, reception_date: Date, total_files: Int, audio_files: Int, image_files: Int, video_files: Int , addNode_delivered_files:ID   , skipAssociationsExistenceChecks:Boolean = false): delivered_files!
    updateDelivered_files(id: ID!, who_delivers: String, reception_date: Date, total_files: Int, audio_files: Int, image_files: Int, video_files: Int , addNode_delivered_files:ID, removeNode_delivered_files:ID    , skipAssociationsExistenceChecks:Boolean = false): delivered_files!
    deleteDelivered_files(id: ID!): String!
    bulkAddDelivered_filesCsv: String!
    bulkAssociateDelivered_filesWithNode_id(bulkAssociationInput: [bulkAssociationDelivered_filesWithNode_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
    bulkDisAssociateDelivered_filesWithNode_id(bulkAssociationInput: [bulkAssociationDelivered_filesWithNode_idInput], skipAssociationsExistenceChecks:Boolean = false): String!
  }
`;