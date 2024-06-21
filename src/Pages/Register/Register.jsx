import { FacebookLogo, GoogleLogo } from 'phosphor-react'
import { Button, Card, Divider, Input, Label } from 'keep-react'
import { NavLink } from 'react-router-dom';
import { useCallback, useState } from 'react'
import { Upload } from 'keep-react'

const Register = () => {
    const [files, setFiles] = useState([])

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(acceptedFiles)
    }, [])

    return (
        <div className='flex justify-center mt-10 mb-20'>
            {/* <Card className="w-96"> */}
            <Card.Content className="space-y-3">
                <h3 className='text-4xl font-bold text-center'>Register</h3>
                <form className="space-y-2">


                    <fieldset className=" md:flex md:gap-10 space-y-1">
                        <fieldset className="space-y-1">
                            <Label htmlFor="name">Name*</Label>
                            <div className="relative">
                                <Input id="name" type="text" placeholder="Enter your name" />
                            </div>
                        </fieldset>
                        <fieldset>
                            <Label htmlFor="email">Email*</Label>
                            <div className="relative">
                                <Input id="email" type="email" placeholder="Enter email" />
                            </div>
                        </fieldset>
                    </fieldset>


                    <fieldset className=" md:flex md:gap-10">
                        <fieldset className="space-y-1">
                            <Label htmlFor="password">Password*</Label>
                            <div className="relative">
                                <Input id="password" placeholder="Enter password" type="password" />
                            </div>
                        </fieldset>
                        <fieldset className="space-y-1">
                            <Label htmlFor="password">Confirm Password*</Label>
                            <div className="relative">
                                <Input id="confirmPassword" placeholder="Confirm Password" type="password" />
                            </div>
                        </fieldset>
                    </fieldset>
                    <fieldset className="space-y-1">
                        <Label htmlFor="password">Address*</Label>
                        <div className="relative">
                            <Input id="address" placeholder="Enter your address" type="text" />
                        </div>
                    </fieldset>
                    <fieldset className="space-y-1">
                        <Label htmlFor="password">Phone*</Label>
                        <div className="relative">
                            <Input id="phoneNumber" placeholder="Enter your phone number" type="text" />
                        </div>
                    </fieldset>

                    {/* upload image */}
                    <Upload horizontal options={{ onDrop }}>
                        <Upload.Body>
                            {/* <Upload.Icon>
                                    <img src="/images/icon/folder.svg" alt="folder" />
                                </Upload.Icon> */}
                            <Upload.Text>
                                <p className="text-body-3 font-medium text-metal-600">Choose image to Upload</p>
                            </Upload.Text>
                        </Upload.Body>
                        {/* <Upload.Footer isFileExists={files.length > 0}>
                                <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600">
                                    <Info size={16} />
                                    Uploaded Files
                                </p>
                                <ul className="space-y-1">
                                    {files?.map((file) => (
                                        <li
                                            key={file?.name}
                                            className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600">
                                            {file?.name}
                                            <Trash size={16} color="red" />
                                        </li>
                                    ))}
                                </ul>
                            </Upload.Footer> */}
                    </Upload>

                    <Button className="!mt-3 block w-full" size="xs" color="secondary" variant="outline">
                        Register
                    </Button>
                </form>
                <h3 className='text-sm'>Already have an account? <NavLink to='/login' className='underline text-blue-500 '>Login now</NavLink></h3>
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
            {/* </Card> */}
        </div>
    );
};

export default Register;