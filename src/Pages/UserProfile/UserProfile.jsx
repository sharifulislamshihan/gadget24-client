import { Avatar, Divider, Tab, TabContent, TabItem, TabList } from 'keep-react';

const UserProfile = () => {
    return (
        <div>
            <div>
                <img className='w-40 rounded-full mx-auto mt-10 border-2 border-solid border-black' src="https://pics.craiyon.com/2023-06-01/e1f0823a57244601877ab8bc953f9cbc.webp" alt="" />

                <h3 className='text-2xl font-semibold text-center my-5'>Jon Doe</h3>
            </div>


            <div>
                <Tab activeLabel="profile" itemType="link">
                    <TabList className='text-xl'>
                        <TabItem label="profile">Profile Overview</TabItem>
                        <TabItem label="editProfile">Edit Profile</TabItem>
                        <TabItem label="carts">Carts</TabItem>
                    </TabList>
                    <TabContent value="profile">

                        <div className='space-y-3'>
                            <div className='flex gap-2'>
                                <h3 className='text-lg font-semibold'>Name : </h3>
                                <h1 className='font-medium mt-1'>Jhon Doe</h1>
                            </div>

                            <div className='flex gap-2'>
                                <h3 className='text-lg font-semibold'>Email : </h3>
                                <h1 className='font-medium mt-1'>user@example.com</h1>
                            </div>

                            <div className='flex gap-2'>
                                <h3 className='text-lg font-semibold'>Address : </h3>
                                <h1 className='font-medium mt-1'>Bla bla</h1>
                            </div>
                            
                            <div className='flex gap-2'>
                                <h3 className='text-lg font-semibold'>Phone : </h3>
                                <h1 className='font-medium mt-1'>8405783475894</h1>
                            </div>
                        </div>
                    </TabContent>
                    <TabContent value="editProfile">
                        Business Content
                    </TabContent>
                    
                    
                    <TabContent value="carts">
                        Carts
                    </TabContent>

                </Tab>
            </div>
        </div>
    );
};

export default UserProfile;