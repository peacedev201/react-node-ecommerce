import shop from '../api/shop'
import * as values from '../constants/ActionTypes'

export const fetchProductsBegin = () => ({
    type: values.FETCH_PRODUCTS_BEGIN_FILTER_VALUE
});

export const filterSearch = (search) => ({
    type: values.SEARCH_FILTER_VALUE,
    search
});

export const filterColor = (color) => ({
    type: values.COLOR_FILTER_VALUE,
    color
});


export const filteredCategory = (category) => ({
    type: values.CATEGORY_FILTER_VALUE,
    category
});

export const filterSize = (size) => ({
    type: values.SIZE_FILTER_VALUE,
    size
});

export const filterSort = (sort_by) => ({
    type: values.SORT_BY_FILTER_VALUE,
    sort_by
});

export const filterRating = (rating) => ({
    type: values.RATING_FILTER_VALUE,
    rating
});

export const filterPrice = (value) => ({
    type: values.PRICE_FILTER_VALUE,
    value
});

export const receiveProducts = products => ({
    type: values.RECEIVE_PRODUCTS_FILTER_VALUE,
    products
})

export const getAllProducts = () => dispatch => {
    dispatch(fetchProductsBegin());
    shop.getProducts(products => {
        dispatch(receiveProducts(products));
        return products;
    })
}