import { CreateUserDto, UpdateUserDto } from './dto/index';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    register(createAuthDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(idea: string): Promise<User>;
    update(id: number, updateAuthDto: UpdateUserDto): string;
    remove(id: number): string;
    deleteAllUsers(): Promise<import("typeorm").DeleteResult>;
    private handleDBErrors;
}
