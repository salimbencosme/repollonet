export function saveContact(contactParam){

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


export function saveSubscribe(subscribeParam){

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


export default function ApiServices(){};
