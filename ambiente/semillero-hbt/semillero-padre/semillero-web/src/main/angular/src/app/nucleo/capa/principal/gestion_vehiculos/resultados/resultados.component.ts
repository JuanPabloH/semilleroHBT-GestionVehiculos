import { Component, Input, OnInit } from '@angular/core';

import { ConsultaVehiculosService } from '../../../../../nucleo/servicios/consulta-vehiculos-servicio/consulta.vehiculo.service'

import { PersonaServicioDTO } from '../modelo/personaServicioDTO';
import { VehiculoServicioDTO } from '../modelo/vehiculoServicioDTO';

@Component({
  selector: 'app-vehiculos-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {
  @Input() public marca:string;
  @Input() public placa:string;
  
  public idLinea:string;
  
  public listaPersonasDTO: PersonaServicioDTO[]; 
	public personaDTO: PersonaServicioDTO; 
	
	public listaVehiculoDTO: VehiculoServicioDTO[]; 
  public vehiculoDTO: VehiculoServicioDTO; 
  
  constructor(private vehiculosService: ConsultaVehiculosService) { }

  ngOnInit() {
  }

  public consultarPersonas() {
	    let tipoID: string = 'CC';
	    let numID: string = '12345';
	  	this.vehiculosService.consultarPersonas(tipoID, numID).subscribe(
	    	personas => {
		        this.listaPersonasDTO = personas;
		      },
		      error => {
		        console.log(error);
		      } 
	    );    
	    console.log('resultado servicio.... ' + this.listaPersonasDTO)
   }
   
   public listarVehiculos() {
	    this.listaVehiculoDTO = [];
	  	this.vehiculosService.consultarVehiculos(this.idLinea).subscribe(
	    	vehiculos => {
		        this.listaVehiculoDTO = vehiculos;
		      },
		      error => {
		        console.log(error);
		      } 
	    );    
   }
}

