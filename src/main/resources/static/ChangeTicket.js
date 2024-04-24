$(document).ready(function() { /*testcoomit*/
    const params = new URLSearchParams(window.location.search);
    const ticketId = params.get('id');
    $("#ticketId").val(ticketId);

    fetch(`/getTicket?id=${ticketId}`)
        .then(response => response.json())
        .then(ticket => {
            $("#film").val(ticket.film);
            $("#antall").val(ticket.antall);
            $("#navn").val(ticket.navn);
            $("#etternavn").val(ticket.etternavn);
            $("#telefon").val(ticket.telefon);
            $("#epost").val(ticket.epost);
        });

    window.submitChanges = function() {
        const updatedTicket = {
            id: $("#ticketId").val(),
            film: $("#film").val(),
            antall: $("#antall").val(),
            navn: $("#navn").val(),
            etternavn: $("#etternavn").val(),
            telefon: $("#telefon").val(),
            epost: $("#epost").val()
        };
console.log("hei!!!")
        $.ajax({
            url: '/updateTicket',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(updatedTicket),
            success: function(response) {
                alert('Ticket Updated Successfully!');
                window.location.href = '/';
            },
            error: function() {
                alert('Error updating ticket.');
            }
        });
    };
});