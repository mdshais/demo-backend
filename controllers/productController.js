let products = [
    {
        id: 1,
        title: "Soap",
        price: 200
    },
    {
        id: 2,
        title: "vegetables",
        price: 300
    },
    {
        id: 3,
        title: "fruits",
        price: 500
    }
]

export const showAll = (req,res) => {
    res.json(products);
}

export const saveProduct = (req,res) =>{
    products.push(req.body);
    res.json(products);
}