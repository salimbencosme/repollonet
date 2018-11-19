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

export function countPost(type_param) {
    return firebase.database().ref('info/').orderByChild('type').equalTo(type_param);
};

export function countActiveInfo(infoData){
    var count = 0;
    for (var key in infoData) {
        if(infoData[key].active === true){
            count++;
        }
    }
    return count;
};

export function getLastInfo(infoData){
    var lastInfoData = {};
    for (var key in infoData) {
       lastInfoData = infoData[key];
    }
    return lastInfoData;
};

export default function ApiServices() { };
