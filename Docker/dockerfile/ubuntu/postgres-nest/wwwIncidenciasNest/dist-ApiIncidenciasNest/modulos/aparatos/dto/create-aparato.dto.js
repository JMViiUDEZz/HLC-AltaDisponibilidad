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
exports.CreateAparatoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateAparatoDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAparatoDto.prototype, "cod", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CreateAparatoDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['Proyector', 'Ordenador', 'Pizarra Digital', 'Auriculares', 'Altavoces']),
    __metadata("design:type", String)
], CreateAparatoDto.prototype, "tipo", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", Number)
], CreateAparatoDto.prototype, "anio", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['B1', 'B2', 'B3', 'C1', 'C2', 'C3', 'C4', 'A2', 'A2']),
    __metadata("design:type", String)
], CreateAparatoDto.prototype, "aula", void 0);
exports.CreateAparatoDto = CreateAparatoDto;
//# sourceMappingURL=create-aparato.dto.js.map