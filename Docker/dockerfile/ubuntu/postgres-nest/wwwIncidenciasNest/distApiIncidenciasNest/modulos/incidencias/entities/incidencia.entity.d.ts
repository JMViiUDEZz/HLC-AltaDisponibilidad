import { Aparato } from "src/modulos/aparatos/entities/aparato.entity";
import { User } from "src/modulos/auth/entities/user.entity";
export declare class Incidencia {
    codigo: string;
    descripcion: string;
    fecha: string;
    status: string;
    aparato?: Aparato;
    usuario: User;
}
