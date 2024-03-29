const getAllProducts = async (categoryId) => {
let url = "http://localhost:5000/products";
if(categoryId){
    url += '?categoryId=' + categoryId ;
}

    const res = await fetch( url ,{
        cache: "force-cache"
    });
    return res.json();
};

export default getAllProducts;