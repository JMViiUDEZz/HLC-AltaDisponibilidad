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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aparato = void 0;
const incidencia_entity_1 = require("../../incidencias/entities/incidencia.entity");
const typeorm_1 = require("typeorm");
let Aparato = class Aparato {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Aparato.prototype, "cod", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { unique: true }),
    __metadata("design:type", String)
], Aparato.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Aparato.prototype, "aula", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Aparato.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Aparato.prototype, "anio", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => incidencia_entity_1.Incidencia, (Incidencia) => Incidencia.aparato, { cascade: true, eager: true }),
    __metadata("design:type", Array)
], Aparato.prototype, "incidencias", void 0);
Aparato = __decorate([
    (0, typeorm_1.Entity)('aparatos')
], Aparato);
exports.Aparato = Aparato;
//# sourceMappingURL=aparato.entity.js.map