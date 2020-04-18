export class Student {
    public cedula: string;
    public nombres: string;
    public apellidos: string;

    constructor(cedula:string, nombres:string, apellidos:string) {
        this.cedula = cedula;
        this.nombres = nombres;
        this.apellidos = apellidos;
    }
}