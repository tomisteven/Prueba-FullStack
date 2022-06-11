import {Router} from 'express';

import {getProducts, createProduct, editProduct, deleteProduct, getProduct} from '../controllers/Product.controller';


const router = Router()

//rutas de la aplicacion
router.get('/', getProducts)
router.post('/newproduct', createProduct)
router.delete('/deleteproduct/:id', deleteProduct)
router.put('/editproduct/:id', editProduct)
router.get('/getproduct/:id', getProduct)





export default router;