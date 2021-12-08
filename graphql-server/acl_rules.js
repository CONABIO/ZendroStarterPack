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
                    'calendar',
                    'cumulus',
                    'cumulus_criteria',
                    'deployment',
                    'device_catalog',
                    'ecosystem',
                    'file',
                    'individual',
                    'institution',
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
                    'calendar',
                    'cumulus',
                    'cumulus_criteria',
                    'deployment',
                    'device_catalog',
                    'ecosystem',
                    'file',
                    'individual',
                    'institution',
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