import { Router} from 'express';
import studentsModel from '../models/Students.js';

const router = Router();

router.get('/students', async (req,res)=>{
    const {page=1} = req.query;
    const {docs,hasPrevPage,hasNextPage,nextPage,prevPage} = await studentsModel.paginate({},{limit:10,page,lean:true});
    const students = docs;
    res.render('students',{
        students,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage
    });
})

export default router;