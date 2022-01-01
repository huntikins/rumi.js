const dev = process.env.NODE_ENV !== 'production';

export const domain = dev ? 'http://localhost:3000' : process.env.DOMAIN;