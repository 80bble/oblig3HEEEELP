// Function to send ticket information to the server
function sendTicketInfo_java() {
    let isValid = true; // A flag to determine if the form is valid /*testcoomit*/

    const filmSelect = document.getElementById("choosefilm");
    const film = filmSelect.value;
    const filmValidationMessage = document.getElementById("filmValidationMessage");

    // Clear previous validation messages
    filmValidationMessage.innerText = "";
    document.getElementById("ticket_test").innerText = "";
    document.getElementById("navn_test").innerText = "";
    document.getElementById("etternavn_test").innerText = "";
    document.getElementById("telefon_test").innerText = "";
    document.getElementById("epost_test").innerText = "";

    // Check each field and set error messages if necessary
    if (film === "nullfilm") {
        filmValidationMessage.innerText = "Film ikke valgt";
        isValid = false;
    }

    const antall = parseInt(document.getElementById("ticket_numb").value);
    if (isNaN(antall) || antall <= 0) {
        document.getElementById("ticket_test").innerText = "Mangler tall";
        isValid = false;
    }

    const navn = document.getElementById("navn_boks").value;
    if (navn === "") {
        document.getElementById("navn_test").innerText = "Ugyldig navn";
        isValid = false;
    }

    const etternavn = document.getElementById("etternavn_boks").value;
    if (etternavn === "") {
        document.getElementById("etternavn_test").innerText = "Ugyldig etternavn";
        isValid = false;
    }

    const telefon = parseInt(document.getElementById("telefon_boks").value);
    if (isNaN(telefon) || !/^\d{8}$/.test(telefon.toString())) {
        document.getElementById("telefon_test").innerText = "Telefonnummeret må være 8 siffer";
        isValid = false;
    }

    const epost = document.getElementById("epost_boks").value;
    if (epost === "" || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(epost)) {
        document.getElementById("epost_test").innerText = "Ugyldig epost";
        isValid = false;
    }

    if (isValid) {
        const myticket = {
            film,
            antall,
            navn,
            etternavn,
            telefon,
            epost
        };
        console.log(myticket); // Log the ticket data for debugging
        $.post("/lagre", myticket, function(data) {
            console.log("Data saved successfully");
            clearForm(); // Clear the form fields after successful data submission
        }).fail(function() {
            console.error("Failed to save data");
        });
    }
}

// Function to clear the form
function clearForm() {
    document.getElementById("choosefilm").value = "nullfilm";
    document.getElementById("ticket_numb").value = "";
    document.getElementById("navn_boks").value = "";
    document.getElementById("etternavn_boks").value = "";
    document.getElementById("telefon_boks").value = "";
    document.getElementById("epost_boks").value = "";
}

// Function to fetch and display tickets
function get_a_list_of_receipts_js() {
    $.get('/receipts_js', function(data) {
        console.log(data);
        let ticketALL = data;
        if (ticketALL.length === 0) {
            $("#receipts_js").html("There are no tickets saved");
            return;
        }
        updateTable(ticketALL);
    });
}

// Function to update the table with ticket data
function updateTable(ticketALL) {
    let ut = `<table class="table table-striped table-hover">`;
    ut += `<thead class="thead-dark">`;
    ut += `<tr><th>Film</th><th>Antall</th><th>Navn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th><th>Actions</th></tr>`;
    ut += `</thead><tbody>`;
    for (const ticket of ticketALL) {
        ut += `<tr id="ticket-row-${ticket.id}">` +
            `<td>${ticket.film}</td>` +
            `<td>${ticket.antall}</td>` +
            `<td>${ticket.navn}</td>` +
            `<td>${ticket.etternavn}</td>` +
            `<td>${ticket.telefon}</td>` +
            `<td>${ticket.epost}</td>` +
            "<td><a class='btn btn-primary' href='changeTicket.html?id=" + ticket.id + "'>Change</a>" +
            `<button class='btn btn-danger' onclick='slettEN(${ticket.id})'>Delete</button></td>` +
            `</tr>`;
    }/*href='changeTicket.html?id=${ticket.id}'>*/
    ut += `</tbody></table>`;
    $('#receipts_js').html(ut);
}

// Function to delete a single ticket
function slettEN(id) {
    $.ajax({
        url: "/slettEN?id=" + id,
        type: "DELETE",
        success: function() {
            console.log('Billett med id ' + id + " ble slettet.");
            $(`#ticket-row-${id}`).remove();
        }
    });
}

// Function to delete all tickets
function deleteALL_tickets() {
    $.ajax({
        url: "/deleteAllTickets",
        type: "DELETE",
        success: function() {
            console.log("All tickets deleted successfully");
            $('#receipts_js').html(""); // Clears the table
        }
    });
}


function EditTick(){
    edit_ticket={
        "id": document.getElementById("tick_id").innerHTML,
        "film":document.getElementById("edit_choosefilm").value,
        "ticket":document.getElementById("edit_ticket_numb").value,
        "navn":document.getElementById("edit_navn_boks").value,
        "etternavn":document.getElementById("edit_etternavn_boks").value,
        "telefon":document.getElementById("edit_telefon_boks").value,
        "epost":document.getElementById("edit_epost_boks").value
    }
    console.log(document.getElementById("tick_id").value);
    console.log(edit_ticket);
    $.post("http://localhost:8080/updateTick")
}


/*Fish animation button*/
function fisk() {
    const iframe = document.getElementById('fishAnimation');
    const audio =document.getElementById('song');

    if(iframe.style.display==='none'){
        iframe.style.display = 'block';

        window.addEventListener('click',()=>{
            document.getElementById("song").play();
        });
    }
    else {iframe.style.display = 'none';
        window.addEventListener('click',()=>{
            document.getElementById("song").pause();
            audio.currentTime = 0;
        });

    }
}
