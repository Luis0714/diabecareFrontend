export interface CustomResponse<T>{
  data : T;
  statusCode : number;
  message : string;
}
