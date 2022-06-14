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
                    'annotation',
                    'calendar',
                    'cumulus',
                    'cumulus_criteria',
                    'delivered_files',
                    'deployment',
                    'device_catalog',
                    'ecosystem',
                    'file',
                    'individual',
                    'institution',
                    'model_data',
                    'monitor',
                    'node',
                    'physical_device',
                    'role',
                    'role_to_user',
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
                    'annotation',
                    'calendar',
                    'cumulus',
                    'cumulus_criteria',
                    'delivered_files',
                    'deployment',
                    'device_catalog',
                    'ecosystem',
                    'file',
                    'individual',
                    'institution',
                    'model_data',
                    'monitor',
                    'node',
                    'physical_device',
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