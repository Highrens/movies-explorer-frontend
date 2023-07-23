import React, { useEffect, useState } from "react";
import { Form } from '../Form/Form';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const formConfig = {
  name: {
    required: "Вам необходимо имя",
    minLength: { 
      value: 3, 
      message: "Слишком коротко, прости, Ян" },
    maxLength: { value: 30,
      message: "Слишком длинно" },
  },
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
}

export function Register(props) {
  const [isErrors, setIsErrors] = useState(false);

  const { register, handleSubmit, formState: { errors }, } = useForm({mode: "onChange" });

  //Смотрим есть ли ошибки
  useEffect(() => {
      setIsErrors(errors?.name || errors?.email || errors.password)
  }, [errors.name, errors.email, errors.password]);

  function onSubmit (data){
    props.onSubmit(data)
  }

  return (
    <>
    <Form
    title={"Добро пожаловать!"}
    onSubmit={handleSubmit(onSubmit)}
    >
        <label className="form__input-placeholder" htmlFor="register-name">Имя</label>
        <input
          id="register-name"
          className="form__input"
          {...register("name", formConfig.name)}
        />
        <h2 className="form__input-error">{errors?.na && errors.name.message} </h2>  
        <label className="form__input-placeholder" htmlFor="register-email">Email</label>
        <input
          id="register-email"
          className="form__input"
          {...register("email", formConfig.email)}
        />
         <h2 className="form__input-error">{errors?.email && errors.email.message} </h2>  
        <label className="form__input-placeholder" htmlFor="register-name">Пароль</label>
        <input
          type="password"
          id="register-password"
          className="form__input"
          {...register("password", formConfig.password)}
        />
        <h2 className="form__input-error">{errors?.password && errors.password.message} </h2>  
        <h2 className="form__error">{props.error}</h2>
        <button className="form__submit-button" disabled={isErrors}>Зарегистрироваться</button>
        <h2 className="form__sign-in">Уже зарегистрированы? <Link to={'/sign-in'} className="form__sign-in-link">Войти</Link></h2>
    </Form>
    </>
  );
}
