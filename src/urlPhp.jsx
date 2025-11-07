let http_origin = new URL(window.location.href);

http_origin = http_origin.protocol + '//' + http_origin.hostname;
console.log(http_origin);

let urlPhp = '';
if (http_origin === "https://cyberblogdota.ru"){  
    urlPhp = 'https://cyberblogdota.ru/php/';
}
if(http_origin === "http://localhost"){
    urlPhp = 'http://pph/';
}

// // Production
// const urlPhp = 'https://cyberblogdota.ru/php/';

// // Development
// const urlPhp = 'http://localhost/';

export default urlPhp ;
