import React, { useContext, useRef, useState } from "react";
import useGetUsers from "../hooks/useGetUsers";
import "../styles/PasswordRecovery.scss";

import logo from "../assets/logos/logo_yard_sale.svg";
import ModalConfirm from "../components/ModalConfirm";

const PasswordRecovery = () => {
  const { users } = useGetUsers();
  const [modal, setModal] = useState(false);
  const form = useRef(null);

  const validateEmail = () => {
    const userInputs = new FormData(form.current);

    const data = {
      email: userInputs.get("email"),
    };

    return users.some((user) => user.email === data.email);
  };

  return (
    <div className="PasswordRecovery">
      <div className="PasswordRecovery-container">
        {modal ? (
          <ModalConfirm title={"Email sent!"} message={"Check your inbox"} />
        ) : null}
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Password recovery</h1>
        <p className="subtitle">
          Inform the email address used to create your account
        </p>
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="input input-email"
            required
          />
          <input
            type="button"
            value="Confirm"
            className="primary-button login-button"
            onClick={() => (validateEmail() ? setModal(true) : setModal(false))}
          />
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
