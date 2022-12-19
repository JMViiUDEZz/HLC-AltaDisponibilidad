import { Incidencia } from "src/modulos/incidencias/entities/incidencia.entity";
export declare class Aparato {
    cod: string;
    nombre: string;
    aula: string;
    tipo: string;
    anio: number;
    incidencias?: Incidencia[];
}
