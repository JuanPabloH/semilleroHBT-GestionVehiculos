import { marcaDTO } from "./MarcaDTO";

export interface lineaDTO {  
    //Los datos son iguales que el DTO en Java
    idMarca:number;
    nombre: string;
    cilindraje: number;
    marca: marcaDTO;
  
}