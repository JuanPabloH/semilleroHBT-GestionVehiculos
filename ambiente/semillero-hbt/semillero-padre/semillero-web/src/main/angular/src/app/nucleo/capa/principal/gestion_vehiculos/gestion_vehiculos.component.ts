import { Component, OnInit } from '@angular/core';
import { VehiculoServicioDTO } from './modelo/VehiculoServicioDTO';

@Component({
  selector: 'app-gestion_vehiculos',
  templateUrl: './gestion_vehiculos.component.html'
})
export class GestionVehiculosComponent implements OnInit {
  public vehiculo:VehiculoServicioDTO;
  
  constructor() { }

  ngOnInit() {
  	
  }

}
