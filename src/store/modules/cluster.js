import {listCluster, addCluster, editCluster, delCluster} from 'api/cluster';
import user from "./user";

const state = {
    clusterList: [],
}

const mutations = {
    SET_CLUSTER_LIST: (clusterData, data) => {
        clusterData.clusterList = data.data;
        console.log("here is set Cluster: ", clusterData.clusterList);
    }
}

const actions = {
    ListCluster({commit}, containPrivate) {
        return new Promise((resolve, reject) => {
            listCluster(containPrivate).then(response => {
                commit('SET_CLUSTER_LIST', response.data);
                resolve();
            }).catch(error => {
                console.log("fetch clusters error", error);
                reject();
            });
        });
    },
    AddCluster({commit}, data) {
        return new Promise((resolve, reject) => {
            addCluster(data).then(response => {
                resolve();
            }).catch(error => {
                console.log("add clusters error", error);
                reject();
            });
        });
    },
    EditCluster({commit}, data) {
        return new Promise((resolve, reject) => {
            editCluster(data).then(response => {
                resolve();
            }).catch(error => {
                console.log("edit clusters error", error);
                reject();
            });
        });
    },
    DelCluster({commit}, params) {
        return new Promise((resolve, reject) => {
            delCluster(params.clusterId, params.userId).then(response => {
                resolve();
            }).catch(error => {
                console.log("del clusters error", error);
                reject();
            });
        });
    }
}

export default {
    /*namespaced: true,*/
    state,
    actions,
    mutations
}