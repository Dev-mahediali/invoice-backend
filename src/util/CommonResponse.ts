// export interface CommonResponse<T> {
//   status: number;
//   message: string;
//   isError: boolean;
//   data: T | T[];
// }

export class CommonResponse<T> {
  status: number = 0;
  isError: boolean = false;
  data: T | undefined;
  message: string = "";

  constructor(status: number, message: string, isError: boolean, data: T) {
    this.message = message;
    this.isError = isError;
    this.status = status;
    this.data = data;
  }
}
