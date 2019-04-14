import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { AbstractService } from '../template.service';

import { PersonaServicioDTO } from '../../capa/principal/gestion_vehiculos/modelo/personaServicioDTO';
import { VehiculoServicioDTO } from "../../capa/principal/gestion_vehiculos/modelo/VehiculoServicioDTO";

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
 public consultarVehiculos(idLinea: string):  Observable<VehiculoServicioDTO[]> {
  return this.get<VehiculoServicioDTO[]>("/semillero-servicios", "/ConsultasRest/consultarVehiculos",
 {
       'idLinea':idLinea
     });
}
  
  

}
