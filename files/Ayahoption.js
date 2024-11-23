const sections = document.querySelectorAll(".ayah");

for (let i = 0; i < sections.length; i++) {



    let option = document.createElement('div');
    option.classList.add('ayah-option');
    option.innerHTML = `<span class="copy">copy</span>
            <span class="translate">translate</span>
            <span class="report">report</span>
            <span class="font">fontsize</span>`;

    let BtnCopy = option.querySelector('.copy');
    let BtnTranslate = option.querySelector('.translate');
    let BtnReport = option.querySelector('.report');

    sections[i].append(option);


    BtnCopy.addEventListener("click", function () {
        // Select both Arabic and English text
        BtnCopy.parentElement.parentElement.querySelectorAll('p')


        console.log("each btn");








        const arabicText = "" || BtnCopy.parentElement.parentElement.querySelectorAll('p')[0].innerText


        const englishText = BtnCopy.parentElement.parentElement.querySelectorAll('p')[1].innerText


        // Combine the texts
        const combinedText = `${arabicText}\n${englishText}`;
        console.log("combinr text");

        // Copy to clipboard
        navigator.clipboard.writeText(combinedText).then(() => {
            // alert("Text copied to clipboard!");
            BtnCopy.innerText = 'copied';

            setTimeout(()=>{
            BtnCopy.innerText = 'copy';} , 1000);
                

        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    });

    BtnTranslate.addEventListener('click' , ()=>{
        BtnTranslate.parentElement.parentElement.querySelectorAll('p')


        // console.log("each btn");

        const englishText = BtnTranslate.parentElement.parentElement.querySelectorAll('p')[1].innerText;


        // document.getElementById("translateButton").addEventListener("click", function() {
            // const container = document.getElementById("textContainer");
            // const originalText = container.innerText;
        
            // Google Translate API example (replace with your API key)
            const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`;
            
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    q: englishText,
                    target: "hi" // Translate to English
                })
            })
            .then(response => response.json())
            .then(data => {
                const translatedText = data.data.translations[0].translatedText;
                englishText.innerText = translatedText;
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Translation failed! || attach your API Key");
            });
        // });
        

    })


    BtnReport.addEventListener('click' , ()=>{
        let text = document.createElement('textarea');

        // BtnReport.parentElement.parentElement.querySelectorAll('p')[0].style.display = 'none';
        // BtnReport.parentElement.parentElement.querySelectorAll('p')[1].style.display = 'none';
        BtnReport.parentElement.parentElement.append(text);
        text.classList.add('reporttext');
        text.placeholder = "Report here, write what is the error!"


    })


}
