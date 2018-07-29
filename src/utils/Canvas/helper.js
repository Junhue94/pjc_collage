export const defaultCanvas = {
    width: 1120,
    height: 630,
};

export const defaultCircle = {
    radius: 50,
    fill: '#f54043',
    top: 100,
    left: 100,
};

export const defaultRectangle = {
    left: 300,
    top: 100,
    fill: '#8421ca',
    width: 100,
    height: 100,
};

export const defaultTriangle = {
    width: 100,
    height: 100,
    fill: '#0ebf09',
    left: 500,
    top: 100,
};

export const defaultText = {
    text: 'Type something meaningful...',
    options: {
        left: 100,
        top: 300,
        fill: '#000000',
    },
};

export const defaultImage = {
    angle: 0,
    opacity: 1,
};

export const defaultCollage = {
    format: 'png',
    left: 0,
    top: 0,
    width: 1120,
    height: 630,
};

export const dataURItoBlob = (dataURI) => {
    const binary = atob(dataURI.split(',')[1]);
    const array = [];
    for (let i = 0; i < binary.length; i += 1) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/png' });
};
