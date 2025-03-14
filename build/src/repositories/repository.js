"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor(model) {
        this.model = model;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(data);
        });
    }
    exist(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const document = yield this.model.exists(filter);
            return !!document;
        });
    }
    delete(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.deleteOne(filter);
            return result.deletedCount > 0;
        });
    }
    update(filter, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findOneAndUpdate(filter, data, { new: true });
        });
    }
    findOne(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findOne(filter);
        });
    }
    findAll() {
        return __awaiter(this, arguments, void 0, function* (filter = {}) {
            return this.model.find(filter);
        });
    }
}
exports.Repository = Repository;
