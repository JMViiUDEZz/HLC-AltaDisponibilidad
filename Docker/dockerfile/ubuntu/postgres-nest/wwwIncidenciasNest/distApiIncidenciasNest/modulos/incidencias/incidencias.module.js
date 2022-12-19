"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidenciasModule = void 0;
const common_1 = require("@nestjs/common");
const incidencias_service_1 = require("./incidencias.service");
const incidencias_controller_1 = require("./incidencias.controller");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const incidencia_entity_1 = require("./entities/incidencia.entity");
const auth_module_1 = require("../auth/auth.module");
const aparatos_module_1 = require("../aparatos/aparatos.module");
let IncidenciasModule = class IncidenciasModule {
};
IncidenciasModule = __decorate([
    (0, common_1.Module)({
        controllers: [incidencias_controller_1.IncidenciasController],
        providers: [incidencias_service_1.IncidenciasService],
        imports: [
            config_1.ConfigModule,
            auth_module_1.AuthModule,
            aparatos_module_1.AparatosModule,
            typeorm_1.TypeOrmModule.forFeature([incidencia_entity_1.Incidencia])
        ],
        exports: [incidencias_service_1.IncidenciasService]
    })
], IncidenciasModule);
exports.IncidenciasModule = IncidenciasModule;
//# sourceMappingURL=incidencias.module.js.map