import PropTypes from 'prop-types';
import { createContext, useContext, useState } from "react";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <ProductContext.Provider value={{ data, setData, searchTerm, setSearchTerm }}>
            {children}
        </ProductContext.Provider>
    );
};

ProductProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useProductProvider = () => useContext(ProductContext);
