module.exports = {
    aclRules: [
        //administrator role permission
        {
            roles: 'admin',
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
            roles: 'partner',
            allows: [{
                resources: [
                    'calendar',
                    'cumulus',
                    'cumulus_criteria',
                    'deployment',
                    'device_catalog',
                    'ecosystem',
                    'institution',
                    'monitor',
                    'node',
                    'physical_device',
                    'role',
                    'role_to_user',
                    'user',
                    'visit',
                ],
                permissions: ['create', 'update', 'delete', 'search']
            }]
        },

        {
            roles: 'monitor',
            allows: [{
                resources: [
                    'calendar',
                    'cumulus',
                    'cumulus_criteria',
                    'deployment',
                    'device_catalog',
                    'ecosystem',
                    'institution',
                    'monitor',
                    'node',
                    'physical_device',
                    'role',
                    'role_to_user',
                    'user',
                    'visit',
                ],
                permissions: ['read']
            }]
        }
    ]
}