var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { validate } from 'uuid';
import { settings } from '../settings.js';
import { sendResponse } from './sendResponse.js';
export const getId = (url, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = url.split(settings.URL + '/')[1];
    if (id && validate(id)) {
        return id;
    }
    else {
        yield sendResponse(res, 400, { error: 'userId invalid, not a valid uuid' });
        return '';
    }
});
