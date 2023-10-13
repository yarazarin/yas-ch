import React from "react";
import "./MainPage.css";
import "font-awesome/css/font-awesome.min.css";
import signalApp from "../img/signal-app.png";

const MainPage = () => {
  const phoneNumber = "+46766868336";

  // const handleCallClick = () => {
  //   const confirmCall = window.confirm(
  //     `Are you sure you want to call ${phoneNumber}?`
  //   );
  //   if (confirmCall) {
  //     window.location.href = `tel:${phoneNumber}`;
  //   }
  // };

  return (
    <div className="mainPage">
      <img src="/your-image-path.jpg" alt="" className="owner-image" />
      <div className="main_component">
        <header>
          <h1>Yasaman Choubeh</h1>
          <h4>Program Manager</h4>
          <small style={{ color: "red" }}>
            <i class="fa-solid fa-location-dot" style={{ fontSize: "18px" }} />{" "}
            (GMT-4){" "}
          </small>
        </header>
      </div>
      <div>
        <address>
          <a
            href="https://www.linkedin.com/in/yasaman-choubeh"
            target="_blank"
            className="address-link"
            style={{ fontSize: "20px" }}
          >
            <i class="fa-brands fa-linkedin" style={{ fontSize: "30px" }} />{" "}
            @yasaman-choubeh
          </a>

          <a href="mailto:yasaman@united4iran.org" className="address-link">
            <i className="far fa-envelope" style={{ fontSize: "25px" }}></i>{" "}
            yasaman@united4iran.org
          </a>

          <p className="address-link">
            <img
              src={signalApp}
              alt="Signal App Icon"
              style={{ width: "30px" }}
            />{" "}
            Signal App: {phoneNumber}
          </p>
        </address>
      </div>
    </div>
  );
};

export default MainPage;
