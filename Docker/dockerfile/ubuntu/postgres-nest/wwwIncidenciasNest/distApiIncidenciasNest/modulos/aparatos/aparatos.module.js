"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AparatosModule = void 0;
const common_1 = require("@nestjs/common");
const aparatos_service_1 = require("./aparatos.service");
const aparatos_controller_1 = require("./aparatos.controller");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const aparato_entity_1 = require("./entities/aparato.entity");
let AparatosModule = class AparatosModule {
};
AparatosModule = __decorate([
    (0, common_1.Module)({
        controllers: [aparatos_controller_1.AparatosController],
        providers: [aparatos_service_1.AparatosService],
        imports: [
            config_1.ConfigModule,
            typeorm_1.TypeOrmModule.forFeature([aparato_entity_1.Aparato])
        ],
        exports: [aparatos_service_1.AparatosService]
    })
], AparatosModule);
exports.AparatosModule = AparatosModule;
//# sourceMappingURL=aparatos.module.js.map