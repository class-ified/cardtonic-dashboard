import instance from './instance';



export const loginUser = (data) => {
  return instance.post('/auth/login', data).then(res => res.data.user);
};

export const register = (data) => {
  return instance.post('/auth/signup', data).then(res => res.data);
};
export const resetPassword = (data) => {
  return instance.post('/auth/forgot-password', data).then(res => res.data);
};

export const resendVerificationMail = (data) => {
  return instance
    .post('/auth/resend-verification-mail', data)
    .then(res => res.data);
};
