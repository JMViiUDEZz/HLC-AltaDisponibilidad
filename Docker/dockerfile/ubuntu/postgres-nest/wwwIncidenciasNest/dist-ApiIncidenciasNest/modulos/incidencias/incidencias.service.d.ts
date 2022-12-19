import { CreateIncidenciaDto } from './dto/create-incidencia.dto';
import { UpdateIncidenciaDto } from './dto/update-incidencia.dto';
import { Incidencia } from './entities/incidencia.entity';
import { Repository } from 'typeorm';
import { AparatosService } from '../aparatos/aparatos.service';
import { AuthService } from '../auth/auth.service';
export declare class IncidenciasService {
    private readonly incidenciasRepository;
    private readonly aparatosSerevice;
    private readonly usuariosService;
    constructor(incidenciasRepository: Repository<Incidencia>, aparatosSerevice: AparatosService, usuariosService: AuthService);
    create(createIncidenciaDto: CreateIncidenciaDto): Promise<Incidencia>;
    findAll(): Promise<Incidencia[]>;
    findOne(id: string): string;
    update(id: number, updateIncidenciaDto: UpdateIncidenciaDto): string;
    remove(id: number): string;
    private handleDBErrors;
}
