import fetch from 'utils/fetch';

export function listTopic() {
    // localhost:12508/topic/query/{all}/{userId}
    return fetch({
        url: '/topic/query/true/1',
        method: 'get',
    });
}

export default {
    listTopic
}