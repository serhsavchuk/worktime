export function createId() {
    const timestamp = Date.now();
    const randomPart = Math.random().toString(36).substring(2, 8);
    return `id${timestamp}${randomPart}`;
};

