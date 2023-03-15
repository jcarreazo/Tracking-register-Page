import React from "react";

export default function Step(props) {
  return (
    <div>
      {props.IdCheck === "1" && <option value="1">ESCAZA</option>}
      {props.IdCheck === "1" && <option value="2">DESAMPARADOS</option>}
      {props.IdCheck === "1" && <option value="3">ASERRO</option>}
      {props.IdCheck === "1" && <option value="4">MORA</option>}
      {props.IdCheck === "1" && <option value="5">GOICOECHEA</option>}
      {props.IdCheck === "1" && <option value="6">SANTA ANA</option>}
      {props.IdCheck === "1" && <option value="7">ALAJUELITA</option>}
      {props.IdCheck === "1" && <option value="8">VAZQUEZ DE CORONADO</option>}
      {props.IdCheck === "1" && <option value="9">TIBAS</option>}
      {props.IdCheck === "1" && <option value="10">MORAVIA</option>}
      {props.IdCheck === "1" && <option value="11">MONTES DE OCA</option>}
      {props.IdCheck === "1" && <option value="12">CURRIDABAT</option>}
      {props.IdCheck === "2" && <option value="13">ATENAS</option>}
      {props.IdCheck === "2" && <option value="14">POAS</option>}
      {props.IdCheck === "3" && <option value="15">PARAISO</option>}
      {props.IdCheck === "3" && <option value="16">LA UNION</option>}
      {props.IdCheck === "3" && <option value="17">OREAMUNO</option>}
      {props.IdCheck === "3" && <option value="18">ALVARADO</option>}
      {props.IdCheck === "3" && <option value="19">EL GUARCO</option>}
      {props.IdCheck === "4" && <option value="20">BARVA</option>}
      {props.IdCheck === "4" && <option value="21">SANTO DOMINGO</option>}
      {props.IdCheck === "4" && <option value="22">SANTA BARBARA</option>}
      {props.IdCheck === "4" && <option value="23">SAN RAFAELA</option>}
      {props.IdCheck === "4" && <option value="24">SAN ISIDRO</option>}
      {props.IdCheck === "4" && <option value="25">BELENA</option>}
      {props.IdCheck === "4" && <option value="26">FLORES</option>}
      {props.IdCheck === "4" && <option value="27">SAN PABLO</option>}
    </div>
  );
}
