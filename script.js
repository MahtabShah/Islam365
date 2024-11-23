
let iframes = document.querySelectorAll('iframe');

iframes.forEach(iframe => {

    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 50 + 'px';


})


setInterval(() => {

    iframes.forEach(iframe => {

        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 50 + 'px';


    })
}, 0);

