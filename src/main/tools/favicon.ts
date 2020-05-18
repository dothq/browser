import axios from 'axios';
import icoToPng from 'ico-to-png';
import sizeOf from 'buffer-image-size';

export const downloadFaviconFromUrl = async (url) => {
    const res = await axios.get(url, { responseType: 'arraybuffer' })

    const mimeType = res.headers['content-type'];

    let buffer = Buffer.from(res.data, 'binary');

    console.log(mimeType)

    if(res.headers['content-type'] == "image/x-icon") {
        res.headers['content-type'] = "image/png";

        const { width } = sizeOf(buffer);

        const convertedBuffer = await icoToPng(buffer, width);

        buffer = convertedBuffer;
    }

    return { buffer, mimeType }
}