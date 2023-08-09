// AuthPage.js
import { useState } from 'react';
import styles from './AuthPage.module.scss';
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function AuthPage(props){
    return(
        <main>
            <h1>Auth Page</h1>
            <SignUpForm setUser={props.setUser}/>
            <LoginForm setUser={props.setUser}/>
            <UserLogOut setUser={props.setUser}/>



        </main>
    )
}