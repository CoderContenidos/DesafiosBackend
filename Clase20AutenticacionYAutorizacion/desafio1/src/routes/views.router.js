import { Router } from 'express';

const router = Router();

router.get('/register', (req, res) => {
    res.render('register');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/', (req, res) => {
    res.render('profile', {
        user: req.session.user
    });
})


router.get('/resetPassword',(req,res)=>{
    res.render('resetPassword');
})
export default router;