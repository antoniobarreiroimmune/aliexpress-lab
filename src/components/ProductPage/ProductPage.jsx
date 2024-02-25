import { Box, Button } from '@chakra-ui/react';
import productsJson from '../../assets/products.json'
import ProductList from '../ProductList/ProductList'
import { useState } from 'react'
import './ProductPage.css'
import SearchInput from '../SearchInput/SearchInput'
import TopBar from '../TopBar/TopBar';
import FooterBar from '../FooterBar/FooterBar';


const ProductPage = () => {
    const products = productsJson.products

    let [totalProducts, setTotalProducts] = useState(products)
    let [showedProducts, setShowedProducts] = useState(products.slice(0, 6))
    let [numShowedProducts, setNumShowedProducts] = useState(6)
    let [isShowingAll, setIsShowingAll] = useState(false)

    const handleSearchChange = (searchText) => {
        const filteredProducts = totalProducts.filter(product =>
            product.title.toLowerCase().startsWith(searchText.toLowerCase())
        );
        setShowedProducts(filteredProducts.slice(0, numShowedProducts));
        setIsShowingAll(false);
    };

    const deleteElement = (productId) => {
        const newTotalProducts = totalProducts.filter(product => product.id !== productId)
        setTotalProducts(newTotalProducts)

        if (showedProducts.some(product => product.id === productId)) {
            setNumShowedProducts(prevNum => Math.min(prevNum, newTotalProducts.length));

            const index = showedProducts.findIndex(product => product.id === productId);
            const newShowedProducts = [...showedProducts.filter(product => product.id !== productId)];
            if (index < numShowedProducts && newTotalProducts.length >= numShowedProducts) {
                newShowedProducts.push(newTotalProducts[numShowedProducts - 1]);
            }
            setShowedProducts(newShowedProducts);
        } else {

            const newShowedProducts = showedProducts.filter(product => product.id !== productId);
            setShowedProducts(newShowedProducts);
        }
    }

    const showMoreProducts = () => {
        setShowedProducts(totalProducts)
        setIsShowingAll(true)
    }

    const showLessProducts = () => {
        setShowedProducts(totalProducts.slice(0, numShowedProducts))
        setIsShowingAll(false)
    }

    return (

        <>
            <TopBar />
            <Box className='productPageContainer'>
                <SearchInput onSearchChange={handleSearchChange} />
                <ProductList products={showedProducts} deleteElement={deleteElement} />
                <Button className='showMoreShowLess' onClick={isShowingAll ? showLessProducts : showMoreProducts}>
                    {isShowingAll ? 'Ver menos' : 'Ver más'}
                </Button>
            </Box>
            <FooterBar />
           
        </>
    )
}

export default ProductPage;