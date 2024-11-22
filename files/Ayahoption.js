const sections = document.querySelectorAll(".ayah");

for (let i = 0; i < sections.length; i++) {



    let option = document.createElement('div');
    option.classList.add('ayah-option');
    option.innerHTML = `<span>copy</span>
            <span>translate</span>
            <span>report</span>
            <span>fontsize</span>`;

    sections[i].append(option);
}