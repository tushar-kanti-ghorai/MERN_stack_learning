const {Router}=require("express");

const adminmiddleware=require("../MiddleWare/admin");

const router=Router();

router.post('/courses', adminmiddleware, (req, res) => {
    // Implement course creation logic
});

