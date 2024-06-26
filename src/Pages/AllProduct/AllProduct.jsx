import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BiHome } from "react-icons/bi";
import { api } from "../Shared/SharedFetchApi";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Divider, Empty, EmptyImage, EmptyTitle, Pagination, PaginationItem, PaginationList, PaginationNavigator, Spinner } from "keep-react";
import { CaretLeft, CaretRight } from "phosphor-react";
import { SearchContext } from "../../Providers/SearchProvider";
import { Link } from "react-router-dom";

const AllProduct = () => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [numberOfProduct, setNumberOfProduct] = useState(0);
    const [brandName, setBrandName] = useState("");
    const { searchTerm } = useContext(SearchContext);


    const [currentPage, setCurrentPage] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(10);

    useEffect(() => {
        // fetching category
        axios.get(`${api}categories`)
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => console.log(err));

        axios.get(`${api}products`)
            .then(res => {
                const product = res.data.length;
                //console.log(product);
                setNumberOfProduct(product);
                console.log("number of product", numberOfProduct);
            })

        // fetching Products
        axios.get(`${api}products?page=${currentPage}&size=${productsPerPage}`)
            .then(res => {
                const products = res.data;
                //console.log(products);
                //console.log('number of product', products.length);
                setProducts(products);
                setFilteredProducts(products);
                setLoading(false);
                // console.log(products);
            })

            .catch(error => {
                console.error(error);
                setLoading(false);
            })
    }, [currentPage, productsPerPage]);

    // filter product by searching
    useEffect(() => {
        const SearchedProduct = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm)
        );
        setFilteredProducts(SearchedProduct);
    }, [products, searchTerm])

    // show product category wise
    const handleCategoryClick = async (slug, name) => {
        //console.log(slug);
        setLoading(true);
        try {
            //filter product as the category clicked
            const filtered = products.filter(product => product.category === slug);
            setBrandName(name);
            setFilteredProducts(filtered);
            //setNumberOfProduct(filteredProducts.length)
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="flex flex-col justify-center items-center">
            <span className="pr-2">
                <Spinner color="info" size="xl" />
            </span>
            <h3 className="text-xl font-semibold">Loading...</h3>
        </div>
    }

    // todo: pagination need to be fixed properly


    // show all the product in the all button
    const handleShowAllProduct = () => {
        setFilteredProducts(products);
        setBrandName('');
    };


    // add to cart
    const handleAddToCart = (_id) => {
        console.log(_id);
    }

    // handle product per page
    const handleItemsPerPageChange = e => {
        const val = parseInt(e.target.value)
        setProductsPerPage(val);
        setCurrentPage(0);
    }

    // handle previous page in the pagination
    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    // handle next page in the pagination
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    const totalProduct = numberOfProduct;
    //console.log("total product", totalProduct);
    const numberOfPages = Math.ceil(totalProduct / productsPerPage);
    const pages = [...Array(numberOfPages).keys()];
    //console.log("pages : ", pages);

    /**
     * done : get total number of product
     * done : items per page
     * done : get the current page
     */
    return (
        <div className="mx-5 md:mx-10">
            <div className="flex justify-center md:justify-start">
                <BiHome className="text-xl" />
                <h2>/ Products /{brandName}</h2>
            </div>

            <div className="my-10">
                <h3 className="text-blue-600 text-2xl md:text-3xl font-semibold text-center md:text-left my-3">Mobile Phone Price in Bangladesh</h3>
                <p className="text-center md:text-left">Mobile Phone Price in Bangladesh starts from BDT 12,299 and depending on the brand and features up to BDT 300,000 can be the price of a mobile phone. You can get the latest budget smartphones to high-configuration mobile phones at Star Tech. Check below and Order yours now !</p>
            </div>

            {/* category button */}

            <div className="flex flex-wrap gap-3">
                <Button
                    size="xs"
                    className="rounded-xl"
                    color="secondary"
                    variant="outline"
                    onClick={() => handleShowAllProduct()}
                >All</Button>
                {
                    categories.map(category => (
                        <Button
                            size="xs"
                            className="rounded-xl"
                            color="secondary"
                            variant="outline"
                            onClick={() => handleCategoryClick(category.slug, category.name)}
                            key={category._id}

                        >{category.name}</Button>
                    )
                    )}
            </div>

            {/* drop down menu for pagination */}

            <div className="flex my-10">
                <h3>Show : </h3>
                <select value={productsPerPage}
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
                    filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                            {
                                filteredProducts.map(product => (
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
                                                    onClick={() => handleAddToCart(product._id)}
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


            {/* Pagination */}
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
                        pages.map(page =>
                            <PaginationItem
                                className={currentPage === page && 'bg-black text-white hover:bg-black hover:text-white'}
                                onClick={() => setCurrentPage(page)}
                                key={page}
                            >{page + 1}</PaginationItem>
                        )
                    }
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
        </div>
    );
};

export default AllProduct;