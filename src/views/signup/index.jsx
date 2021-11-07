import { BlackSubmit } from "../../components/Buttons"

import * as React from 'react';
import {Controller, useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {
    checkPhoneNumber,
    extractMessageAndShow,
    validatePhoneNumber,
  } from '../../utils';
import {useMutation} from 'react-query';
import {register, RegisterPayload} from '../../api';


Yup.addMethod(Yup.string, 'validatePhone', function () {
    return this.test({
      name: 'phone',
      message: 'Phone is not valid',
      test: validatePhoneNumber,
    });
});

const RegisterSchema = Yup.object().shape({
    name: Yup.string().trim().required('Required'),
    username: Yup.string().trim().required('Required'),
    // phone: Yup.string().required('Required').validatePhone(),
    phoneNumber: Yup.string()
      .required('Required')
      .matches(/[0-9]/g, 'Invalid Phone Number')
      .length(11, 'Phone Number must be 11 digits long'),
    // phone: Yup.string().required('Required').validatePhone(),
  
    email: Yup.string().trim().email('Invalid Email').required('Required'),
    password: Yup.string().required('Required').min(4, 'Minimun length of 4'),
    confirmPassword: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password'), null], 'Passwords don\'t match'),
});

const initialValues = process.env.NODE_ENV === "development"
  ? {
      name: 'classified',
      email: 'classified@test.com',
      username: 'somebody',
      phoneNumber: '07000119922',
      password: 'Qwertyuiop12#',
      confirmPassword: 'Qwertyuiop12#',
    }
  : {
      name: '',
      email: '',
      username: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
};



const SignUp = () => {
    return (
        <div>
            <form action="#">
                <input className="default-input" type="text" placeholder="What's your full name?"/>
                <input className="default-input" type="email" name="email" id="email" placeholder="Drop your email" />
                <input className="default-input" type="text" name="username" placeholder="Create a Username" />
                <input className="default-input" type="number" placeholder="Phone Number"  />
                <input type="password" className="default-input" placeholder="Create a Password" />
                <input type="password" className="default-input" placeholder="Pls confirm your Password" />
                <BlackSubmit text="Create Account" />
            </form>
        </div>
    )
}

export default SignUp