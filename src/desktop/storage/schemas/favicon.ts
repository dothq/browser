export const faviconSchema = {
    keyCompression: true,
    version: 0,
    type: 'object',
    properties: {
        url: {
            type: 'string'
        },
        base64: {
            type: 'string'
        }
    },
    required: ['url', 'base64']
};