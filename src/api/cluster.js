import fetch from 'utils/fetch';

export function addCluster(data) {
    return fetch({
        url: '/manage/cluster/save',
        method: 'post',
        data: data
    });
}

export function editCluster(data) {
    return fetch({
        url: '/cluster/update',
        method: 'put',
        data: data
    });
}

export function delCluster(clusterId, userId) {
    return fetch({
        url: '/cluster/delete/' + clusterId + '/' +userId,
        method: 'delete'
    });
}

export function listCluster(containPrivate) {
    return fetch({
        url: '/cluster/query/' + containPrivate,
        method: 'get'
    });
}