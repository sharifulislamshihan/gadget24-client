/* eslint-disable react/no-unescaped-entities */
import { Envelope, FacebookLogo, GoogleLogo, Lock } from 'phosphor-react'
import { Button, Card, Divider, Icon, Input, Label } from 'keep-react'
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    return (
        <div className='flex justify-center mt-10 mb-20'>
            <Helmet>
                <title>Login|Gadget24</title>
            </Helmet>
            <Card className="max-w-sm">
                <Card.Content className="space-y-3">
                    <h3 className='text-4xl font-bold text-center'>Login</h3>
                    <form className="space-y-2">
                        <fieldset className="space-y-1">
                            <Label htmlFor="email">Email*</Label>
                            <div className="relative">
                                <Input id="email" type="email" placeholder="Enter email" className="ps-11" />
                                <Icon>
                                    <Envelope size={19} color="#AFBACA" />
                                </Icon>
                            </div>
                        </fieldset>
                        <fieldset className="space-y-1">
                            <Label htmlFor="password">Password*</Label>
                            <div className="relative">
                                <Input id="password" placeholder="Enter password" type="password" className="ps-11" />

                                <Icon>
                                    <Lock size={19} color="#AFBACA" />
                                </Icon>
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
                        <Button size="xs" variant="outline" color="secondary" className="w-full">
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