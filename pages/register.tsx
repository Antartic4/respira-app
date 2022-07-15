import React, { useMemo, useState } from 'react'
import Layout from '../components/Layout'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { requireValidationMessage } from '../src/constants'
import { IRegister } from '../src/interfaces'

const Register = () => {

    
    const validationSchema = useMemo(() => yup.object({

        username: yup
        .string()
        .required(`${requireValidationMessage} usuario`)
        .min(5)
        .max(30)
        ,

        password: yup
        .string()
        .required(`${requireValidationMessage}a clave`)
        .min(5)
        .max(30)
        ,

        name: yup
        .string()
        .required(`${requireValidationMessage} nombre`)
        .min(1)
        .max(30)
        ,

        email: yup
        .string()
        .email(`Email no es valido`)
        .required(`${requireValidationMessage} email`)
        ,

        address: yup
        .string()
        .required(`${requireValidationMessage}a direccion`)
        .min(1)
        .max(100)
        ,

        age: yup
        .string()
        .required(`${requireValidationMessage}a edad`)
        .min(1)
        .max(100)
        ,

    }), 
    [],
    )

    const {
        handleSubmit, 
        register, 
        formState: {errors},} = useForm<IRegister>({
        resolver: yupResolver(validationSchema),
    })


    const handleRegister = async (data: IRegister) => {
        console.log('registro_dado => ', data)
    }

    return (
    <Layout>
      <div className='container'>
        <p className="flow-text center white-text">Regístrate</p>
        <div className="row"></div>
        <form className="col s12" 
        onSubmit={handleSubmit(handleRegister)} 
        autoComplete='off'>


          {/* AQUI EMPIEZA LA FILA DE USUARIO / CLAVE */}

          <div className="row">
            <div className="input-field col s6">
              <input 
                id="username" 
                type="text" 
                className="validate" 
                name="username" 
                {...register('username')} 
                placeholder='Usuario'/>
              {errors.username && (<span className='helper-text red-text'>{errors.username.message}</span>)}
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
                {errors.password && (<span className="helper-text red-text"> {errors.password.message}</span>)}
              </div>
            </div>

          {/* AQUI EMPIEZA LA FILA DE Nombre / Email */}         

            <div className="row">
              <div className="input-field col s6">
                <input 
                  id="name" 
                  type="text" 
                  className="validate"
                  name="name" 
                  {...register('name')}
                  placeholder='Nombre'
                  //required
                  />
                  {
                      errors.name 
                                    && 
                                    (
                                        <span className='helper-text red-text'>{errors.name.message}</span>
                                    )
                                }
                            </div>
                            <div className="input-field col s6">
                                <input 
                                id="email" 
                                type="text" 
                                className='validate'
                                name="email" 
                                {...register('email')}
                                placeholder='Email'
                                //required
                                />
                                    {errors.email && (
                                <span className="helper-text red-text">
                                    {errors.email.message}
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

export default Register
