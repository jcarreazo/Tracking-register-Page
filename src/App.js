import "./App.css";
import Parte1 from "./Parte1.js";
import React from "react";
import Personalinfo from "./Personalinfo";
import Education from "./Education.js";
import Work from "./Work.js";
let data = require("./customers.json");
let array = [];
let DB_flag = false;

function App() {
  const [content, setContent] = React.useState({
    number: 1,
    disablename: "disabled",
    disable: "disabled",
  });
  const [customer, customerChange] = React.useState({
    id: "",
    type_dni: "",
    dni: "",
    names: "",
    surnames: "",
    cellphone: "",
    email: "",
  });

  const [delivery, deliveryChange] = React.useState({
    uuid: "",
    guide_number: "",
    type_transport: "",
    pickup_address: "",
    pickup_date: "",
    pickup_time: "",
    province_origin: "",
    canton_origin: "",
    delivery_address: "",
    canton_destination: "",
    province_destination: "",
    customer_id: "",
  });

  const handleBlur = (e) => {
    //QUery de select

    for (var i = 0; i < data.length; i++) {
      array.push(data[i].id);
      if (
        data[i].dni === e.target.value &&
        data[i].type_dni === customer.type_dni
      ) {
        customerChange({
          ...customer,
          id: data[i].id,
          type_dni: data[i].type_dni,
          dni: data[i].dni,
          names: data[i].names,
          surnames: data[i].surnames,
          cellphone: data[i].cellphone,
          email: data[i].email,
        });
        setContent((prevCount) => {
          return { ...prevCount, disable: "disabled", disablename: "disabled" };
        });
        DB_flag = false;
        throw "exit";
      }
    }
    alert("The customer doesnt exist");
    setContent((prevCount) => {
      return { ...prevCount, disable: "", disablename: "" };
    });

    customerChange({
      ...customer,
      id: Math.max(...array) + 1,
    });
    Math.max(...array);
    DB_flag = true;
  };

  const handleBlurSelect = (e) => {
    if ((e.target.name = "type_dni")) {
      setContent((prevCount) => {
        return { ...prevCount, disablename: "" };
      });
    }
  };
  const handleChange = (e) => {
    customerChange({
      ...customer,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleChangeSelector = (e) => {
    deliveryChange({
      ...delivery,
      [e.target.name]: e.target.value.trim(),
    });
  };

  function increase() {
    if (DB_flag === true) {
      //Mandale su inser into
      const errores = false;
      if (errores === true) {
        alert("problemas con el servidor");
      } else {
        setContent((prevCount) => {
          return { ...prevCount, number: prevCount.number + 1 };
        });
        setContent((prevCount) => {
          return { ...prevCount, disable: "disabled", disablename: "disabled" };
        });
        DB_flag = false;
      }
    } else {
      setContent((prevCount) => {
        return { ...prevCount, number: prevCount.number + 1 };
      });
    }
    console.log(delivery);
  }

  function decrease() {
    setContent((prevCount) => {
      return { ...prevCount, number: prevCount.number - 1 };
    });
  }
  return (
    <div className="App">
      <div className="container-card ">
        <Parte1 info={content.number} step={content.number} />
        <div className="right-side shadow">
          {content.number === 1 && (
            <Personalinfo
              handlerBlurSelect={handleBlurSelect}
              handlerChange={handleChange}
              handlerBlur={handleBlur}
              Name={customer.names}
              Surname={customer.surnames}
              Cellphone={customer.cellphone}
              Email={customer.email}
              Disabled={content.disable}
              DisabledName={content.disablename}
              Dni={customer.dni}
              Type_dni={customer.type_dni}
            />
          )}
          {content.number === 2 && (
            <Education
              handlerChange={handleChangeSelector}
              Type_transport={delivery.type_transport}
              Pickup_address={delivery.pickup_address}
              Pickup_date={delivery.pickup_date}
              Pickup_time={delivery.pickup_time}
              Province={delivery.province_origin}
              Canton_origin={delivery.canton_origin}
              Province_destination={delivery.province_destination}
            />
          )}
          {content.number === 3 && (
            <Work
              Province_destination={delivery.province_destination}
              handlerChange={handleChangeSelector}
              Pickup_address={delivery.pickup_address}
              Delivery_address={delivery.delivery_address}
            />
          )}
          <div class="buttons">
            {content.number >= 2 && (
              <button
                className="atras btn btn-outline-primary"
                onClick={decrease}
              >
                Atras
              </button>
            )}
            {content.number < 3 && (
              <button className="btn btn-outline-primary" onClick={increase}>
                Continuar
              </button>
            )}
            {content.number === 3 && (
              <button className="btn btn-outline-warning" onClick={increase}>
                Finalizar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
