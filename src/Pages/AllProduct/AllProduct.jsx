import axios from "axios";
import { useEffect, useState } from "react";
import { BiHome } from "react-icons/bi";
import { api } from "../Shared/SharedFetchApi";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Divider, Spinner } from "keep-react";

const AllProduct = () => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetching category
        axios.get(`${api}categories/`)
            .then(res => {
                setCategories(res.data.payload);
            })
            .catch(err => console.log(err));



        // fetching Product
        axios.get(`${api}products/`)
            .then(res => {
                const products = res.data.payload.products
                setProducts(products);
                setFilteredProducts(products);
                setLoading(false);
                // console.log(products);
            })

            .catch(error => {
                console.error(error);
                setLoading(false);
            })
    }, [])

    const handleCategoryClick = (slug) => {
        console.log(slug);
        const filtered = products.filter(product => product.categorySlug === slug);
        setFilteredProducts(filtered);
    };

    if (loading) {
        return <div className="flex flex-col justify-center items-center">
            <span className="pr-2">
                <Spinner color="info" size="xl" />
            </span>
            <h3 className="text-xl font-semibold">Loading...</h3>
        </div>
    }


    return (
        <div className="mx-5 md:mx-10">
            <div className="flex justify-center md:justify-start">
                <BiHome className="text-xl" />
                <h2>/ Products</h2>
            </div>

            <div className="my-10">
                <h3 className="text-blue-600 text-2xl md:text-3xl font-semibold text-center md:text-left my-3">Mobile Phone Price in Bangladesh</h3>
                <p className="text-center md:text-left">Mobile Phone Price in Bangladesh starts from BDT 12,299 and depending on the brand and features up to BDT 300,000 can be the price of a mobile phone. You can get the latest budget smartphones to high-configuration mobile phones at Star Tech. Check below and Order yours now !</p>
            </div>

            {/* category button */}

            <div className="flex flex-wrap gap-3">
                {
                    categories.map(category => (
                        <Button
                            size="xs"
                            className="rounded-xl"
                            color="secondary"
                            variant="outline"
                            onClick={() => handleCategoryClick(category.slug)}
                            key={category._id}

                        >{category.name}</Button>
                    )
                    )}
            </div>

            {/* products */}
            <div className="my-12">
                {
                    filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                            {
                                filteredProducts.map(product => (
                                    <div className="mx-auto" key={product._id}>
                                        <Card className="h-full flex flex-col">
                                            <CardHeader className="mt-5">
                                                <img
                                                    className="w-2/3 mx-auto"
                                                    src={product.image} alt={product.name} />
                                            </CardHeader>
                                            <CardContent className="space-y-3 flex-grow">
                                                {/* todo make it interactive */}
                                                <h3 className="text-xs text-slate-500">Apple</h3>
                                                <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                                                <CardDescription>

                                                    <li className="text-sm">Lorem ipsum dolor sit amet.</li>
                                                    <li className="text-sm">Lorem ipsum dolor sit amet.</li>
                                                    <li className="text-sm">Lorem ipsum dolor sit amet.</li>
                                                </CardDescription>

                                                <Divider
                                                    color="#525b56"
                                                ></Divider>

                                                <h3 className="text-lg font-semibold text-center">৳ {product.price}</h3>

                                            </CardContent>
                                            <div className=" mb-5 flex justify-center">
                                                <Button
                                                    size="sm" color="secondary"
                                                    className="w-3/4 hover:bg-slate-500 hover:text-white"
                                                    variant="outline">
                                                    Add to Cart
                                                </Button>
                                            </div>
                                        </Card>
                                    </div>
                                ))
                            }
                        </div>
                    )
                        :
                        (
                            <div>
                                <h3 className="text-center">No products found</h3>
                            </div>
                        )

                }
            </div>



        </div>
    );
};

export default AllProduct;