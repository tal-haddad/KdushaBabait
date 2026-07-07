const API_URL = "https://script.google.com/macros/s/AKfycbxOpbr75YkUvq47L2GFLbKFMocpe1bE2hQ5iWn_xMy4XcslhWlbQhMYctWpCQXsoJbs/exec";


const params = new URLSearchParams(window.location.search);

const id = params.get("id");


fetch(API_URL + "?id=" + id)

.then(response => response.json())

.then(client => {


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
