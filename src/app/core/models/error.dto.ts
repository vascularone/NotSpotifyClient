export class ErrorDTO {
  constructor(title, message, statusCode){
      this.title = title;
      this.message = message;
      this.code = statusCode;
  }
  title: string;
  message: string;
  code: ErrorCodes;
}

export enum ErrorCodes {
  NoSongs = 1000,
  NoPlaylists = 1001
}
