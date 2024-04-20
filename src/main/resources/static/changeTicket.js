$(function (){
    const id=window.location.search.substring(1);
    const url="/getAticket?"+id;
    $.get(url, function (ticket){
        $("#id").val(ticket.id);
        $("#film").val(ticket.film);
        $("#antall").val(ticket.antall);
        $("#navn").val(ticket.navn);
        $("#etternavn").val(ticket.etternavn);
        $("#telefon").val(ticket.telefon);
        $("#epost").val(ticket.epost);
    });
});
function changeOneTicket(){
    const ticket={
        id:$("#id").val(),
        antall:$("#antall").val(),
        navn:$("#navn").val(),
        etternavn:$("#etternavn").val(),
        adresse:$("#adresse").val(),
        telefon:$("#telefon").val(),
        epost:$("#epost").val()
    }
    $.post("/receipts_js", ticket,function (){
        window.location.href='index.html';
    });
}