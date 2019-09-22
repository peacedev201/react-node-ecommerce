// Get Category Unique Data
export const getuniqueCategory = (products) => {
    var getuniqueCategorys = [];
    products.map((product, index) => {
        if (product.tags) {
            product.tags.map((categorys) => {
                if (getuniqueCategorys.indexOf(categorys) === -1) {
                    getuniqueCategorys.push(categorys);
                }
            })
        }
    })
    return getuniqueCategorys;
}

// Get Size Unique Data
export const getuniqueSizes = (products) => {
    var getuniqueSizes = [];
    products.map((product, index) => {
        if (product.size) {
            product.size.map((sizes) => {
                if (getuniqueSizes.indexOf(sizes) === -1) {
                    getuniqueSizes.push(sizes);
                }
            })
        }
    })
    return getuniqueSizes;
}

// Get Color Unique Data
export const getuniqueColors = (products) => {
    var getuniqueColors = [];
    products.map((product, index) => {
        if(product.colors) {
            product.colors.map((color) => {
                if (getuniqueColors.indexOf(color) === -1) {
                    getuniqueColors.push(color);
                }
            })
        }
    })
    return getuniqueColors;
}

// Get Min & Max Data in Json
export const getuniqueMinMaxPrice = (products) => {
    let min = 100, max = 2000;
    products.map((product, index) => {
        let v = product.salePrice;
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
    })
    return {'min':min, 'max':max};
}

// All Filter Used And Get Final Response
export const getVisibleproducts = (data, { category, size, color,value, sortBy,ratings,search}) => {
    let sizes = size;  
   
    return data.products.filter(product => {
        
        let categoryMatchValue;
        if(product.tags)
            categoryMatchValue = product.tags.some(tag => category.includes(tag))
        else
            categoryMatchValue = true;  
   

        let sizeMatchValue;
        if(product.size)
             sizeMatchValue = product.size.some(size => sizes.includes(size))
        else
             sizeMatchValue = true;

        let colorMatchValue;
        if(color && product.colors) {
            colorMatchValue = product.colors.some(colors => color.includes(colors))
        }else{
            colorMatchValue = false;
        }

        let searchMatchValue;
        if(product.name) {
            if(search == search.toLowerCase())
            {
                searchMatchValue=product.name.toLowerCase().indexOf(search.toLowerCase()) > -1
            }
            else
            {
                searchMatchValue=product.name.toUpperCase().indexOf(search.toUpperCase()) > -1
            }
        }
        else
        {
            searchMatchValue = false;
        }
       
        let ratingMatchValue;
        if(product.rating == ratings) {
            ratingMatchValue = true;
        }
        else if(ratings == "")
        {
            ratingMatchValue = true;
        }
        else{
            ratingMatchValue = false;
        } 
        
        const startPriceMatchValue = typeof value.min !== 'number' || value.min <= product.salePrice;
        const endPriceMatchValue = typeof value.max !== 'number' || product.salePrice <= value.max;

        let filtercheck=JSON.parse(localStorage.state).filters;

        if(filtercheck.category.length > 0 && filtercheck.color.length > 0 && filtercheck.size.length > 0 && filtercheck.ratings.length > 0 )
        {
            return  categoryMatchValue && colorMatchValue  && sizeMatchValue && ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
        }
        if(filtercheck.category.length > 0 && filtercheck.color.length > 0 && filtercheck.size.length > 0   )
        {
            return  categoryMatchValue && colorMatchValue  && sizeMatchValue && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(filtercheck.category.length > 0 && filtercheck.size.length > 0 && filtercheck.ratings.length > 0  )
        {
            return  categoryMatchValue && colorMatchValue  && ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
        }
        if(filtercheck.category.length > 0 && filtercheck.color.length > 0 && filtercheck.ratings.length > 0 )
        {
            return  categoryMatchValue && colorMatchValue  &&  ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
        }
        if(filtercheck.color.length > 0 && filtercheck.size.length > 0 && filtercheck.ratings.length > 0 )
        {
            return  colorMatchValue  && sizeMatchValue  && ratingMatchValue && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(filtercheck.category.length > 0 && filtercheck.color.length > 0 )
        {
            return  categoryMatchValue && colorMatchValue   && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
        }
        if(filtercheck.category.length > 0 && filtercheck.size.length > 0)
        {
            return  categoryMatchValue && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(filtercheck.category.length > 0 && filtercheck.ratings.length > 0)
        {
            return  categoryMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(filtercheck.color.length > 0 && filtercheck.size.length > 0)
        {
            return  colorMatchValue && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(filtercheck.color.length > 0 && filtercheck.ratings.length > 0)
        {
            return  colorMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(filtercheck.size.length > 0 && filtercheck.ratings.length > 0)
        {
            return  sizeMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(filtercheck.color.length > 0)
        {
            return  colorMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(filtercheck.category.length > 0)
        {
            return  categoryMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(filtercheck.size.length > 0)
        {
            return  sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(filtercheck.ratings.length > 0)
        {
            return  ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        else
        {
            return startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }

    }).sort((product1, product2) => {
        if (sortBy === 'HighToLow') {
            return product2.price < product1.price ? -1 : 1;
        } else if (sortBy === 'LowToHigh') {
            return product2.price > product1.price ? -1 : 1;
        } else if (sortBy === 'Newest') {
            return product2.id < product1.id ? -1 : 1;
        } else if (sortBy === 'AscOrder') {
            return product1.name.localeCompare(product2.name);
        } else if (sortBy === 'DescOrder') {
            return product2.name.localeCompare(product1.name);
        } else{
            return product2.id > product1.id ? -1 : 1;
        }
    });
}