import {Router} from 'express';
import ctrlIndex from '../controllers/index.controller';
import upload from '../utils/multer';
import ctrlPosts from '../controllers/posts.controller'
import ctrlComment from '../controllers/comments.controller';


const router = Router();


  router.get('/',ctrlIndex.index)

  router.post('/publicar',upload.single("Value"), ctrlPosts.uploaded)

  router.get('/imagenes/:id', ctrlIndex.details)
  
  router.route('/imagenes/:id/comment')
          .get(ctrlComment.post)
          .post(ctrlComment.post)

  router.delete('/imagenes/:id', ctrlPosts.Remove)

export default router
