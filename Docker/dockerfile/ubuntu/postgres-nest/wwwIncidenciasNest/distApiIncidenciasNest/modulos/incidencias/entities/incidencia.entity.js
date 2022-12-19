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
exports.Incidencia = void 0;
const aparato_entity_1 = require("../../aparatos/entities/aparato.entity");
const user_entity_1 = require("../../auth/entities/user.entity");
const typeorm_1 = require("typeorm");
let Incidencia = class Incidencia {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Incidencia.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Incidencia.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Incidencia.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Incidencia.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => aparato_entity_1.Aparato, (Aparato) => Aparato.incidencias, { onDelete: 'CASCADE' }),
    __metadata("design:type", aparato_entity_1.Aparato)
], Incidencia.prototype, "aparato", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (User) => User.incidencias, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_entity_1.User)
], Incidencia.prototype, "usuario", void 0);
Incidencia = __decorate([
    (0, typeorm_1.Entity)('Incidencias')
], Incidencia);
exports.Incidencia = Incidencia;
//# sourceMappingURL=incidencia.entity.js.map