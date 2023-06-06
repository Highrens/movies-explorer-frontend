import React, { useEffect, useState } from "react";
import './Form.css';
import logo from '../../images/logo.svg';

export function Form(props) {
  return (
    <section aria-label="form" className="form">
      <a href='/'>
        <img className="form__logo" src={logo} alt="Логотип Сайта movies" />
      </a>     
      <h2 className="form__title">{props.title}</h2>
      <form
        onSubmit={props.onSubmit}
        className="form__form"
        name='form__form'
      >
        {props.children}
      </form>
    </section>
  );
}
