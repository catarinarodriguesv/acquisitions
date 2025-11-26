export const cookies = {
  getOptions: () => {
    return {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
      maxAge: 15 * 60 * 1000, // 15 minutes
    };
  },

  set: (res, name, value, options = {}) => {
    const cookieOptions = { ...cookies.getOptions(), ...options };
    res.cookie(name, value, cookieOptions);
  },

  clear: (res, name) => {
    res.clearCookie(name, cookies.getOptions());
  },

  get: (req, name) => {
    return req.cookies[name];
  },
};
