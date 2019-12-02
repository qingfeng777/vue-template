import {listTopic} from 'api/topic';


const topic = {
    topicData:{
        topicList: []
    },

    mutations: {
        SET_TOPIC_LIST: (topicData, data) => {
            topicData.topicList = data.data;
            console.log("here is set topic: ", topicData.topicList);
        }
    },

    actions: {
        ListTopic({commit}) {
            return new Promise((resolve, reject) => {

                listTopic().then(response => {
                    commit('SET_TOPIC_LIST', response.data);
                    resolve();
                }).catch(error => {
                    console.log("fetch topics error", error);
                    reject();
                });
            });
        },
    }
}

export default topic;