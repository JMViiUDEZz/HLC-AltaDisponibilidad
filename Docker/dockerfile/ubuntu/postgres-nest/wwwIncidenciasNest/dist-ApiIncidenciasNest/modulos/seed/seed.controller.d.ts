import { SeedService } from './seed.service';
export declare class SeedController {
    private readonly seedService;
    constructor(seedService: SeedService);
    executeSeed(): Promise<{
        cod: string;
        nombre: string;
        tipo: string;
        anio: number;
        aula: string;
    }[]>;
}
