import axios from 'axios';

export const downloadFaviconFromUrl = async (url) => {
    const res = await axios.get(url, { responseType: 'arraybuffer' })

    let buffer = Buffer.from(res.data, 'binary');

    const favicon = `data:${res.headers['content-type']};base64,${buffer.toString('base64')}`
    
    return favicon;
}