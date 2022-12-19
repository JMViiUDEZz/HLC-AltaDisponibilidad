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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidenciasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const incidencia_entity_1 = require("./entities/incidencia.entity");
const typeorm_2 = require("typeorm");
const aparatos_service_1 = require("../aparatos/aparatos.service");
const auth_service_1 = require("../auth/auth.service");
let IncidenciasService = class IncidenciasService {
    constructor(incidenciasRepository, aparatosSerevice, usuariosService) {
        this.incidenciasRepository = incidenciasRepository;
        this.aparatosSerevice = aparatosSerevice;
        this.usuariosService = usuariosService;
    }
    async create(createIncidenciaDto) {
        try {
            const { idea, cod } = createIncidenciaDto, data = __rest(createIncidenciaDto, ["idea", "cod"]);
            const incidencia = this.incidenciasRepository.create(Object.assign({}, data));
            incidencia.aparato = await this.aparatosSerevice.findOne(cod);
            incidencia.usuario = await this.usuariosService.findOne(idea);
            await this.incidenciasRepository.save(incidencia);
            return incidencia;
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    findAll() {
        return this.incidenciasRepository.find({});
    }
    findOne(id) {
        return `This action returns a #${id} incidencia`;
    }
    update(id, updateIncidenciaDto) {
        return `This action updates a #${id} incidencia`;
    }
    remove(id) {
        return `This action removes a #${id} incidencia`;
    }
    handleDBErrors(error) {
        throw new common_1.BadRequestException(error.detail);
    }
};
IncidenciasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(incidencia_entity_1.Incidencia)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        aparatos_service_1.AparatosService,
        auth_service_1.AuthService])
], IncidenciasService);
exports.IncidenciasService = IncidenciasService;
//# sourceMappingURL=incidencias.service.js.map