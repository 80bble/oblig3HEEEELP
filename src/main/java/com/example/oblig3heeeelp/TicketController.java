package com.example.oblig3heeeelp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TicketController {
    @Autowired
    OrderRepository rep;


    @PostMapping("/lagre")
    public void lagreInfo (Ticket ticket){
        rep.lagreInfo(ticket);

    }

    @GetMapping("/getTicket")
    public Ticket getTicket(@RequestParam int id) {
        return rep.findById(id);
    }

    @PostMapping("/updateTicket")
    public ResponseEntity<?> updateTicket(@RequestBody Ticket ticket) {
        rep.updateTicket(ticket);
        return ResponseEntity.ok("Ticket updated successfully");
    }


    @GetMapping("/receipts_js")
        public List <Ticket> receipts_js(){
        return rep.hentAllInfo();
    }

    @DeleteMapping("/slettEN")
    public ResponseEntity<String> slettEN(@RequestParam Long id) {
        int deletedRows = rep.slettEN(id);
        return deletedRows > 0 ?
                ResponseEntity.ok("Deleted") :
                ResponseEntity.status(HttpStatus.NOT_FOUND).body("Ticket not found");
    }

    @DeleteMapping("/deleteAllTickets")
    public ResponseEntity<String> deleteAllTickets() {
        int deletedRows = rep.deleteAllTickets();
        return deletedRows >0?
                ResponseEntity.ok("Deleted") :
                ResponseEntity.status(HttpStatus.NOT_FOUND).body("Ticket not found");
    }


}
    /*@GetMapping("/slettEN?id=")




}



/*Old ticket info*/
/*@RestController
public class TicketController {

    private final List<Ticket> tickets = new ArrayList<>();

    @PostMapping("/Info_java")
    public void Info_java (Ticket ticket){
        System.out.println(ticket);
        tickets.add(ticket);

    }

    @GetMapping("/receipts_js")
        public List <Ticket> receipts_js(){
        return tickets;
    }
    }

    /*Old ticket info*/
/*@RestController
public class TicketController {
    private final List<Ticket> tickets = new ArrayList<>();

    @GetMapping("/receipts")
        public List <Ticket> receipts(){
        return tickets;
    }

@PostMapping("/get_a_list_of_receipts")
public void get_a_list_of_receipts(Ticket ticket){
    System.out.println(ticket);
    tickets.add(ticket);
}

    }*/
