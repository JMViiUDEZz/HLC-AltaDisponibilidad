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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidenciasController = void 0;
const common_1 = require("@nestjs/common");
const incidencias_service_1 = require("./incidencias.service");
const create_incidencia_dto_1 = require("./dto/create-incidencia.dto");
const update_incidencia_dto_1 = require("./dto/update-incidencia.dto");
let IncidenciasController = class IncidenciasController {
    constructor(incidenciasService) {
        this.incidenciasService = incidenciasService;
    }
    create(createIncidenciaDto) {
        return this.incidenciasService.create(createIncidenciaDto);
    }
    findAll() {
        return this.incidenciasService.findAll();
    }
    findOne(id) {
        return this.incidenciasService.findOne(id);
    }
    update(id, updateIncidenciaDto) {
        return this.incidenciasService.update(+id, updateIncidenciaDto);
    }
    remove(id) {
        return this.incidenciasService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_incidencia_dto_1.CreateIncidenciaDto]),
    __metadata("design:returntype", void 0)
], IncidenciasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IncidenciasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IncidenciasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_incidencia_dto_1.UpdateIncidenciaDto]),
    __metadata("design:returntype", void 0)
], IncidenciasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IncidenciasController.prototype, "remove", null);
IncidenciasController = __decorate([
    (0, common_1.Controller)('incidencias'),
    __metadata("design:paramtypes", [incidencias_service_1.IncidenciasService])
], IncidenciasController);
exports.IncidenciasController = IncidenciasController;
//# sourceMappingURL=incidencias.controller.js.map