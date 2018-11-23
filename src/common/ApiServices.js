import firebase from '../common/firebase';

export function saveContact(contactParam) {

    fetch('https://repollonet-74f4c.firebaseio.com/contact.json', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                content: contactParam.content,
                date_created: contactParam.date_created,
                email: contactParam.email,
                fullname: contactParam.fullname,
                title: contactParam.title
            }
        )
    }).then(res => res.json)
        .then(res => res.json);
};


export function saveSubscribe(subscribeParam) {

    fetch('https://repollonet-74f4c.firebaseio.com/subcribe.json', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                date_created: subscribeParam.date_created,
                email: subscribeParam.email
            }
        )
    }).then(res => res.json)
        .then(res => res.json);
};


export function aboutInfo() {

    return fetch('https://repollonet-74f4c.firebaseio.com/aboutus.json', {
        method: 'get',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(results => { return results.json() })
        .then(data => {
            var aboutData = {};
            for (var key in data) {
                aboutData = {
                    "content": data[key].content,
                    "pic": data[key].pic,
                    "title": data[key].title
                }
            }
            return aboutData;
        });
};

export function writersInfo() {

    return fetch('https://repollonet-74f4c.firebaseio.com/user.json', {
        method: 'get',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(results => { return results.json() })
        .then(data => {
            var writersData = [];
            for (var key in data) {
                writersData.push(
                    {
                        "description": data[key].description,
                        "email": data[key].email,
                        "fullname": data[key].firstname + ' ' + data[key].lastname,
                        "phones": data[key].phones,
                        "pic": data[key].pic,
                    }
                );
            }
            return writersData;
        });
};

export function getPostByType(type_param) {
    return firebase.database().ref('info/').orderByChild('type').equalTo(type_param);
};


export function getPostAllPost() {
    return firebase.database().ref('info/').orderByChild('type');
};

export function getPostById(id) {
    return firebase.database().ref('info/').child(id);
};

export function countActiveInfo(infoData) {
    var count = 0;
    for (var key in infoData) {
        if (infoData[key].active === true) {
            count++;
        }
    }
    return count;
};

export function getLastInfo(infoData) {
    var lastInfoData = {};
    for (var key in infoData) {
        if (infoData[key].active === true) {
            lastInfoData = {
                "id": key,
                "content": infoData[key].content,
                "date_cretated": infoData[key].date_created,
                "date_lastviewed": infoData[key].data_lastviewed,
                "ingredients": infoData[key].ingredients,
                "liked": infoData[key].liked,
                "pic": infoData[key].pic,
                "title": infoData[key].title,
                "type": infoData[key].type,
                "user": infoData[key].user,
                "viewed": infoData[key].viewed,
                "video": infoData[key].video,
                "subtype": infoData[key].subtype
            };
        }
    }
    return lastInfoData;
};

export function getLastsInfo(infoData, quantity) {
    var lastInfoData = [];
    var cont = 0;
    for (var key in infoData) {
        if (infoData[key].active === true) {
            if (cont < quantity) {
                lastInfoData.push(
                    {
                        "id": key,
                        "content": infoData[key].content,
                        "date_cretated": infoData[key].date_created,
                        "date_lastviewed": infoData[key].data_lastviewed,
                        "ingredients": infoData[key].ingredients,
                        "liked": infoData[key].liked,
                        "pic": infoData[key].pic,
                        "title": infoData[key].title,
                        "type": infoData[key].type,
                        "user": infoData[key].user,
                        "viewed": infoData[key].viewed,
                        "video": infoData[key].video,
                        "subtype": infoData[key].subtype
                    }
                );
                cont++;
            }
        }
    }
    return lastInfoData;
};

export function getPostInfo(infoData, type) {
    var lastInfoData = [];
    for (var key in infoData) {
        if (infoData[key].active === true) {
            if (type === 'all') {
                lastInfoData.push(
                    {
                        "id": key,
                        "content": infoData[key].content,
                        "date_cretated": infoData[key].date_created,
                        "date_lastviewed": infoData[key].data_lastviewed,
                        "ingredients": infoData[key].ingredients,
                        "liked": infoData[key].liked,
                        "pic": infoData[key].pic,
                        "title": infoData[key].title,
                        "type": infoData[key].type,
                        "user": infoData[key].user,
                        "viewed": infoData[key].viewed,
                        "video": infoData[key].video,
                        "subtype": infoData[key].subtype
                    }
                );
            } else {
                if (infoData[key].type === type) {
                    lastInfoData.push(
                        {
                            "id": key,
                            "content": infoData[key].content,
                            "date_cretated": infoData[key].date_created,
                            "date_lastviewed": infoData[key].data_lastviewed,
                            "ingredients": infoData[key].ingredients,
                            "liked": infoData[key].liked,
                            "pic": infoData[key].pic,
                            "title": infoData[key].title,
                            "type": infoData[key].type,
                            "user": infoData[key].user,
                            "viewed": infoData[key].viewed,
                            "video": infoData[key].video,
                            "subtype": infoData[key].subtype
                        }
                    );
                }
            }
        }
    }
    return lastInfoData;
};

export default function ApiServices() { };
