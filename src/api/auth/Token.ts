/**
 * @author 이호연
 */

export const setAuthToken = (token: string) => {
    localStorage.setItem('token', token);
}

export const getAuthToken = () => {
    return localStorage.getItem('token');
}

export const removeAuthToken = () => {
    localStorage.removeItem('token');
}

export const isAuthenticated = () => {
    return getAuthToken() !== null;
}