package com.hbt.semillero.entidades;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * Linea de un vehiculo
 *
 */
@Entity
@Table(name = "LINEA")
public class Linea  {
	

	@Id
	@GeneratedValue (generator = "SEQ")
	@Column(name = "ID_LINEA")
	private Long idLinea;

	@Column(name = "NOMBRE")
	private String nombre;

	@Column(name = "CILINDRAJE")
	private int cilindraje;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "MARCA")
	private Marca marca;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getCilindraje() {
		return cilindraje;
	}

	public void setCilindraje(int cilindraje) {
		this.cilindraje = cilindraje;
	}

	public Marca getMarca() {
		return marca;
	}

	public void setMarca(Marca marca) {
		this.marca = marca;
	}

	public Long getIdLinea() {
		return idLinea;
	}

	public void setIdLinea(Long idLinea) {
		this.idLinea = idLinea;
	}

}
