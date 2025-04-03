
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";

export default function ProductComponent()
{
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map( (product) => {

        const {id, title , image , price , category} = product;

        return(
            <>
                {Array(products.length) === 0 ? 
                    (<div className="load-ui">...Loading</div>) : 
                    (
                        <div className="mt-5" key={id}>
                            <Link to={`/product/${id}`}>
                                <div className="border-1 border-solid p-4 w-70 h-85 product-component">

                                    <div className="image w-30 iMg">
                                        <img src={image} alt={title} className="myImg" />
                                    </div>
                                    
                                    <div className="content">
                                        <div className="font-medium">{title}</div>
                                        <div className="font-medium mt-2">Price: ${price}</div>
                                        <div className="text-xs text-gray-600/50 font-medium">{category}</div>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    )
                }
            </>
        );
    });

    return(
        <>
            <Header />
            <div className="product-aligns">
                {renderList}
            </div>
        </>
    );
}