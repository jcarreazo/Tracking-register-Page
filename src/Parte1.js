import React from "react";
import Personalinfo from "./Personalinfo.js";
import Step from "./Step.js";

export default function Parte1(props) {
  const info = [
    "Enter your personal information to get closer to companies.",
    "Get to know better by adding your diploma,certificate and education life.",
    "Help companies get to know you better by telling then about your past experiences.",
  ];
  function handler(a) {
    return a ? "solid white 1px" : "solid #4e6584 1px";
  }
  function handler2(a) {
    return a ? "white" : "#4e6584";
  }

  function handler3(a) {
    return a ? " solid 1px white" : " solid 1px #4e6584";
  }
  return (
    <div>
      <div className="left-side shadow ">
        <div className="left-heading">
          <h3 className="titulo-left">Realizar envió</h3>
          <h3 className="paso">Paso {props.step}</h3>
          <p className="step-position">{info[props.info - 1]}</p>
          <ul className="progress-bar">
            <div>
              <div
                className="circle"
                style={{ border: handler(props.step >= 1) }}
              >
                <p style={{ color: handler2(props.step >= 1) }}>1 </p>
              </div>
              <li>Personal Information</li>
            </div>
            <div
              className="separation"
              style={{ borderLeft: handler3(props.step >= 2) }}
            ></div>
            <div>
              <div
                className="circle"
                style={{ border: handler(props.step >= 2) }}
              >
                <p style={{ color: handler2(props.step >= 2) }}>2</p>
              </div>
              <li style={{ color: handler2(props.step >= 2) }}>Education</li>
            </div>
            <div
              className="separation"
              style={{ borderLeft: handler3(props.step >= 3) }}
            ></div>
            <div>
              <div
                className="circle"
                style={{ border: handler(props.step >= 3) }}
              >
                <p style={{ color: handler2(props.step >= 3) }}>3</p>
              </div>
              <li style={{ color: handler2(props.step >= 3) }}>Work Experience </li>
            </div>
          </ul>
        </div>
      </div>

      <div className="right-side"></div>
    </div>
  );
}
