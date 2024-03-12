import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import css from './Register.module.css'
import {IAuth} from "../../interfaces";
/**/
const Register = () => {
    const {register, handleSubmit} = useForm<IAuth>();

    const reg:SubmitHandler<IAuth> = (user) => {

    };

    return (
        <div className={css.Register}>
            <form onSubmit={handleSubmit(reg)}>
                <input type={'text'} placeholder={'username'} {...register('username')}/>
                <input type={'text'} placeholder={'password'} {...register('password')}/>
                <button>register</button>
            </form>

        </div>
    );
};

export {Register};