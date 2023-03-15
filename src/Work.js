import React from "react";

export default function Work(props) {
  return (
    <div className="main">
      <div className="text delivery">
        <h2>Informacion de Envio</h2>
        <p>Inform about your package delivery.</p>
      </div>
      <div class="direction-container">
        <label for="pickup_address" class="form-label label-direction">
          Direccion de Recogida
        </label>
        <input
          type="text"
          className="form-control direccion"
          id="delivery_address"
          onChange={props.handlerChange}
          value={props.Delivery_address || ""}
          name="delivery_address"
        />
      </div>
      <div className="container-delivery">
        <div className="places">
          <div className="mb-3">
            <label for="type_transport" className="form-label label-direction">
              Provincia - Origen
            </label>
            
          <select
            value={props.Province_destination || ""}
            name="province_destination"
            className="form-select selectorInfo"
            onChange={props.handlerChange}
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

        <div class="mb-3">
          <label for="canton_destination" class="form-label label-direction">
            Cantón - Destination
          </label>
          <select
            value={props.Canton_origin || ""}
            name="canton_destination"
            className="form-select selectorInfo"
            onChange={props.handlerChange}
          >
            <option value="" selected>
              Seleccione un Canton
            </option>
            {props.Province_destination  === "1" && <option value="1">ESCAZA</option>}
            {props.Province_destination  === "1" && <option value="2">DESAMPARADOS</option>}
            {props.Province_destination  === "1" && <option value="3">ASERRO</option>}
            {props.Province_destination  === "1" && <option value="4">MORA</option>}
            {props.Province_destination  === "1" && <option value="5">GOICOECHEA</option>}
            {props.Province_destination  === "1" && <option value="6">SANTA ANA</option>}
            {props.Province_destination  === "1" && <option value="7">ALAJUELITA</option>}
            {props.Province_destination  === "1" && (
              <option value="8">VAZQUEZ DE CORONADO</option>
            )}
            {props.Province_destination  === "1" && <option value="9">TIBAS</option>}
            {props.Province_destination  === "1" && <option value="10">MORAVIA</option>}
            {props.Province_destination  === "1" && (
              <option value="11">MONTES DE OCA</option>
            )}
            {props.Province_destination  === "1" && <option value="12">CURRIDABAT</option>}
            {props.Province_destination  === "2" && <option value="13">ATENAS</option>}
            {props.Province_destination  === "2" && <option value="14">POAS</option>}
            {props.Province_destination  === "3" && <option value="15">PARAISO</option>}
            {props.Province_destination  === "3" && <option value="16">LA UNION</option>}
            {props.Province_destination  === "3" && <option value="17">OREAMUNO</option>}
            {props.Province_destination  === "3" && <option value="18">ALVARADO</option>}
            {props.Province_destination  === "3" && <option value="19">EL GUARCO</option>}
            {props.Province_destination  === "4" && <option value="20">BARVA</option>}
            {props.Province_destination  === "4" && (
              <option value="21">SANTO DOMINGO</option>
            )}
            {props.Province_destination  === "4" && (
              <option value="22">SANTA BARBARA</option>
            )}
            {props.Province_destination  === "4" && <option value="23">SAN RAFAELA</option>}
            {props.Province_destination  === "4" && <option value="24">SAN ISIDRO</option>}
            {props.Province_destination  === "4" && <option value="25">BELENA</option>}
            {props.Province_destination  === "4" && <option value="26">FLORES</option>}
            {props.Province_destination  === "4" && <option value="27">SAN PABLO</option>}
          </select>
          </div>
        </div>
      </div>
    </div>
  );
}
