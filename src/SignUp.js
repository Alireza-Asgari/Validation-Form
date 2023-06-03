import React, { useState , useEffect } from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {

    const [data,setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccept:false
    })

    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({});

    useEffect(()=>{
        setErrors(validate(data,"signup"));
        console.log(errors)
    },[data])

    const changeHandeler = event =>{
        if(event.target.name === "isAccept"){
            setData({...data , [event.target.name] : event.target.checked })
        }else{
            setData({...data , [event.target.name] : event.target.value })
        }
    }
    const focusHandeler = event =>{
        setTouched({ ...touched , [event.target.name]: true})
    }
    
    const submitHandeler = event =>{
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("You signed up succesfuly","success");
        }else{
            notify("Valid data","error");
            setTouched({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccept:true
            })
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandeler} className={styles.formContainer}>
                <h2 className={styles.header}>SignUp</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input className = {errors.name && touched.name ? styles.uncompleted : styles.formInput}
                    type='text'
                    name='name'
                    value={data.name} 
                    onChange={changeHandeler}
                    onFocus={focusHandeler}
                    />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input className = {errors.email && touched.email ? styles.uncompleted : styles.formInput}
                    type='email' 
                    name='email'
                    value={data.email} 
                    onChange={changeHandeler}
                    onFocus={focusHandeler}
                    />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input className = {errors.password && touched.password ? styles.uncompleted : styles.formInput}
                    type='password'
                    name='password'
                    value={data.password} 
                    onChange={changeHandeler}
                    onFocus={focusHandeler}
                    />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>

                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input className = {errors.confirmPassword && touched.confirmPassword ? styles.uncompleted : styles.formInput}
                    type='password'
                    name='confirmPassword'
                    value={data.confirmPassword} 
                    onChange={changeHandeler}
                    onFocus={focusHandeler}
                    />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>

                <div className={styles.formField}>
                    <div className={styles.cheackBoxContainer}>
                        <label>I accept terms of privacy policy</label>
                        <input className = {errors.isAccept && touched.isAccept ? styles.uncompleted : styles.formInput}
                        type='checkbox'
                        name='isAccept'
                        value={data.isAccept} 
                        onChange={changeHandeler}
                        onFocus={focusHandeler}
                        />
                    </div>
                    {errors.isAccept && touched.isAccept && <span>{errors.isAccept}</span>}
                </div>

                <div className={styles.formButtons}>
                    <Link to='/login'>Login</Link>
                    <button type='submit'>SignUp</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
