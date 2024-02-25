import "./ProductCard.css";
import imgDelete from "../../assets/images/Group 27.png";

const ProductCard = ({product, deleteElement}) => {
    return (
        <div className="productCard">
            <img className="productImage" src={product.image} alt={product.title} />
            <div className="productInfo">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            </div>
            <div className="productPriceContainer">
            <p className="price">${product.price}</p>
            </div>
            <button type="button" className="deleteButton" onClick={() => deleteElement(product.id)}><img src={imgDelete} alt="Delete" className="imgButtonDelete" /></button>

        </div>
    );
}

export default ProductCard;
