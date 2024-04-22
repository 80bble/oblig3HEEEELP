package com.example.oblig3heeeelp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
/*import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;*/
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.List;


@Repository
public class OrderRepository {

    @Autowired
private JdbcTemplate db;

    public void lagreInfo (Ticket nybillett){
        String sql ="INSERT INTO TICKET (film, antall, navn, etternavn, telefon, epost) VALUES (?, ?, ?, ?, ?, ?)";
        db.update(sql, nybillett.getFilm(), nybillett.getAntall(),nybillett.getNavn(),
                nybillett.getEtternavn(),nybillett.getTelefon(),nybillett.getEpost());
    }

    /*public Ticket findById(long id){
        return db.queryForObject("SELECT * FROM TICKET where id=?", new TicketRowMapper(), id);
    }*/

public List <Ticket> hentAllInfo(){
      String sql = "SELECT * FROM TICKET ORDER BY etternavn ASC";
    List<Ticket> alle_billetter = db.query(sql, new BeanPropertyRowMapper<Ticket>(Ticket.class));
      return alle_billetter;
}
    public int slettEN(Long id){
        String sql = "DELETE FROM TICKET WHERE id = ?";
        return db.update(sql, id);
    }
    public int deleteAllTickets(){
        String sql = "DELETE FROM TICKET"; // SQL to delete all rows in TICKET table
        return db.update(sql); // Execute deletion
    }
    public int updateONETick (Ticket myticket){
        String sql = "UPDATE myticket SET film = ?, antall = ?, navn= ?, etternavn= ?, telefon= ?, epost = ?";
        return db.update(sql,myticket.getFilm(),myticket.getNavn(),myticket.getEtternavn(),myticket.getTelefon(),myticket.getEpost());

        }
                /*film, antall, navn, etternavn, telefon, epost*/
    }

