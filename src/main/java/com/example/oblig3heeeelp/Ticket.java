package com.example.oblig3heeeelp;

public class Ticket  {
    private String film;
    private int antall;
    private String navn;
    private String etternavn;
    private int telefon;
    private String epost;


    public Ticket(){}
    public Ticket(String film, int antall, String navn, String etternavn, int telefon, String epost) {
        this.film = film;
        this.antall = antall;
        this.navn = navn;
        this.etternavn = etternavn;
        this.telefon = telefon;
        this.epost = epost;

    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public int getTelefon() {
        return telefon;
    }

    public void setTelefon(int telefon) {
        this.telefon = telefon;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "film='" + film + '\'' +
                ", antall=" + antall +
                ", navn='" + navn + '\'' +
                ", etternavn='" + etternavn + '\'' +
                ", telefon=" + telefon +
                ", epost='" + epost + '\'' +
                '}';
    }
}
