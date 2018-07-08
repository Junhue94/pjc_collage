
export const required = (value) => {
    if (!value) {
        return 'This field is required';
    }
    return undefined;
};

export const number = (value) => {
    if (value && Number.isNaN(Number(value))) {
        return 'Input must be a number';
    }
    return undefined;
};

export const email = (value) => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
    }
    return undefined;
};

export const minLength = min => (value) => {
    if (value && value.length < min) {
        return `Input must be at least ${min} characters`;
    }
    return undefined;
};

export const maxLength = max => (value) => {
    if (value && value.length > max) {
        return `Input must not exceed ${max} characters`;
    }
    return undefined;
};

export const minValue = min => (value) => {
    if (value && value < min) {
        return `Input must be at least ${min}`;
    }
    return undefined;
};

export const maxValue = max => (value) => {
    if (value && value > max) {
        return `Input must not exceed ${max}`;
    }
    return undefined;
};
