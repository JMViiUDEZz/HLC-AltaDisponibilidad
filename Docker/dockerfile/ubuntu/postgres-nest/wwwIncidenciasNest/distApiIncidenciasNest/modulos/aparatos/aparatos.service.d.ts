import { CreateAparatoDto } from './dto/create-aparato.dto';
import { Aparato } from './entities/aparato.entity';
import { Repository } from 'typeorm';
export declare class AparatosService {
    private readonly aparatosRepository;
    constructor(aparatosRepository: Repository<Aparato>);
    create(createAparatoDto: CreateAparatoDto): Promise<Aparato>;
    findAll(): Promise<Aparato[]>;
    findOne(cod: string): Promise<Aparato>;
    deleteAllProductos(): Promise<import("typeorm").DeleteResult>;
    private handleDBErrors;
}
