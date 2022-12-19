"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIncidenciaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_incidencia_dto_1 = require("./create-incidencia.dto");
class UpdateIncidenciaDto extends (0, mapped_types_1.PartialType)(create_incidencia_dto_1.CreateIncidenciaDto) {
}
exports.UpdateIncidenciaDto = UpdateIncidenciaDto;
//# sourceMappingURL=update-incidencia.dto.js.map