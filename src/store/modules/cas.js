import {login} from 'api/login';
import Cookies from 'js-cookie';

const cas = {
    casData:{
        token: Cookies.get('token'),
    },

    mutations: {
        SET_TOKEN: (casData, data) => {
            casData.token = data.data;
            console.log("here is set token: ", casData.token);
        }
    },

    getters:{
        GetCasToken(){
            return this.casData.token;
        }

    },

    actions: {
        LoginCas({commit},ticket) {
            return new Promise((resolve, reject) => {
                login(ticket).then(response => {
                    //commit('SET_TOKEN', response.data);
                    Cookies.set('token',response.data.data);
                    localStorage.setItem("token",response.data.data);
                    resolve();
                }).catch(error => {
                    console.log("fetch topics error", error);
                    reject();
                });
            });
        },
    }
}

export default cas;