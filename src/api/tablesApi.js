import axios from "axios";

export const tablesApi = {
    getNew() {
        return axios({
            url: `http://test.digift.services.lenvendo.ru/b2bPlatform/v1/rg/requests/new/1`,
            method: "get",
            withCredentials: true
        }).then(response => {
            return response.data;
        });
    },
    getCompleted() {
        return axios({
            url: `http://test.digift.services.lenvendo.ru/b2bPlatform/v1/rg/requests/completed/1`,
            method: "get",
            withCredentials: true
        }).then(response => {
            return response.data;
        });
    },
    getFailed() {
        return axios({
            url: `http://test.digift.services.lenvendo.ru/b2bPlatform/v1/rg/requests/failed/1`,
            method: "get",
            withCredentials: true
        }).then(response => {
            return response.data;
        });
    },
    getExecuted() {
        return axios({
            url: `http://test.digift.services.lenvendo.ru/b2bPlatform/v1/rg/requests/executed/1`,
            method: "get",
            withCredentials: true
        }).then(response => {
            return response.data;
        });
    },
    getCanceled() {
        return axios({
            url: `http://test.digift.services.lenvendo.ru/b2bPlatform/v1/rg/requests/canceled/1`,
            method: "get",
            withCredentials: true
        }).then(response => {
            return response.data;
        });
    }
};
