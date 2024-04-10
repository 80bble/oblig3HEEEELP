package com.example.oblig3heeeelp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TicketController {

    /*@Autowired
    OrderRepository rep;*/

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
