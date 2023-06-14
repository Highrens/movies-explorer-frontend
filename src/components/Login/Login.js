import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import { Form } from '../Form/Form';
import { useForm } from "react-hook-form";

const formConfig = {
  email: {
    required: "Введите почту",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Это не почта",
    },
  },
  password: {
    required: "Введите пароль",
  },
};

export function Login(props) {
  const [isErrors, setIsErrors] = useState(false);

  const { register, handleSubmit, formState: { errors }, } = useForm({mode: "onChange" });

  
  //Смотрим есть ли ошибки
  useEffect(() => {
    setIsErrors(errors?.email || errors?.password)
}, [errors.email, errors.password]);


  function onSubmit (data){
    //console.log(data);
    props.onSubmit(data)
  }

  return (
    <>
    <Form
      title={"Рады видеть!"}
      onSubmit={handleSubmit(onSubmit)}
    >
       <label className="form__input-placeholder" htmlFor ="rlogin-email">Email</label>
        <input
          id="login-email"
          className="form__input"
          {...register("email", formConfig.email)}
        />
        <h2 className="form__input-error">{errors?.email && errors.email.message} </h2>  

        <label className="form__input-placeholder" htmlFor ="register-name">Пароль</label>
        <input
          type="password"
          id="register-password"
          className="form__input"
          {...register("password", formConfig.password)}
        />
        <h2 className="form__input-error">{errors?.password && errors.password.message} </h2>  

        <h2 className="form__error">{props.error}</h2>
        <button className="form__submit-button" disabled={isErrors}>Войти</button>
        <h2 className="form__sign-in">Ещё не зарегистрированы? <Link to={'/sign-up'} className="form__sign-in-link">Регистрация</Link></h2>
    </Form>
   
    </>
  );
}
