/**
 *  Filter Option Set
 */

import * as values from '../constants/ActionTypes'

const filtersReducerDefaultState = {
    category: [],
    size:[],
    color: [],
    ratings:"",
    value: { min: 150, max: 1050 },
    search:"",
    sortBy: ""
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case values.CATEGORY_FILTER_VALUE:
            return {
                ...state,
                category: action.category
            };
        case values.SIZE_FILTER_VALUE:
            return {
                ...state,
                sizes: action.size
            };
        case values.COLOR_FILTER_VALUE:
            return {
                ...state,
                color: action.color
            };
        case values.PRICE_FILTER_VALUE:
            return {
                ...state,
                value: {min: action.value.value.min, max: action.value.value.max }
            };
        case values.SORT_BY_FILTER_VALUE:
            return {
                ...state,
                sortBy: action.sort_by
            };
        case values.RATING_FILTER_VALUE:
            return {
                ...state,
                ratings: action.rating
            };
        case values.SEARCH_FILTER_VALUE:
            return{
                ...state,
                search:action.search
            }
        default:
            return state;
    }
}

export default filtersReducer;