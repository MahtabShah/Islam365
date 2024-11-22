const sections = document.querySelectorAll(".ayah");

for (let i = 0; i < sections.length; i++) {



    let option = document.createElement('div');
    option.classList.add('ayah-option');
    option.innerHTML = `<span class="copy">copy</span>
                    <span class="translate">translate</span>
                    <span class="report">report</span>
                    <span class="font">fontsize</span>`;

    sections[i].append(option);
}

let iframes = document.querySelectorAll('iframe');

iframes.forEach(iframe => {

    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 50 + 'px';


})


setInterval(() => {

    iframes.forEach(iframe => {

        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 50 + 'px';


    })
}, 0);