import { Router } from "express";

const router = Router();

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
    res.json([
        {
            id: "448add8844555",
            title: "Iphone",
            category: "Electronics"
        },
        {
            id: "448add8844555",
            title: "Iphone",
            category: "Electronics"
        },
        {
            id: "448add8844555",
            title: "Iphone",
            category: "Electronics"
        },
        {
            id: "448add8844555",
            title: "Iphone",
            category: "Electronics"
        },
        {
            id: "448add8844555",
            title: "Iphone",
            category: "Electronics"
        },
        {
            id: "448add8844555",
            title: "Iphone",
            category: "Electronics"
        },
    ]);
});

export default router;
