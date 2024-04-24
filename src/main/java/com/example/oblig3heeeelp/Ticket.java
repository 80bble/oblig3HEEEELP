package com.example.oblig3heeeelp; /*testcoomit*/
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class Ticket  {
    private String film;
    private int antall;
    private String navn;
    private String etternavn;
    private int telefon;
    private String epost;
    private Long id;


    public Ticket( String film, int antall, String navn, String etternavn, int telefon, String epost) {

        this.film = film;
        this.antall = antall;
        this.navn = navn;
        this.etternavn = etternavn;
        this.telefon = telefon;
        this.epost = epost;
    }
    @Override
    public String toString() {
        return "Ticket{"+
                "film='" + film + '\'' +
                ", antall=" + antall +
                ", navn='" + navn + '\'' +
                ", etternavn='" + etternavn + '\'' +
                ", telefon=" + telefon +
                ", epost='" + epost + '\'' +
                '}';

}
}
