import { IncidenciasService } from './incidencias.service';
import { CreateIncidenciaDto } from './dto/create-incidencia.dto';
import { UpdateIncidenciaDto } from './dto/update-incidencia.dto';
export declare class IncidenciasController {
    private readonly incidenciasService;
    constructor(incidenciasService: IncidenciasService);
    create(createIncidenciaDto: CreateIncidenciaDto): Promise<import("./entities/incidencia.entity").Incidencia>;
    findAll(): Promise<import("./entities/incidencia.entity").Incidencia[]>;
    findOne(id: string): string;
    update(id: string, updateIncidenciaDto: UpdateIncidenciaDto): string;
    remove(id: string): string;
}
