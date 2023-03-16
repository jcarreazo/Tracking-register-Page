import React from "react";

export default function Education(props) {
  return (
    <div className="main">
      <div className="text">
        <h2>Informacion de Origen</h2>
        <p>Inform about your package origin.</p>
      </div>
      <div className="input-text">
        <div className="input-div">
          <label for="type_transport" className="form-label label-direction">
            Tipo de transporte
          </label>
          <select
            id="type_transport"
            className="form-select"
            name="type_transport"
            onChange={props.handlerChangeDNI}
            value={props.Type_transport || ""}
          >
            <option value="" selected>
              Seleccione un transporte
            </option>
            <option value="1">TRANSPORTE LOCAL</option>
            <option value="2">TRANSPORTE NACIONAL</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label for="pickup_address" className="form-label label-direction">
          Direccion de Recogida
        </label>
        <input
          type="text"
          className="form-control direccion"
          id="pickup_address"
          onChange={props.handlerChange}
          value={props.Pickup_address || ""}
          name="pickup_address"
          disabled={props.Disabled ? 'disabled' : ''}
        />
      </div>
      <div className="dates">
        <div className="mb-3">
          <label for="pickup_datetime" className="form-label label-direction">
            Fecha de Recogida
          </label>
          <input
            type="date"
            className="form-control "
            id="name"
            onChange={props.handlerChange}
            value={props.Pickup_datetime}
            name="pickup_date"
            disabled={props.Disabled ? 'disabled' : ''}
          />
        </div>

        <div className="mb-3">
          <label for="pickup_time" className="form-label label-direction">
            Hora de Recogida
          </label>
          <input
            type="time"
            className="form-control"
            id="name"
            onChange={props.handlerChange}
            value={props.Pickup_time || ""}
            name="pickup_time"
            disabled={props.Disabled ? 'disabled' : ''}
          />
        </div>
      </div>

      <div className="places">
        <div className="mb-3">
          <label for="province_origin" className="form-label label-direction">
            Provincia - Origen
          </label>

          <select
            value={props.Province || ""}
            name="province_origin"
            className="form-select selectorInfo"
            onChange={props.handlerChange}
            disabled={props.Disabled ? 'disabled' : ''}
          >
            <option value="" selected>
              Seleccione una provincia
            </option>
            <option value="1">SAN JOSÉ</option>
            <option value="2">ALAJUELA</option>
            <option value="3">CARTAGO</option>
            <option value="4">HEREDIA</option>
          </select>
        </div>

        <div className="mb-3">
          <label for="canton_origin" className="form-label label-direction">
            Cantón - Origen
          </label>
          <select
            value={props.Canton_origin || ""}
            name="canton_origin"
            className="form-select selectorInfo"
            onChange={props.handlerChange}
            disabled={props.Disabled ? 'disabled' : ''}
          >
            <option value="" selected>
              Seleccione un Canton
            </option>
            {props.Province === "1" && <option value="1">ESCAZA</option>}
            {props.Province === "1" && <option value="2">DESAMPARADOS</option>}
            {props.Province === "1" && <option value="3">ASERRO</option>}
            {props.Province === "1" && <option value="4">MORA</option>}
            {props.Province === "1" && <option value="5">GOICOECHEA</option>}
            {props.Province === "1" && <option value="6">SANTA ANA</option>}
            {props.Province === "1" && <option value="7">ALAJUELITA</option>}
            {props.Province === "1" && (
              <option value="8">VAZQUEZ DE CORONADO</option>
            )}
            {props.Province === "1" && <option value="9">TIBAS</option>}
            {props.Province === "1" && <option value="10">MORAVIA</option>}
            {props.Province === "1" && (
              <option value="11">MONTES DE OCA</option>
            )}
            {props.Province === "1" && <option value="12">CURRIDABAT</option>}
            {props.Province === "2" && <option value="13">ATENAS</option>}
            {props.Province === "2" && <option value="14">POAS</option>}
            {props.Province === "3" && <option value="15">PARAISO</option>}
            {props.Province === "3" && <option value="16">LA UNION</option>}
            {props.Province === "3" && <option value="17">OREAMUNO</option>}
            {props.Province === "3" && <option value="18">ALVARADO</option>}
            {props.Province === "3" && <option value="19">EL GUARCO</option>}
            {props.Province === "4" && <option value="20">BARVA</option>}
            {props.Province === "4" && (
              <option value="21">SANTO DOMINGO</option>
            )}
            {props.Province === "4" && (
              <option value="22">SANTA BARBARA</option>
            )}
            {props.Province === "4" && <option value="23">SAN RAFAELA</option>}
            {props.Province === "4" && <option value="24">SAN ISIDRO</option>}
            {props.Province === "4" && <option value="25">BELENA</option>}
            {props.Province === "4" && <option value="26">FLORES</option>}
            {props.Province === "4" && <option value="27">SAN PABLO</option>}
          </select>
        </div>
      </div>
    </div>
  );
}
