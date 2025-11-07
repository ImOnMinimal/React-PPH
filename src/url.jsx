let http_origin = new URL(window.location.href);

http_origin = http_origin.protocol + '//' + http_origin.hostname;
let url = '';
if(http_origin === "https://cyberblogdota.ru"){  
    url = 'https://cyberblogdota.ru/';
}
else if(http_origin === "http://localhost"){
    url = 'http://localhost:3000/';
}

// Produciton
// const url = 'https://cyberblogdota.ru/';

// // Development
// const url = 'http://localhost:3000/';

export default url ;
