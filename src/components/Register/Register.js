import React, { useEffect, useState } from "react";
import { Form } from '../Form/Form';
import { Link } from 'react-router-dom';

export function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleRegisterSubmit (e){
    e.preventDefault();
    props.HandleRegisterSubmit({name, password, email})
  }

  // useEffect (()=>{
  //   props.handleHeaderLinkChange({
  //     name: 'Войти',
  //     link: '/sign-in'
  //   });
  // }, [])

  return (
    <>
    <Form
    title={"Добро пожаловать!"}
    onSubmit={handleRegisterSubmit}
    >
        <label className="input__placeholder" htmlFor="register-name">Имя</label>
        <input
          type="Name"
          id="register-name"
          placeholder=""
          name="Name"
          value={name || ''}
          className="form__input"
          onChange={handleNameChange}
          required
        />
        <label className="input__placeholder" htmlFor="register-email">Email</label>
        <input
          type="Email"
          id="register-email"
          placeholder=""
          name="Email"
          value={email || ''}
          className="form__input"
          onChange={handleEmailChange}
          required
        />
        <label className="input__placeholder" htmlFor="register-name">Пароль</label>
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
        
    </Form>
    <button className="form__submit-button">Зарегистрироваться</button>
    <h2 className="form__sign-in">Уже зарегистрированы? <Link to={'/sign-in'} className="form__sign-in-link">Войти</Link></h2>
    </>
  );
}
