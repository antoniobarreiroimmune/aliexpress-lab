import { Grid } from '@chakra-ui/react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css'

const ProductList = ({ products, deleteElement }) => {
    return <>
        <Grid className='productListGrid'>{
            products.map((product, index) => {
                return <ProductCard product={product} key={product.id} deleteElement={deleteElement} index={index} />
            })
        }</Grid>
    </>
}

export default ProductList