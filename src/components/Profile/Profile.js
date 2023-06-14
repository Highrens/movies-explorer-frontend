import { useForm } from "react-hook-form";
import "./Profile.css";
import { Header } from "../Header/Header.js";
import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";



export function Profile(props) { 
  const [isErrors, setIsErrors] = useState(true);
  const User = React.useContext(CurrentUserContext);

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
      required: "Вам необходима почта",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Это не почта",
      },
      onChange: (value) => {
        console.log(value);
        return value !== 'wertus98@gmail.com' || 'f';
      }
    },
  };

  const { register, setValue,  handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      name: User.name,
      email: User.email
    },
    mode: "onChange"
  });

  //Когда пользователь загрузился, устанавливаем его имя
  useEffect(()=> {
    if (User) {
      setValue('name', User.name);
      setValue('email', User.email);
    }
  }, [User, setValue])

//Проверяем совпадения со стандартными значениями
const isAnyFieldDifferent = watch('name') !==  User.name || watch('email') !== User.email;
  useEffect(() => {
    setIsErrors(!isAnyFieldDifferent);
  }, [isAnyFieldDifferent]);

  //Смотрим есть ли ошибки
  useEffect(() => {
    console.log(errors);
    setIsErrors(errors?.name || errors?.email)
    setIsErrors(!isAnyFieldDifferent);
  }, [errors.name, errors.email]);

  function onSubmit(data) {
    props.handleProfileEdit(data);
    console.log(data);
  }


  return (
    <>
      <Header />
      <main aria-label="profile" className="profile">
        <h2 className="profile__title">{"Привет, " + User.name + "!"}</h2>
        <div className="profile__info">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="profile__info-part">
              <label htmlFor="profileName" className="profile__info-text">
                Имя
              </label>
              <input
                id="profileName"
                className="profile__info-text"
                {...register("name", formConfig.name)}
              />
            </div>

            <div className="profile__info-part">
              <label htmlFor="profileEmail" className="profile__info-text">
                Email
              </label>
              <input
                id="profileEmail"
                className="profile__info-text"
                {...register("email", formConfig.email)}
              />
            </div>
            <h2 className="profile__edit-error"> {errors?.name && errors.name.message} </h2>  
            <h2 className="profile__edit-error"> {errors?.email && errors.email.message}</h2>
            <h2 className={props.err === ("Успешно обновленно!") ? ("profile__edit-sucseed") : ("profile__edit-error") }> {props.err}</h2>
            <button className="profile__edit"  disabled={isErrors}>Редактировать</button>
          </form>
        </div>

        <button className="profile__logout" onClick={props.handleLogout}>
          Выйти из аккаунта
        </button>
      </main>
    </>
  );
}
