import { useForm } from "react-hook-form";
import { Eye, EyeSlash, FacebookLogo, GoogleLogo } from 'phosphor-react'
import { Button, Card, Divider, Input, Label } from 'keep-react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


// img hosting imgbb
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const { createUser, signInWithGoogle } = useContext(AuthContext);



    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    // password visibility functionalities
    const handlePasswordVisible = () => {
        setPasswordVisible(!passwordVisible)
    }

    const handleConfirmPasswordVisible = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible)
    }

    const onSubmit = async (data) => {
        console.log(data);

        //upload image into imgbb and then ger the url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        // if image hosting successful and bring back the link
        if (res.data.success) {
            const image_url = res.data.data.display_url;
            console.log(image_url);
            createUser(data.email, data.password)
                .then(res => {
                    const userInfo = {
                        name: data.name,
                        email: data.email,
                        password: data.password,
                        address: data.phone,
                        phone: data.phone,
                        image: image_url,

                    }
                    console.log(userInfo.image);
                    axiosPublic.post('/users', userInfo)
                        .then(res => {
                            // console.log(res);
                            if (res.data.insertedId) {
                                reset();
                                Swal.fire("Account has been created.");
                                navigate('/');
                            }
                        })
                        .catch(error => {
                            console.error(error);
                            const errorCode = error.code;
                            const errorMessage = error.message;

                            //console.log(errorCode, errorMessage);

                            if (errorCode === 'auth/email-already-in-use') {
                                Swal.fire('Error', 'Email is already in use.', 'error');
                            } else if (errorCode === 'auth/invalid-email') {
                                Swal.fire('Error', 'Invalid email address.', 'error');
                            } else if (errorCode === 'auth/weak-password') {
                                Swal.fire('Error', 'Password is too weak. It should be at least 6 characters.', 'error');
                            } else {
                                Swal.fire('Error', 'An error occurred during registration.', 'error');
                            }
                        })

                })
        }
        console.log(res.data);
    }


    // handle login using direct email

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                res.user
                // sending data to database who sign in using google
                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        //console.log(res.data);
                        navigate('/');
                    })
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
                // Navigate after location
                //navigate(from, { replace: true });
            })
            // eslint-disable-next-line no-unused-vars
            .catch(error => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "error",
                    title: "Something went wrong. Try again!"
                });

            })
    }

    // Watch password value to validate confirm password
    const password = watch('password');
    return (
        <div className='flex justify-center mt-10 mb-20'>

            {/* helmet */}
            <Helmet>
                <title>Register - Gadget24</title>
            </Helmet>

            {/* <Card className="w-96"> */}
            <div className="xl:w-1/3 md: w-2/3" >
                <Card.Content className="space-y-3">
                    <h3 className='text-4xl font-bold text-center'>Register</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">


                        <fieldset className=" md:grid md:grid-cols-2 md:gap-10 space-y-1">

                            <fieldset className="space-y-1">
                                <Label htmlFor="name">Name*</Label>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        {...register('name', { required: true })}
                                        placeholder="Enter your name" />
                                    {errors.name && <p className="text-red-500">Name is required</p>}
                                </div>
                            </fieldset>

                            <fieldset>
                                <Label htmlFor="email">Email*</Label>
                                <div className="relative">
                                    <Input
                                        type="email"
                                        placeholder="Enter email"
                                        {...register('email', {
                                            required: true,
                                        })} />
                                    {errors.email && <p className="text-red-500">Email is required</p>}

                                </div>
                            </fieldset>

                        </fieldset>


                        <fieldset className="md:grid md:grid-cols-2 md:gap-10">

                            <fieldset className="space-y-1">
                                <Label htmlFor="password">Password*</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        placeholder="Enter password"
                                        type={passwordVisible ? 'text' : 'password'}
                                        name='password'
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 6,
                                                message: 'Password must be at least 6 characters',
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: 'Password must be at most 20 characters',
                                            },

                                            pattern: {
                                                value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                                                message: 'Password must contain at least one uppercase letter and one special character',
                                            },
                                        })} />
                                    <button
                                        onClick={handlePasswordVisible}
                                        className='absolute inset-y-0 right-0 flex items-center px-4'>
                                        {passwordVisible ? <EyeSlash /> : <Eye />}
                                    </button>
                                </div>
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </fieldset>

                            <fieldset className="space-y-1">
                                <Label htmlFor="password">Confirm Password*</Label>
                                <div className="relative">
                                    <Input
                                        className="w-full"
                                        placeholder="Confirm Password"
                                        type={confirmPasswordVisible ? 'text' : 'password'}
                                        {...register('confirmPassword', {
                                            required: 'Confirm Password is required',
                                            validate: value =>
                                                value === password || 'Password did not match',
                                        })}
                                    />
                                    <button
                                        onClick={handleConfirmPasswordVisible}
                                        className='absolute inset-y-0 right-0 flex items-center px-4'>
                                        {confirmPasswordVisible ? <EyeSlash /> : <Eye />}
                                    </button>

                                </div>
                                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                            </fieldset>

                        </fieldset>

                        <fieldset className="space-y-1">
                            <Label htmlFor="address">Address*</Label>
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="Enter your address"
                                    {...register('address', { required: true })}
                                />
                                {errors.address && <p className="text-red-500">Address is required</p>}
                            </div>
                        </fieldset>

                        <fieldset className="space-y-1">
                            <Label htmlFor="phone">Phone*</Label>
                            <div className="relative">
                                <Input
                                    type="number"
                                    placeholder="Enter your phone number"
                                    {...register('phone', { required: true })}
                                />
                                {errors.phone && <p className="text-red-500">Phone Number is required</p>}
                            </div>
                        </fieldset>

                        {/* upload image */}
                        <fieldset className="space-y-1">
                            <Label className="mt-3">Upload Image</Label>
                            <div className="relative">
                                <input
                                    {...register('image')}
                                    type="file"
                                    className="mt-2 mb-2"
                                />
                                {errors.image && <p className="text-red-500">Image is required</p>}
                            </div>
                        </fieldset>


                        <Button className="!mt-3 block w-full" size="xs" color="secondary" variant="outline">
                            Register
                        </Button>
                    </form>


                    <h3 className='text-sm'>Already have an account? <NavLink to='/login' className='underline text-blue-500 '>Login now</NavLink></h3>
                    <Divider>Or</Divider>
                    <div className="flex items-center justify-between gap-3">

                        {/* google */}
                        <Button onClick={handleGoogleSignIn} size="xs" variant="outline" color="secondary" className="w-full">
                            <GoogleLogo size={20} className="mr-1.5" />
                            Google
                        </Button>

                        {/* facebook */}
                        <Button size="xs" variant="outline" color="secondary" className="w-full">
                            <FacebookLogo size={20} className="mr-1.5" />
                            Facebook
                        </Button>
                    </div>
                </Card.Content>
            </div>
            {/* </Card> */}
        </div>
    );
};

export default Register;