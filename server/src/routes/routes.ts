import { Router } from "express";

const router = Router();

const products = [
    {
        id: 1,
        title: "Iphone",
        category: "Electronics"
    },
    {
        id: 2,
        title: "Iphone",
        category: "Electronics"
    },
    {
        id: 3,
        title: "Iphone",
        category: "Electronics"
    },
    {
        id: 4,
        title: "Iphone",
        category: "Electronics"
    },
    {
        id: 5,
        title: "Iphone",
        category: "Electronics"
    },
    {
        id: 6,
        title: "Iphone",
        category: "Electronics"
    },
]




router.get("/test", (req, res) => {
    res.json({ message: "API is working!" });
});
router.get("/users", (req, res) => {
    res.json({
        id: 455514,
        name: "Tamjid islam",
        address: " Dhaka , Bangladesh",
        createat: "2012-04-23T18:25:43.511Z"
    });
});


router.get("/products", (req, res) => {
    res.json(products);
});


router.get("/products/:id", (req, res) => {

    const product = products.find((p) => p.id === parseInt(req.params.id))
    if (!product) res.status(404).json({ message: "Product Not found" })
    res.send(product)
});

export default router;
