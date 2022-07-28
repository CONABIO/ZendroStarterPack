module.exports = `

    type file_count_ecosystem {
        id: Int
        delivery_date: Date
        audio_files: Int
        image_files: Int
        video_files: Int
        size: Int,
        cumulus_id: Int
        createdAt: DateTime
        updatedAt: DateTime
    }
    type ecosystem_files{
        id: ID
        ecosystem: String
        file_count_ecosystem: [file_count_ecosystem]
    }
    type Query {
        ecosystemFileCounts(ecosystem_id: ID!): ecosystem_files
    }
`;