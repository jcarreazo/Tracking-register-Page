import "./App.css";
import Parte1 from "./Parte1.js";
import React from "react";
import Personalinfo from "./Personalinfo";
import Education from "./Education.js";
import Work from "./Work.js";
import Congrat from "./Congrat"
let data = require("./customers.json");
let DB_flag = false;
let array = [];

function App() {
  const [content, setContent] = React.useState({
    number: 1,
    disablename: "disabled",
    disable: "disabled",
    disabledelivery:"disabled"
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
const empty={
  id: "",
  type_dni: "",
  dni: "",
  names: "",
  surnames: "",
  cellphone: "",
  email: "",
}
  const handleBlur = (e) => {
    //QUery de select

    const newCustomer = data.filter((s) => s.dni === e.target.value);
    data.map((items) => array.push(items.id));

    if (
      newCustomer[0] !== undefined &&
      newCustomer[0].dni === e.target.value &&
      newCustomer[0].type_dni === customer.type_dni
    ) {
      customerChange({
        ...customer,
        id: newCustomer[0].id,
        type_dni: newCustomer[0].type_dni,
        dni: newCustomer[0].dni,
        names: newCustomer[0].names,
        surnames: newCustomer[0].surnames,
        cellphone: newCustomer[0].cellphone,
        email: newCustomer[0].email,
      });
      setContent((prevCount) => {
        return { ...prevCount, disable: "disabled", disablename: "disabled" };
      });
      DB_flag = false;
    } else {
      alert("The customer doesnt exist");
      console.log(customer);
      setContent((prevCount) => {
        return { ...prevCount, disable: "", disablename: "" };
      });
      customerChange({
        ...customer,
        id: Math.max(...array) + 1,
      });
      
      customerChange({
        ...customer,
        type_dni: "",
        dni: "",
        names: "",
        surnames: "",
        cellphone: "",
        email:"",
      });
      DB_flag = true;
    }
  };


  const handleSelect = (e) => {
    deliveryChange({
      ...delivery,
      [e.target.name]: e.target.value,
    });
    if (e.target.value !== "") {
      setContent((prevCount) => {
        return { ...prevCount,  disabledelivery:""};
      })
      }else{
      setContent((prevCount) => {
        return { ...prevCount,  disabledelivery:"disabled"};
      })
    }
  };
    
  

  const handleBlurSelect = (e) => {
    customerChange({
      ...customer,
      [e.target.name]: e.target.value,
    });
    if (e.target.value !== "") {
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
            handlerChangeDNI={handleSelect}
              handlerChange={handleChangeSelector}
              Type_transport={delivery.type_transport}
              Pickup_address={delivery.pickup_address}
              Pickup_date={delivery.pickup_date}
              Pickup_time={delivery.pickup_time}
              Province={delivery.province_origin}
              Canton_origin={delivery.canton_origin}
              Province_destination={delivery.province_destination}
              Disabled={content.disabledelivery}
            />
          )}
          {content.number === 3 && (
            <Work
              Canton_destination={delivery.canton_destination}
              Province_destination={delivery.province_destination}
              handlerChange={handleChangeSelector}
              Pickup_address={delivery.pickup_address}
              Delivery_address={delivery.delivery_address}
            />
          )}
          <div className="buttons">
            {content.number >= 2 && content.number<4 && (
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

            {content.number === 4 && (
            <Congrat
            />
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
