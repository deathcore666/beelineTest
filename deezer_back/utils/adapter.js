import axios from "axios";

const axiosInstance = axios.create();

const onResponseValid = (payload) => {
    return Promise.resolve(parsePayload(payload.data));
};

const onResponseInvalid = (payload) => {
    return Promise.reject(parsePayload(payload.response));
};


const parsePayload = (payload) => {
    try {
        return JSON.parse(payload);
    } catch (err) {
        return payload;
    }
};

const makeRequest = (method, url, data = {}, headers, isJson) => {
    let requestParams = {
        method,
        url,
        data,
        headers: {
            'Accept': 'application/json',
            ...headers
        }
    };
    if (method === 'GET' || method === 'PUT') {
        requestParams.params = data;
    }
    if (isJson) {
        requestParams.data = JSON.stringify(data);
    }
    return axiosInstance.request(requestParams)
        .then(onResponseValid)
        .catch(onResponseInvalid);

};

export const get = (url, params, headers) => makeRequest('GET', url, params, headers);

export const post = (url, data, headers, isJson) => makeRequest('POST', url, data, headers, isJson);

export const update = (url, data, headers) => makeRequest('PUT', url, data, headers);

export const patch = (url, data) => makeRequest('PATCH', url, data);

export const remove = (url, data = null, headers) => makeRequest('DELETE', url, data, headers);

export function getImageUrl(data, token) {
    return post('file-upload', data, token);
}