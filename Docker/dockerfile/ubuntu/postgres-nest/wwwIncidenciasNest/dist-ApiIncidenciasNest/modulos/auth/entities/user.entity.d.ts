import { Incidencia } from "src/modulos/incidencias/entities/incidencia.entity";
export declare class User {
    idea: string;
    nombre: string;
    email: string;
    password: string;
    isActive: boolean;
    rol: string;
    incidencias?: Incidencia[];
}
