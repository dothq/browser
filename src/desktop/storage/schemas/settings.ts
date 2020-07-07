export const settingsSchema = {
    version: 0,
    type: 'object',
    properties: {
        key: {
            type: 'string',
            primary: true
        },
        value: {
            type: 'any'
        }
    },
    required: ['key', 'value']
};