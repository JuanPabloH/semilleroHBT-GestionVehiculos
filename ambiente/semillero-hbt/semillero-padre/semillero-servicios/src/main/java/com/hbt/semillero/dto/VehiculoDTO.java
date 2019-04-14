package com.hbt.semillero.dto;

import java.io.Serializable;

/**
 *
 * Clase vehiculoDTO.
 * 
 *
 */

public class VehiculoDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Long idVehiculo;

	private int modelo;

	private String placa;
	
	private LineaDTO linea;

	public Long getIdVehiculo() {
		return idVehiculo;
	}

	public void setIdVehiculo(Long idVehiculo) {
		this.idVehiculo = idVehiculo;
	}

	public int getModelo() {
		return modelo;
	}

	public void setModelo(int modelo) {
		this.modelo = modelo;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public LineaDTO getLinea() {
		return linea;
	}

	public void setLinea(LineaDTO linea) {
		this.linea = linea;
	}
	
	


}
