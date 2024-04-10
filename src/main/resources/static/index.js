function sendTicketInfo_java(){
     myticket = {
        "film" : document.getElementById("choosefilm").value,
        "antall": parseInt(document.getElementById("ticket_numb").value),
        "navn" : document.getElementById("navn_boks").value,
        "etternavn" : document.getElementById("etternavn_boks").value,
        "telefon" : parseInt(document.getElementById("telefon_boks").value),
        "epost" : document.getElementById("epost_boks").value
    }
    console.log(myticket); //good for debugging in case the elements from student are no
    $.post("http://localhost:8080/Info_java",myticket, function(data){})
}

/**/
function get_a_list_of_receipts_js(){
    $.get("http://localhost:8080/receipts_js", function(data){
        let dinamicHtml= "<ul>";
        data.forEach(function(ticket){
            dinamicHtml +="<li>" + ticket.film + " - " + ticket.antall + " - "
                + ticket.navn + " - " + ticket.etternavn + " - "
                + ticket.telefon + " - " + ticket.epost + "</li>";
        })
        dinamicHtml+="</ul>"
        document.getElementById("receipts_js").innerHTML = dinamicHtml;
    })

}
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