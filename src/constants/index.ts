export const { REACT_APP_API_BASE: API_BASE } = process.env;
console.log('API_BASE: ', API_BASE);

// Cookie KEYNOTE
export const CK_USER: string = `userSD`

export const ROUTES = {
    // Open Routes
    default: `/`,
    signin: `/auth/signin`,
    signup: `/auth/signup`,
    forgotPassword: `/auth/forgot-password`,
    profile: `/profile`,
}