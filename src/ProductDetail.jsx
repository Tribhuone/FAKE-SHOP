
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { seletedProduct ,removeSeletedProduct } from "./redux/actions/productActions";
import axios from "axios";
import "./style.css";

export default function ProductDetail()
{
    const product = useSelector( (state) => state.product);
    const {image , title , price , description , category} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();

    const getProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log(err);
        });

        dispatch(seletedProduct(response.data));
    }

    useEffect( () => {
        if(productId && productId !== "") getProductDetail();
        return () => {
            dispatch(removeSeletedProduct());
        }
    }, [productId]);

    return(
        <div className="parent-container">
            {Object.keys(product).length === 0 ? 
                (<div className="load-ui">...Loading</div>) : 
                (
                    <div className="prod-container w-300 h-110 border-2 pt-4 border-solid  mt-10">
                        <div className="mr-4 w-100">
                            <img className="w-200 h-100 myImg" src={image} alt="Product"/>
                        </div>

                        <div className="product-details ml-4">
                            <h1 className="text-3xl">{title}</h1>

                            <p className="text-xl font-medium">${price}</p>

                            <h3 className="border-1 bg-red-500/50 product-type p-1 w-auto">{category}</h3>
                            <p>{description}</p>

                            <h3 className="border-1 bg-green-300 font-medium mt-3">Add to Cart</h3>
                        </div>

                    </div>

                )
            }
        </div>
    );
}