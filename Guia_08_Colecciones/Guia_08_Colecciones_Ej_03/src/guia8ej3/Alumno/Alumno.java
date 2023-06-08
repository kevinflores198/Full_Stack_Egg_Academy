package guia8ej3.Alumno;

import java.util.ArrayList;

public class Alumno {

    private String nombre;
    private ArrayList<Integer> nota = new ArrayList();

    public Alumno() {
    }

    public Alumno(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public ArrayList<Integer> getNota() {
        return nota;
    }

    public void setNota(ArrayList<Integer> nota) {
        this.nota = nota;
    }

    @Override
    public String toString() {
        return "Alumno: " + nombre + "\nNota:" + nota;
    }

}
