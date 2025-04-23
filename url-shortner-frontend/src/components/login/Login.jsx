import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from '../textField/TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        mode: "onTouched",
    });

    const greetings = [
        'Welcome Back',
        'Nice to see you',
        'Howdy, we missed you!',
        'Hey there, good to have you back.',
        'It is so exciting to have you back!',
        'Look who’s back!',
        'Back in action—love to see it!',
        'The place wasn’t the same without you.'
    ];



    const loginHandler = async (data) => {
        console.log('data: ', data)
        setLoader(true);
        try {
            const { data: response } = await api.post(
                "/api/auth/public/login",
                data
            );
            // store the token in local storage:
            localStorage.setItem('JWT_TOKEN', JSON.stringify(response.token))
            console.log(response.token)
            reset();
            navigate("/");
            toast.success(greetings[Math.floor(Math.random() * greetings.length)])
        } catch (error) {
            console.log(error);
            toast.error("Some has gone wrong, pleaese recheck your username and password.")
        } finally {
            setLoader(false);
        }
    };

  return (
    <div
        className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
        <form onSubmit={handleSubmit(loginHandler)}
            className="sm:w-[450px] w-[360px]  shadow-custom py-8 sm:px-8 px-4 rounded-md">
            <h1 className="text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl">
                Sign In
            </h1>

            <hr className='mt-2 mb-5 text-black'/>

            <div className="flex flex-col gap-3">
                <TextField
                    label="UserName"
                    required
                    id="username"
                    type="text"
                    message="*Username is required"
                    placeholder="Type your username"
                    register={register}
                    errors={errors}
                />

                <TextField
                    label="Password"
                    required
                    id="password"
                    type="password"
                    message="*Password is required"
                    placeholder="Type your password"
                    register={register}
                    min={6}
                    errors={errors}
                />
                
            </div>

            <button
                disabled={loader}
                type='submit'
                className='bg-customRed font-semibold text-white  bg-custom-gradient w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3'>
                {loader ? "Loading..." : "Sign In"}
            </button>

            <p className='text-center text-sm text-slate-700 mt-6'>
                Don't have an account? 
                <Link
                    className='font-semibold underline hover:text-black'
                    to="/register">
                        <span className='text-btnColor'> Register</span>
                </Link>
            </p>
        </form>
    </div>
  )
}

export default Login