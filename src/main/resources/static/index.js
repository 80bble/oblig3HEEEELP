function sendTicketInfo_java() {
    let isValid = true;  // A flag to determine if the form is valid

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
            clearForm();  // Clear the form fields after successful data submission
        }).fail(function() {
            console.error("Failed to save data");
        });
    }
}

function clearForm() {
    document.getElementById("choosefilm").value = "nullfilm";
    document.getElementById("ticket_numb").value = "";
    document.getElementById("navn_boks").value = "";
    document.getElementById("etternavn_boks").value = "";
    document.getElementById("telefon_boks").value = "";
    document.getElementById("epost_boks").value = "";
}
function get_a_list_of_receipts_js(){
    $.get('/receipts_js', function (data){
        console.log(data);
        let ticketALL = data;
        if (ticketALL.length === 0){
            $("#receipts_js").html("Det er ingen bestilte biletter");
            return;
        }

        let ut= "<table><tr><th>Film</th><th>Antall</th><th>Navn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th><th>Delete</th></tr>";
        for(const ticket of ticketALL){
            ut += `<tr id="ticket-row-${ticket.id}">` +
                `<td>${ticket.film}</td>` +
                `<td>${ticket.antall}</td>` +
                `<td>${ticket.navn}</td>` +
                `<td>${ticket.etternavn}</td>` +
                `<td>${ticket.telefon}</td>` +
                `<td>${ticket.epost}</td>` +
                "<td> <a class='btn btn-primary' href='changeTicket.html?id="+ticket.id+"'>Changez</a></td>" +
                "<td> <button class='btn btn-danger' onclick='slettEN("+ticket.id+")'>deletez</button></td>" +
                `</tr>`;
        }
        ut += "</table>";
        $('#receipts_js').html(ut);
    });
}

/*Slett en*/
function slettEN(id) {
    $.ajax({
        url: "/slettEN?id=" + id,
        type: "DELETE",
        success: function () {
            console.log('Billett med id ' + id + " ble slettet.");
            // Remove the row from the HTML table
            $(`#ticket-row-${id}`).remove();
        }
    });
}

function deleteALL_tickets() {
    $.ajax({
        url: "/deleteAllTickets",
        type: "DELETE",
        success: function () {
            console.log("All tickets deleted successfully");

            $('#receipts_js').html("");
        }
    });
}

/*function get_a_list_of_receipts_js(){
    $.get("/receipts_js", function(data){
        let dynamicHtml= "<table><tr><th>Film</th><th>Antall</th><th>Navn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th><th>Delete</th></tr>";
        data.forEach(function(ticket){
            dynamicHtml += `<tr>
                                <td>${ticket.film}</td>
                                <td>${ticket.antall}</td>
                                <td>${ticket.navn}</td>
                                <td>${ticket.etternavn}</td>
                                <td>${ticket.telefon}</td>
                                <td>${ticket.epost}</td>
                                <td><button onclick="changeTicket(${ticket.id})">Change info</button></td>
                                <td><button onclick="deleteTicket(${ticket.id})">Delete</button></td>
                            </tr>`;
        });
        dynamicHtml += "</table>";
        document.getElementById("receipts_js").innerHTML = dynamicHtml;
    });
*/


            /*let ut = "<table><tr><th>Navn</th><th>Adresse</th></tr>";
            for (const kunde of kunder){
                ut+="<tr><td>"+kunde.navn+"</td><td>"+kunde.adresse+"</td></tr>";

            }
            ut+="</table>";
            $("#kundene").html(ut);




            */

/* Forrige knapper
function SendTicketInfo(){
    myticket = {
        "film" : document.getElementById("choosefilm").value,
        "antall": document.getElementById("ticket_numb").value,
        "navn" : document.getElementById("navn_boks").value,
        "etternavn" : document.getElementById("etternavn_boks").value,
        "telefon" : document.getElementById("telefon_boks").value,
        "epost" : document.getElementById("epost_boks").value
    }
    console.log(myticket); //good for debugging in case the elements from student are no
    $.post("http://localhost:8080/receiveTicketInfo",myticket, function (data){})
}

function get_a_list_of_receipts(){
    $.get("http://localhost:8080/receipts", function(data){
        let dinamicHtml= "<ul>";
        data.forEach(function(ticket){
            dinamicHtml +="<li>" + ticket.film + " - " + ticket.antall + " - "
                + ticket.navn + " - " + ticket.etternavn + " - "
                + ticket.telefon + " - " + ticket + "</li>"
        })
        dinamicHtml+="</ul>"
        document.getElementById("receiptz").innerHTML = dinamicHtml;
    })

}
*/
/*function get_a_list_of_receipts(){  // same behaviour as the above, but this time we receive an array of students
    $.get("http://localhost:8080/receipts", function(data){  //this GET call will retrieve from "/students" endpoint a list
        console.log(data);

    })
}
*/