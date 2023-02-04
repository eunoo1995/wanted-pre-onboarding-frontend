import axios from 'axios';
import { getAuthToken } from '../jwt/authToken';

axios.defaults.baseURL = 'https://pre-onboarding-selection-task.shop/';

axios.defaults.headers.common['Authorization'] = `Bearer ${getAuthToken()}`;

export default axios;
