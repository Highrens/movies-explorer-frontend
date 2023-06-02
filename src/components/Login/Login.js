import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import { Form } from '../Form/Form';

export function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleLoginSubmit (e){
    e.preventDefault();
    props.handleLoginSubmit({password, email})
  }

  return (
    <>
    <Form
      title={"Рады видеть!"}
      onSubmit={handleLoginSubmit}
    >
       <label className="form__input-placeholder" htmlFor ="rlogin-email">Email</label>
        <input
          type="email"
          id="login-email"
          placeholder=""
          name="Email"
          value={email || ''}
          className="form__input"
          onChange={handleEmailChange}
          required
        />
        <label className="form__input-placeholder" htmlFor ="register-name">Пароль</label>
        <input
          type="password"
          id="register-password"
          placeholder=""
          name="password"
          value={password || ''}
          className="form__input"
          onChange={handlePasswordChange}
          required
        />
        <button className="form__submit-button">Зарегистрироваться</button>
        <h2 className="form__sign-in">Ещё не зарегистрированы? <Link to={'/sign-up'} className="form__sign-in-link">Регистрация</Link></h2>
    </Form>
   
    </>
  );
}
