import axios from 'axios';

const dataURLRegex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i

export const downloadFaviconFromUrl = async (url) => {
    try {
        if(url.match(dataURLRegex) && url.match(dataURLRegex)[1].startsWith("image/")) {
            return url;
        } else {
            const res = await axios.get(url, { responseType: 'arraybuffer' })

            let buffer = Buffer.from(res.data, 'binary');
        
            const favicon = `data:${res.headers['content-type']};base64,${buffer.toString('base64')}`
            
            return favicon;
        }
    } catch(error) {
        console.log(error)
        return null;
    }
}