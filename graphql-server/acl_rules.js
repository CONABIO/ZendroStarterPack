module.exports = {
    aclRules: [
        //administrator role permission
        {
            roles: 'administrator',
            allows: [{
                resources: [
                    'role',
                    'user',
                    'role_to_user',
                ],
                permissions: '*'
            }]
        },

        // model and adapter permissions
        {
            roles: 'editor',
            allows: [{
                resources: [
                    'annotations_method',
                    'annotations_geom',
                    'annotations_media',
                    'calendar',
                    'cumulus',
                    'cumulus_criteria',
                    'deployment',
                    'device_catalog',
                    'ecosystem',
                    'file',
                    'file_count',
                    'individual',
                    'institution',
                    'monitor',
                    'node',
                    'physical_device',
                    'pipeline_info',
                    'processed_files',
                    'transect',
                    'user',
                    'visit',
                ],
                permissions: ['create', 'update', 'delete', 'search']
            }]
        },

        {
            roles: 'reader',
            allows: [{
                resources: [
                    'annotations_method',
                    'annotations_geom',
                    'annotations_media',
                    'calendar',
                    'cumulus',
                    'cumulus_criteria',
                    'deployment',
                    'device_catalog',
                    'ecosystem',
                    'file',
                    'file_count',
                    'individual',
                    'institution',
                    'monitor',
                    'node',
                    'physical_device',
                    'pipeline_info',
                    'processed_files',
                    'transect',
                    'user',
                    'visit',
                ],
                permissions: ['read']
            }]
        },
    ]
}