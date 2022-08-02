const router = require('express').Router();
const User = require('../../models/user');

// Create new User
router.post('/', async (req,res) =>{
    try{
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(() =>{
            req.session.loggedIn = true;
            res.status(200).json(newUser);
        })
    }catch(err){
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req,res) =>{
    try{
        const userData = await User.findOne({
            where:{
                username: req.body.username,
            }
        });
    }catch(err){

    }
});

//Logout
router.post('/logout',  (req,res) =>{

});