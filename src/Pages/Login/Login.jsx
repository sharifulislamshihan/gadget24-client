/* eslint-disable react/no-unescaped-entities */
import { Envelope, Eye, EyeSlash, FacebookLogo, GoogleLogo, Lock } from 'phosphor-react'
import { Button, Card, Divider, Input, InputIcon, Label } from 'keep-react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    // password visible function
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handlePasswordVisible = () => {
        setPasswordVisible(!passwordVisible)
    }

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(res => {
                console.log(res.user.emailVerified);
                if (res.user.emailVerified) {
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
                    navigate(from, { replace: true });
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Complete Your Registration",
                    });
                }
                form.reset();

            })
            .catch(error => {
                // toast.error(error.message, { position: "top-right" });
                if (error.code === 'auth/invalid-email') {

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
                        title: "Invalid email."
                    });

                }
                else if (error.code === 'auth/wrong-password') {

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
                        title: "Invalid password."
                    });

                }
                else {

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
                        title: "Invalid email or password."
                    });
                }
                //console.log(error);
            })
    }


    // handle login using direct email

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                res.user
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
                //Navigate after location
                navigate(from, { replace: true });
            })
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

    return (
        <div className='flex justify-center mt-10 mb-20'>
            <Helmet>
                <title>Login - Gadget24</title>
            </Helmet>
            <Card className="max-w-sm">
                <Card.Content className="space-y-3">
                    <h3 className='text-4xl font-bold text-center'>Login</h3>
                    <form onSubmit={handleLogin} className="space-y-2">
                        <fieldset className="space-y-1">
                            <Label htmlFor="email">Email*</Label>
                            <div className="relative">
                                <Input
                                    type="email"
                                    placeholder="Enter email"
                                    className='ps-11'
                                    name='email'
                                    required />
                                <InputIcon>
                                    <Envelope size={19} color="#AFBACA" />
                                </InputIcon>
                            </div>
                        </fieldset>
                        <fieldset className="space-y-1">
                            <Label htmlFor="password">Password*</Label>
                            <div className="relative">
                                <Input
                                    className='ps-11'
                                    id="password"
                                    placeholder="Enter password"
                                    type={passwordVisible ? 'text' : 'password'}
                                    name='password'
                                    required />
                                <button
                                    onClick={handlePasswordVisible}
                                    className='absolute inset-y-0 right-0 flex items-center px-4'>
                                    {passwordVisible ? <EyeSlash /> : <Eye />}

                                </button>

                                <InputIcon>
                                    <Lock size={19} color="#AFBACA" />
                                </InputIcon>


                            </div>
                        </fieldset>
                        <NavLink>
                            <h3 className='text-sm underline'>Forget Password</h3>
                        </NavLink>
                        <Button className="!mt-3 block w-full" size="xs" color="secondary" variant="outline">
                            Login
                        </Button>
                    </form>
                    <h3 className='text-sm'>Don't have any account? <NavLink to='/register' className='underline text-blue-500 '>Create an account</NavLink></h3>
                    <Divider>Or</Divider>
                    <div className="flex items-center justify-between gap-3">
                        <Button onClick={handleGoogleSignIn} size="xs" variant="outline" color="secondary" className="w-full">
                            <GoogleLogo size={20} className="mr-1.5" />
                            Google
                        </Button>
                        <Button size="xs" variant="outline" color="secondary" className="w-full">
                            <FacebookLogo size={20} className="mr-1.5" />
                            Facebook
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
};

export default Login;