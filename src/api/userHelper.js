//save login response > (user's name and token) to session storage
export const authenticate = (response, next) => {
    if (window !== 'undefined') {
        // console.log('authenticate', response.user.username)
        sessionStorage.setItem('token', JSON.stringify(response.token));
        sessionStorage.setItem('username', JSON.stringify(response.user.username));
    }
    next();
};

//access access name from session storage
export const getToken = () => {
    if (window !== 'undefined') {
        if (sessionStorage.getItem('token')) {
            return JSON.parse(sessionStorage.getItem('token'));
        }
        else {
            return false;
        }
    }
};

//access user's name from session storage
export const getUser = () => {
    if (window !== 'undefined') {
        if (sessionStorage.getItem('username')) {
            return JSON.parse(sessionStorage.getItem('username'));
        }
        else {
            return false;
        }
    }
};


//remove token from session storage
export const logout = (next) => {
    if (window !== 'undefined') {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
    }
    next();
};
