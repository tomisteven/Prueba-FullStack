//importamos base de datos
import  Product  from '../models/Product.js';

import {uploadImage, deleteImagen} from '../cloudinary.js';
import fs from 'fs-extra'

 
const createProduct = async (req, res) => {

    try {

    const { 
        name,
        description,
        price
     } = req.body;
     const newProduct = new Product({  name, description, price });

     //ver objeto con null y undefined
     console.log(req.files);
     
    if (req.files?.image) {
        const result = await uploadImage(req.files.image.tempFilePath);
        newProduct.image = {
          public_id: result.public_id,
          secure_url: result.secure_url
        }
        await fs.unlink(req.files.image.tempFilePath)
      } 


     const productSaved = await newProduct.save(); 

     
     //ir a pagina de productos
     res.redirect('http://localhost:3000');
     



    } catch (error) {
        console.log(error);
    }
}



const getProducts = async (req, res) => {
try {
    const product = await Product.find();
    res.json(product);
    
} catch (error) {
    console.log(error);
}
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
    } catch (error) {
        console.log(error);
    }
}





const deleteProduct = async (req, res) => {
    try {

        const { id } = req.params;
        const product = await Product.findById(id);
        //await deleteImagen(product.image.public_id);
        await product.remove();
        res.json({ message: 'product deleted' });

    } catch (error) {
        console.log(error);
        
    }


}

const editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const {name, description, price} = req.body;

        const product = await Product.findById(id);
        product.name = name;
        product.description = description;
        product.price = price;
        await product.save();
        
        res.json({ message: 'product Saved' }); 
    } catch (error) {

        console.log(error);

    }




    
    
}



export {
    createProduct,
    getProducts,
    deleteProduct,
    editProduct,
    getProduct
}