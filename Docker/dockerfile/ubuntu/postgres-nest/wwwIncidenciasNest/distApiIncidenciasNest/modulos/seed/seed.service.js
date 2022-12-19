"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
const aparatos_service_1 = require("../aparatos/aparatos.service");
const usuarios_json_1 = __importDefault(require("../seed/data/usuarios.json"));
const aparatos_json_1 = __importDefault(require("../seed/data/aparatos.json"));
const incidencias_json_1 = __importDefault(require("../seed/data/incidencias.json"));
const incidencias_service_1 = require("../incidencias/incidencias.service");
let SeedService = class SeedService {
    constructor(userService, aparatosService, incidenciasService) {
        this.userService = userService;
        this.aparatosService = aparatosService;
        this.incidenciasService = incidenciasService;
    }
    async runData() {
        await this.userService.deleteAllUsers();
        await this.loadUsers();
        await this.aparatosService.deleteAllProductos();
        await this.loadAparatos();
        await this.loadIncidencias();
        return aparatos_json_1.default;
    }
    async loadUsers() {
        const insertPromises = [];
        usuarios_json_1.default.forEach(usuario => {
            insertPromises.push(this.userService.register(usuario));
        });
        await Promise.all(insertPromises);
    }
    async loadAparatos() {
        const insertPromises = [];
        aparatos_json_1.default.forEach(aparato => {
            insertPromises.push(this.aparatosService.create(aparato));
        });
        await Promise.all(insertPromises);
    }
    async loadIncidencias() {
        const insertPromises = [];
        incidencias_json_1.default.forEach(incidencia => {
            insertPromises.push(this.incidenciasService.create(incidencia));
        });
        await Promise.all(insertPromises);
    }
};
SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        aparatos_service_1.AparatosService,
        incidencias_service_1.IncidenciasService])
], SeedService);
exports.SeedService = SeedService;
//# sourceMappingURL=seed.service.js.map