import { AparatosService } from './aparatos.service';
import { CreateAparatoDto } from './dto/create-aparato.dto';
export declare class AparatosController {
    private readonly aparatosService;
    constructor(aparatosService: AparatosService);
    create(createAparatoDto: CreateAparatoDto): Promise<import("./entities/aparato.entity").Aparato>;
    findAll(): Promise<import("./entities/aparato.entity").Aparato[]>;
    findOne(id: string): Promise<import("./entities/aparato.entity").Aparato>;
}
