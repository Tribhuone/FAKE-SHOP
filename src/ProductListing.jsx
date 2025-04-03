
import { useDispatch , useSelector } from "react-redux";
import { setProducts } from "./redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useEffect } from "react";
import "./style.css";


export default function ProductListing()
{
    const products = useSelector((state) => state)          // useSelector used for select the state and return new-state.

    const dispatch = useDispatch();

    console.log(products);

    // In this function we fetch the data of API and render on webpage. 
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch( (err) => {
            console.log(err);
        });
        dispatch(setProducts(response.data));
        // Now we have to pass our all product details as action to "setProducts" using "dispatch" in our action then reder on webpage.
    }

    // useEffect is used to execute the function when webpage is render.
    useEffect( () => {
        fetchProducts();
    }, []);                 // Here we use empty array as dependecy of useEffect Hook. 
                            // By which the function is execute only one time during the first redering of webpage.

    console.log("Product : " , products);

    return(
        <>
            <ProductComponent></ProductComponent>
            <div className="h-4"></div>
        </>
    );
}