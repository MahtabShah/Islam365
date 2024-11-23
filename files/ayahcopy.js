iframes = document.querySelectorAll('iframe');

iframes.forEach(iframe => {


    // iFrame select karna
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document; // iFrame ka document

    console.log("iframedoc");

    let copyBtns = iframeDoc.querySelectorAll('.copy');

    console.log(copyBtns[0] , " " + copyBtns[1]);


    copyBtns.forEach(Btn => {

        console.log("enter btn");

        Btn.addEventListener("click", function () {
            // Select both Arabic and English text
            Btn.parentElement.parentElement.querySelectorAll('p')


            console.log("each btn");








            const arabicText = "" || Btn.parentElement.parentElement.querySelectorAll('p')[0].innerText


            const englishText = Btn.parentElement.parentElement.querySelectorAll('p')[1].innerText


            // Combine the texts
            const combinedText = `${arabicText}\n${englishText}`;
            console.log("combinr text");

            // Copy to clipboard
            navigator.clipboard.writeText(combinedText).then(() => {
                alert("Text copied to clipboard!");

            }).catch(err => {
                console.error("Failed to copy text: ", err);
            });
        });
    })


});


