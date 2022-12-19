import { AuthService } from '../auth/auth.service';
import { AparatosService } from '../aparatos/aparatos.service';
import { IncidenciasService } from '../incidencias/incidencias.service';
export declare class SeedService {
    private readonly userService;
    private readonly aparatosService;
    private readonly incidenciasService;
    constructor(userService: AuthService, aparatosService: AparatosService, incidenciasService: IncidenciasService);
    runData(): Promise<{
        cod: string;
        nombre: string;
        tipo: string;
        anio: number;
        aula: string;
    }[]>;
    private loadUsers;
    private loadAparatos;
    private loadIncidencias;
}
