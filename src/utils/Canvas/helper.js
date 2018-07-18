import moment from 'moment';
import uuidv4 from 'uuid/v4';

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

export const defaulIText = {
    text: 'Type something meaningful...',
    options: {
        left: 100,
        top: 300,
        fill: '#000000',
    },
};

export const defaultImage = {
    left: 500,
    top: 300,
    angle: 0,
    opacity: 1,
};

export const generateImageKey = () => {
    const timestamp = moment().format('x');
    const uuid = uuidv4();
    return `${timestamp}_${uuid}`;
};
