import axios from 'axios';

export const login = async (email, password) => {
    const response = await axios.post('YOUR_LARAVEL_API_ENDPOINT/login', {
        email: email,
        password: password
    });

    const token = response.data.token;
    localStorage.setItem('authToken', token);
}

export const setAuthToken = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`;
}

export const logout = () => {
    axios.post('YOUR_LARAVEL_API_ENDPOINT/logout');
    localStorage.removeItem('authToken');
}
