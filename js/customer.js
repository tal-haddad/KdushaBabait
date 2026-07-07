const API_URL = "https://script.google.com/macros/s/AKfycbxOpbr75YkUvq47L2GFLbKFMocpe1bE2hQ5iWn_xMy4XcslhWlbQhMYctWpCQXsoJbs/exec";


const params = new URLSearchParams(window.location.search);

const id = params.get("id");

let currentClient = null;

fetch(API_URL + "?id=" + id)

.then(response => response.json())

.then(client => {
    
    currentClient = client;

    document.getElementById("name").textContent = client.name || "";

    document.getElementById("phone").textContent = client.phone || "";

    document.getElementById("order").textContent = client.order || "";

    document.getElementById("quantity").textContent = client.quantity || "";

    document.getElementById("pickupDate").textContent = client.pickupDate || "";

    document.getElementById("notes").textContent = client.notes || "";


})

.catch(error => {

    console.error("שגיאה בטעינת לקוח:", error);

});

function openImages(){

    let html = "";

    if (!currentClient || !currentClient.images) {
        html = "אין סריקות להצגה";
    }
    else {

        currentClient.images.forEach(image => {

            const url =
            "https://drive.google.com/thumbnail?id="
            + image.id
            + "&sz=w1200";


            html += `
                <div style="margin-bottom:20px;">
                    <img src="${url}" loading="lazy">
                    <div>${image.name}</div>
                </div>
            `;

        });

    }


    document.getElementById("images").innerHTML = html;

    document.getElementById("modal").style.display = "block";

}



function closeModal(){

    document.getElementById("modal").style.display = "none";

}

function openTakanon(){

    const url =
    "https://drive.google.com/file/d/1JwUsBVEDYzTM0QEj1Jzf-vvcWYabVsGK/preview";


    document.getElementById("takanon").innerHTML =
    `
    <iframe 
    src="${url}"
    style="width:100%;height:80vh;border:none;">
    </iframe>
    `;


    document.getElementById("takanonModal").style.display="block";

}



function openTeuda(){

    const url =
    "https://drive.google.com/thumbnail?id=1is7Zjm9T8sspWdwxwi_DousuKnTvvYVS&sz=w1200";


    document.getElementById("teuda").innerHTML =
    `
    <img 
    src="${url}" 
    loading="lazy"
    style="width:100%;border-radius:10px;">
    `;


    document.getElementById("teudaModal").style.display="block";

}

