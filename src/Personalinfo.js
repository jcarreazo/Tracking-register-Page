import React from "react";

export default function Personalinfo(props) {
  return (
    <div className="main-active">
      <div className="text">
        <h2>Your Personal Information</h2>
        <p>Enter your personal information to get closer to copanies.</p>
      </div>

      <div className="input-text">
        <div className="input-div">
          <label for="type_dni" className="form-label">
            Tipo Identificación
          </label>
          <select value={props.Type_dni || ""} name="type_dni" className="form-select selectorInfo" onChange={props.handlerChange} onBlur={props.handlerBlurSelect}>
            <option value="" selected>
              Seleccione una identificación
            </option>
            <option value="1">Cedula física</option>
            <option value="2">Cedula jurídica</option>
            <option value="3">DIMEX (Extranjero)</option>
            <option value="4">NITE (Extranjero)</option>
            <option value="5">Pasaporte/ID (Extranjero)</option>
          </select>
        </div>
        <div className="input-div">
          <div class="mb-3">
            <label for="dni" class="form-label">
              Número de identificación
            </label>
            <input
              type="text"
              className="form-control"
              id="dni"
              onChange={props.handlerChange}
              onBlur={props.handlerBlur}
              name="dni"
              disabled={props.DisabledName ? 'disabled' : ''}
              value={props.Dni || ""}
            />
          </div>
        </div>
      </div>

      <div className="input-text">
 
            <div class="mb-3">
              <label for="name" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={props.handlerChange}
                value={props.Name || ""}
                name="names"
                disabled={props.Disabled ? 'disabled' : ''}
              />
            </div>
 
        <div className="input-div">
          <div class="mb-3">
            <label for="surname" class="form-label">
              Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              id="surname"
              onChange={props.handlerChange}
              value={props.Surname || ""}
              name="surnames"
              disabled={props.Disabled ? 'disabled' : ''}
            />
          </div>
        </div>
      </div>

      <div className="input-text">
        <div class="mb-3">
          <label for="cellphone" class="form-label">
            Numero de Celular
          </label>
          <input
            type="text"
            className="form-control"
            id="cellphone"
            onChange={props.handlerChange}
            value={props.Cellphone || ""}
            name="cellphone"
            disabled={props.Disabled ? 'disabled' : ''}
          />
        </div>

        <div className="input-div">
        <div class="mb-3">
          <label for="email" class="form-label">
            Correo Electronico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={props.handlerChange}
            value={props.Email || ""}
            name="email"
            disabled={props.Disabled ? 'disabled' : ''}
          />
        </div>
        </div>
      </div>
    </div>
  );
}
