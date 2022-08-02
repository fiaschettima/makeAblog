const router = require('express').Router();
const { User } = require('../../models');

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
        if(!userData){
            res.status(400).json({
                message: 'Incorrect Username or password'
            });
            return;
        }
        const checkPass = await userData.checkPassword(req.body.password);

        if(!checkPass){
            res.status(400).json({
                message: 'Invalid username or password'
            });
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
        });
        res.status(200).json({
            user: userData, message: 'Logged in as'
        })
    }catch(err){
        res.status(500).json(err);
    }
});

//Logout
router.post('/logout',  (req,res) =>{
    if(req.session.loggedIn){
        req.session.destroy(() => {
            res.status(204).end();
        });
    }else{
        res.status(404).end();
    }
});