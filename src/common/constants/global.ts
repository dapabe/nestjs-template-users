export const isDevelopment = ['local', 'development'].some((x) =>
  x.includes(process.env.NODE_ENV),
);
