console.log('Empezando app de prueba para hacer peticiones http con js.');
console.log('');
console.log('---------------------------------');
console.log('---- Coded by: Lucio Persano ----');
console.log('---------------------------------');
console.log('');

var weburl = '';
var input = document.getElementById('urlinput');
var rellenarweb = document.getElementById('rellenarweb');
var responseString = '';

function activar(){
    console.log('Activando...');

    axios({
        method: 'post',
        url: 'https://api.notion.com/v1/databases/60ae4711abbb48e48a57d37de9b53d7f/query',
        headers: {
            'Authorization': 'Bearer "secret_XsWgZnAqhPKYmsAEOZeVATqCPpdEhY4DEKIcjSveLZ9"',
            'Notion-Version': '2021-08-16',
            'Content-Type': 'application/json'
        },
        data: {
            filter: {
                property: 'index',
                checkbox: {
                    equals: true
                }
            }
        }

    })
     .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

    /*weburl = urlinput.value;
    if(weburl.substring(0, 8) == 'https://' && weburl.substring(8) != ''){
        console.log('Solcitando la web ' + weburl + ' para colocarla en el DOM');

        var Req = new XMLHttpRequest();
        Req.addEventListener('load', reqListener);
        Req.open('GET', weburl);
        Req.setRequestHeader('origin', 'https://tecnorubik.netlify.app')
        Req.send();
    } else {
        console.log('La url ingresada es incoorrecta.');
    }*/
}

