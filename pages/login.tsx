import React, { useMemo, useState } from 'react'
import Layout from '../components/Layout'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { requireValidationMessage } from '../src/constants'
import { ILogin } from '../src/interfaces'

const Login = () => {

    
    const validationSchema = useMemo(() => yup.object({
        username: yup
        .string()
        .required(`${requireValidationMessage} usuario`),
        password: yup
        .string()
        .required(`${requireValidationMessage}a clave`),
    }), 
    [],
    )

    const {
        handleSubmit, 
        register, 
        formState: {errors},} = useForm<ILogin>({
        resolver: yupResolver(validationSchema),
    })


    const handleLogin = (data: ILogin) => {
        console.log('login_dado => ', data)
    }

    return (
        <Layout>
            <div className='container'>
                <p className="flow-text center white-text">Login</p>
                <div className="row"></div>
                    <form className="col s12" onSubmit={handleSubmit(handleLogin)}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input 
                                id="username" 
                                type="text" 
                                className="validate"
                                name="username" 
                                {...register('username')}
                                placeholder='Usuario'
                                //required
                                />
{/*                                 <label 
                                htmlFor="username" 
                                className={`${errors.username ? 'red-text' : ''}`}
                                >
                                    Usuario
                                </label> */}
                                {
                                    errors.username 
                                    && 
                                    (
                                        <span className='helper-text red-text'>{errors.username.message}</span>
                                    )
                                }
                            </div>
                            <div className="input-field col s6">
                                <input 
                                id="password" 
                                type="text" 
                                className='validate'
                                name="password" 
                                {...register('password')}
                                placeholder='Clave'
                                //required
                                />

{/*                                     <label 
                                    htmlFor="password"
                                    className={`${errors.password ? 'red-text': ''}`}
                                    >
                                        Clave
                                    </label> */}
                                    {errors.password && (
                                <span className="helper-text red-text">
                                    {errors.password.message}
                                </span>
                                )}
                            </div>
                            <div className="input-field col s6">
                                <button 
                                className='btn blue waves-effect waves-light'
                                type='submit'>Iniciar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
        </Layout>
    )
}

export default Login
