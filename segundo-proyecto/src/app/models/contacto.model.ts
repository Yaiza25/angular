import { GeneroModel } from "./genero.model";

export interface ContactoModel {
    id: number;
    nombre: string;
    // apellido: string;
    // telefono: string;
    // email: string;
    fechaNacimiento: Date;
    genero: GeneroModel;
    // activo: boolean;
    // foto: string;
}