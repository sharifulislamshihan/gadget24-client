import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BiHome } from "react-icons/bi";
import { api } from "../Shared/SharedFetchApi";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Divider, Empty, EmptyImage, EmptyTitle, Pagination, PaginationItem, PaginationList, PaginationNavigator, Spinner } from "keep-react";
import { CaretLeft, CaretRight } from "phosphor-react";
// import { SearchContext } from "../../Providers/SearchProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import { Helmet } from "react-helmet-async";

const AllProduct = () => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [selectedBrand, setSelectedBrand] = useState('');


    const { user } = useContext(AuthContext);
    const [refetch] = useCart();

    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        // fetching category
        axios.get(`${api}categories`)
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {

        const fetchProducts = async () => {
            setLoading(true);
            const response = await axios.get(`${api}products`, {
                params: {
                    page,
                    size,
                    brand: selectedBrand
                }
            });
            setProducts(response.data.result);
            setTotalPages(response.data.totalPages);
            setTotalProducts(response.data.totalProducts);
            setLoading(false);
        };

        fetchProducts();
    }, [page, selectedBrand, size])


    console.log(products);

    // show product category wise
    const handleCategoryClick = async (name) => {
        console.log(name);
        setLoading(true);
        setSelectedBrand(name);
        setPage(0);
    };

    if (loading) {
        return <div className="flex flex-col justify-center items-center">
            <span className="pr-2">
                <Spinner color="info" size="xl" />
            </span>
            <h3 className="text-xl font-semibold">Loading...</h3>
        </div>
    }

    // show all the product in the all button
    const handleShowAllProduct = () => {
        setSelectedBrand('');
        setPage(0);
    };

    // add to cart
    const handleAddToCart = product => {
        if (!user) {
            navigate('/login', { state: { from: location } });
        }
        else {
            console.log(product);
            if (user && user.email) {
                const productCartItem = {
                    productCart: product._id,
                    email: user.email,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                }
                axios.post(`${api}carts`, productCartItem)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${product.name} added to cart..`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                            // refetch the cart
                            refetch();

                        }
                    })
            }
        }

    }

    // handle product per page
    const handleItemsPerPageChange = (e) => {
        setSize(parseInt(e.target.value));
        setPage(0);
    }

    // Handle pagination
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };


    // handle previous page in the pagination
    const handlePreviousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    // handle next page in the pagination
    const handleNextPage = () => {
        if (page < totalPages - 1) {
            setPage(page + 1);
        }
    }

    return (
        <div className="mx-5 md:mx-10">
            <Helmet>
                <title>Product - Gadget24</title>
            </Helmet>
            <div className="flex justify-center md:justify-start">
                <BiHome className="text-xl" />
                <h2>/ Products / {selectedBrand}</h2>
            </div>

            <div className="my-10">
                <h3 className="text-blue-600 text-2xl md:text-3xl font-semibold text-center md:text-left my-3">Mobile Phone Price in Bangladesh</h3>
                <p className="text-center md:text-left">Mobile Phone Price in Bangladesh starts from BDT 12,299 and depending on the brand and features up to BDT 300,000 can be the price of a mobile phone. You can get the latest budget smartphones to high-configuration mobile phones at Star Tech. Check below and Order yours now !</p>
            </div>

            {/* category button */}

            <div className="flex flex-wrap gap-3">
                <Button
                    size="xs"
                    className={`rounded-xl ${selectedBrand === '' ? 'bg-black text-white border-black' : ''}`}
                    color="secondary"
                    variant="outline"
                    onClick={() => handleShowAllProduct()}
                >All</Button>
                {
                    categories.map(category => (
                        <Button
                            size="xs"
                            className={`rounded-xl ${selectedBrand === category.name ? 'bg-black text-white border-black' : ''}`}
                            color="secondary"
                            variant="outline"
                            onClick={() => handleCategoryClick(category.name)}
                            key={category._id}

                        >{category.name}</Button>
                    )
                    )}
            </div>

            {/* drop down menu for pagination */}

            <div className="flex my-10">
                <h3>Show : </h3>
                <select value={size}
                    onChange={handleItemsPerPageChange}
                    name=""
                    id="">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>



            {/* products */}
            <div className="my-12">
                {
                    totalProducts > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                            {
                                products.map(product => (
                                    <div className="mx-auto" key={product._id}>
                                        <Card className="h-full flex flex-col hover:shadow-xl">
                                            <CardHeader className="mt-5">
                                                <img
                                                    className="w-2/3 mx-auto"
                                                    src={product.image} alt={product.name} />
                                            </CardHeader>
                                            <CardContent className="space-y-3 flex-grow">
                                                {/* todo make it interactive */}
                                                <h3 className="text-xs text-slate-500">{product.brand}</h3>
                                                <Link to={`/products/${product._id}`}>
                                                    <CardTitle className="text-lg font-semibold hover:underline">{product.name}</CardTitle>
                                                </Link>
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
                                                    variant="outline"
                                                    onClick={() => handleAddToCart(product)}
                                                >
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
                                <Empty>
                                    <EmptyImage>
                                        <img
                                            src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg"
                                            height={234}
                                            width={350}
                                            alt="404"
                                        />
                                    </EmptyImage>
                                    <EmptyTitle>Sorry, No Product found!</EmptyTitle>
                                </Empty>
                            </div>
                        )

                }
            </div>


            {
                totalPages > 1 && (
                    /* Pagination */
            <Pagination shape="circle" className="flex justify-center my-12">

            {/* previous button */}
            <PaginationNavigator
                className="hover:bg-slate-200"
                onClick={handlePreviousPage}
                shape="circle">
                <CaretLeft size={18}
                    color="#0000FF"
                />
            </PaginationNavigator>
            <PaginationList>
                {
                    [...Array(totalPages).keys()].map(pageNum => (
                        <PaginationItem
                            key={pageNum}
                            className={page === pageNum ? 'bg-black text-white' : ''}
                            onClick={() => handlePageChange(pageNum)}
                        >
                            {pageNum + 1}
                        </PaginationItem>
                    ))}
            </PaginationList>

            {/* next button */}
            <PaginationNavigator
                className="hover:bg-slate-200"
                onClick={handleNextPage}
                shape="circle">
                <CaretRight size={18}
                    color="#0000FF" />
            </PaginationNavigator>
        </Pagination>
                )
            }
        </div>
    );
};

export default AllProduct;