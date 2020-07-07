export const historySchema = {
    keyCompression: true,
    version: 0,
    type: 'object',
    properties: {
        id: {
            type: 'string',
            primary: true
        },
        url: {
            type: 'string'
        },
        title: {
            type: 'string'
        },
        dateVisited: {
            type: 'number'
        }
    },
    required: ['id', 'url', 'dateVisited']
};