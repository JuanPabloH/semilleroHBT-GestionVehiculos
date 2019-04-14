import { lineaDTO } from "./LineaDTO";

export interface VehiculoServicioDTO {  
    //Los datos son iguales que el DTO en Java
    idVehiculo:number;
    modelo: number;
    placa: string;
    linea: lineaDTO;
  
}