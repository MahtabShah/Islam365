let surahbtn = document.querySelector('.Allsurahbtn');

let switchSection = document.querySelector('.switchSection');


let parahbtn = document.querySelector('.parahbtn');

let surahSection = document.querySelector('.surahSection');


let Btns = document.querySelectorAll('.sticky span');
let activeBtn = Btns[0];
Btns[0].classList.add('activeBtn');

Btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (activeBtn) {
            activeBtn.classList.remove('activeBtn');
            btn.classList.add('activeBtn');

            document.querySelector(`.${activeBtn.attributes.id.textContent}`).style.display = 'none';

            document.querySelector(`.${btn.attributes.id.textContent}`).style.display = 'initial';
            

           
            activeBtn = btn;
        }
    })
})

