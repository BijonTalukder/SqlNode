import express from 'express';
import { sysCategoriesController } from '../controller/sysCategoriesController.js';

const sysCategoriesRouter = express.Router();

// Create a new category
sysCategoriesRouter.post('/create', sysCategoriesController.createCategory);

// Get all categories
sysCategoriesRouter.get('/', sysCategoriesController.getCategories);

// Get a single category by ID
sysCategoriesRouter.get('/category/:id', sysCategoriesController.getCategoryById);

// Update a category by ID
sysCategoriesRouter.patch('/update/:id', sysCategoriesController.updateCategory);

// Delete a category by ID
sysCategoriesRouter.delete('/delete/:id', sysCategoriesController.deleteCategory);

export default sysCategoriesRouter;