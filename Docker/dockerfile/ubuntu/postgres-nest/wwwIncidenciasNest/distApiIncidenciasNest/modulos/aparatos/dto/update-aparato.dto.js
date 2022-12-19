"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAparatoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_aparato_dto_1 = require("./create-aparato.dto");
class UpdateAparatoDto extends (0, mapped_types_1.PartialType)(create_aparato_dto_1.CreateAparatoDto) {
}
exports.UpdateAparatoDto = UpdateAparatoDto;
//# sourceMappingURL=update-aparato.dto.js.map