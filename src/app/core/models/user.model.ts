import { RolModel } from "./rol.model";

export interface UserLoginModel{
  usuarioId: number;
  nombre: string;
  apellidos: string;
  correo: string;
  contraseña: string;
  sexo: string;
  ciudad: string;
  foto: string;
  fechaNacimiento: string;
  roles: RolModel[];
}
