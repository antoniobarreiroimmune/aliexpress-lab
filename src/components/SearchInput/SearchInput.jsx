import { Input, InputGroup } from '@chakra-ui/react';
import lupaIcon from '../../assets/images/lupa.png'

import './SearchInput.css';

const SearchInput = ({ onSearchChange }) => {
    return (
        <>
            <h1 className='titleProduct'>Mejores elecciones, <br />Mejores precios</h1>
            <InputGroup className='inputContainer'>
                <Input
                    className='customInput'
                    placeholder="Busca un producto"
                    onChange={(e) => onSearchChange(e.target.value)}
                    
                />
                <img className='lupaIcon'
                    src={lupaIcon}
                    alt="Search"
                />
            </InputGroup>
        </>
    );
};

export default SearchInput;
