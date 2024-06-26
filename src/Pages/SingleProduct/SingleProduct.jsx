import { Badge, Button, Divider, Label, NumberInput, NumberInputBox, NumberInputButton, Radio, Tab, TabItem, TabList } from 'keep-react';
import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { BiHome } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';


// add to cart
const handleAddToCart = (_id) => {
    console.log(_id);
}

const SingleProduct = () => {

    const productData = useLoaderData();
    const [number, setNumber] = useState(0);

    const product = productData.payload.product;
    console.log(product);
    return (
        <div className='mx-5'>
            <div className="flex justify-center md:justify-start">
                <BiHome className="text-xl" />
                <h2>/ Products / {product.brand} / {product.name}</h2>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {/* Image */}
                <div className='my-20 border-4 border-slate-400 flex justify-center'>
                    <img
                        src={product.image}
                        alt={product.name}
                        className=' w-4/5  px-10 py-10' />
                </div>

                {/* details */}
                <div className='my-10'>
                    <div className='flex justify-between mr-5'>
                        <div>
                            <h2 className='text-2xl font-semibold text-[#425a8b]'>{product.name}</h2>
                            <p className='text-md text-slate-400'>{product.brand}</p>
                        </div>
                        <div>
                            <Badge color="secondary">Secondary</Badge>
                        </div>
                    </div>
                    <div className='my-3'>
                        <Divider size='md'></Divider>
                    </div>

                    <h3 className='text-4xl font-semibold text-[#425a8b]'>৳ {product.price}</h3>
                    <div className='my-3'>
                        <p className='text-slate-500 text-sm'>Sold : {product.sold}</p>
                        <p className='text-slate-500 text-sm'>Shipping Cost : ৳ {product.shipping}</p>
                    </div>

                    <p className=''>{product.description}</p>
                    <div className='my-3'>
                        <h3 className='text-lg font-semibold'>Key Features</h3>
                        <div className='my-2'>
                            <p>Display: 6.8" Quad HD+ Dynamic AMOLED 2X, 120Hz, HDR10+</p>
                            <p>Processor: Qualcomm SM8550-AC Snapdragon 8 Gen 2 (4 nm)</p>
                            <p>Camera: Quad 200+10+10+12 MP on Rear, 12MP Selfie</p>
                            <p>Features: Under Display Fingerprint, 45W Fast Charging, IP68</p>
                        </div>
                    </div>
                </div>

                {/* variation and order*/}
                <div className='mt-20'>
                    <div className='border-2 border-slate-400'>

                        <div className='flex flex-col justify-center mx-5 my-10'>
                            <div>
                                <h3 className='font-semibold my-2'>Network/Region : </h3>
                                <Tab activeLabel="singleSim">
                                    <TabList>
                                        <TabItem label="singleSim">Single Sim</TabItem>
                                        <TabItem label="duelSim">Duel Sim</TabItem>
                                    </TabList>
                                </Tab>
                            </div>


                            <div className='my-5'>
                                <h3 className='font-semibold my-2'>Varient : </h3>
                                <Tab activeLabel="singleSim">
                                    <TabList>
                                        <TabItem label="singleSim">6/128 GB</TabItem>
                                        <TabItem label="duelSim">8/128 GB</TabItem>
                                        <TabItem label="tripleSim">8/256 GB</TabItem>
                                    </TabList>
                                </Tab>
                            </div>



                            <div>
                                <h3>Quantity</h3>
                                <fieldset className="space-y-3">
                                    <NumberInput>
                                        <NumberInputButton disabled={number === 0} onClick={() => setNumber((prev) => prev - 1)}>
                                            <Minus size={16} color="#455468" />
                                        </NumberInputButton>
                                        <NumberInputBox min={0} max={100} value={number} onChange={(e) => setNumber(+e.target.value)} />
                                        <NumberInputButton disabled={number === 100} onClick={() => setNumber((prev) => prev + 1)}>
                                            <Plus size={16} color="#455468" />
                                        </NumberInputButton>
                                    </NumberInput>
                                </fieldset>
                            </div>

                            <Button
                                size="sm" color="secondary"
                                className=" my-5 w-full hover:bg-slate-500 hover:text-white"
                                variant="outline"
                                onClick={() => handleAddToCart(product._id)}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;