package com.hbt.semillero.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * Marca de vehiculos.
 * 
 *
 */
@Entity
@Table(name = "MARCA")
@SequenceGenerator(name = "SEQ", sequenceName = "SEQ_COMUN", initialValue = 0, allocationSize = 1)
public class Marca {

	@Id
	@GeneratedValue (generator = "SEQ")
	@Column(name = "ID_MARCA")
	private Long idMarca;

	@Column(name = "NOMBRE")
	private String nombre;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Long getIdMarca() {
		return idMarca;
	}

	public void setIdMarca(Long idMarca) {
		this.idMarca = idMarca;
	}

}
