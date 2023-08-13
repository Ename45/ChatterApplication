const baseUrl = 'http://localhost:3000/api/1.0/chatter'


//Auth
export const signUpUrl = `${baseUrl}/user-auth/register`;
export const codeConfirmationUrl = (email) => `${baseUrl}/user-auth/code-confirmation/${email}`
export const loginUrl = `${baseUrl}/user-auth/login`