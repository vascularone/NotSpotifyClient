import { HttpStatusCode } from "../enums/https-status-code.enum";
import { ErrorDTO } from "./error.dto";

export class ResponseDTO<T> {
    error: ErrorDTO;
    status: HttpStatusCode;
    data: T;
}
