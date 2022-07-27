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
                    'annotations_geom_obs_type',
                    'calendar',
                    'cumulus',
                    'cumulus_criteria',
                    'delivered_files',
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
                    'role',
                    'role_to_user',
                    'pipeline_info',
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
                    'annotations_geom_obs_type',
                    'calendar',
                    'cumulus',
                    'cumulus_criteria',
                    'delivered_files',
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
                    'role',
                    'role_to_user',
                    'transect',
                    'user',
                    'visit',
                ],
                permissions: ['read']
            }]
        },
    ]
}