import axios from 'axios';

axios.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    let errorCode = ['403', '31', '32', '33', '500'];
    if (errorCode.indexOf(response.data.resultCode) > -1) {

    }
    return response;
}, error => {
    return Promise.reject(error);
});

export const http = (param) => {
    const webServer = '';

    let httpConfig = {
        baseURL: webServer,
        url: param.url,
        method: param.method || 'get',
        headers: {}
    };

    if (param.body) {
        httpConfig.data = param.data;
    } else {
        httpConfig.params = param.data;
    }

    return axios(httpConfig);

};
