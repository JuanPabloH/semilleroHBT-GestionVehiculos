import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { AbstractService } from '../template.service';

import { PersonaServicioDTO } from '../../capa/principal/gestion_vehiculos/modelo/personaServicioDTO';
import { VehiculoServicioDTO } from "../../capa/principal/gestion_vehiculos/modelo/VehiculoServicioDTO";
import { marcaDTO } from '../../capa/principal/gestion_vehiculos/modelo/MarcaDTO';
import { lineaDTO } from '../../capa/principal/gestion_vehiculos/modelo/LineaDTO';


@Injectable({
  providedIn: 'root'
})
export class ConsultaVehiculosService extends AbstractService {
	
  
  /**
   * Constructor
   */
  constructor(injector: Injector) {
    super(injector);
  }

 public consultarPersonas(tipoID: string, numID: string):  Observable<PersonaServicioDTO[]> {
 	return this.get<PersonaServicioDTO[]>("/semillero-servicios", "/ConsultasRest/consultarPersonas",
	{
        "tipoID":tipoID, 
        "numID":numID,
      });
 }
 
 //Cambiar rest
 public consultarVehiculos(idLinea:string):  Observable<VehiculoServicioDTO[]> {
   if(idLinea != null){
    return this.get<VehiculoServicioDTO[]>("/semillero-servicios", "/ConsultasRest/consultarVehiculos",
    {
          "idLinea":idLinea
        });
   }
   else{
    return this.get<VehiculoServicioDTO[]>("/semillero-servicios", "/ConsultasRest/consultarVehiculos",
    {
        });
   }
  
}


public consultarMarcas():  Observable<marcaDTO[]> {
  
 return this.get<marcaDTO[]>("/semillero-servicios", "/ConsultasRest/consultarMarcas",
{
    });
}


public consultarLineas(idMarca:number):  Observable<lineaDTO[]> {
  let idMarcaString= idMarca+""
 return this.get<lineaDTO[]>("/semillero-servicios", "/ConsultasRest/consultarLineasPorMarca",
{
      "idMarca":idMarcaString
    });
}
  
  

}
