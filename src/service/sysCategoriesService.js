import sysCategoriesModel from "../model/sysCategoriesModel.js";

// Create category
const createCategory = async (postBody) => {
    try {
        const result = await sysCategoriesModel.create(postBody);
        return result;
    } catch (error) {
        throw new Error('Error creating category: ' + error.message);
    }
};

// Get all categories
const getCategories = async () => {
    try {
        const result = await sysCategoriesModel.findAll();
        return result;
    } catch (error) {
        throw new Error('Error fetching categories: ' + error.message);
    }
};

// Update category
const updateCategory = async (postBody, id) => {
    try {
        const result = await sysCategoriesModel.update(postBody, {
            where: { sysCategoryID: id },
        });
        return result[0] > 0; // Check if any row was updated
    } catch (error) {
        throw new Error('Error updating category: ' + error.message);
    }
};

// Get single category
const getCategory = async (id) => {
    try {
        const result = await sysCategoriesModel.findByPk(id);
        return result;
    } catch (error) {
        throw new Error('Error fetching category: ' + error.message);
    }
};

// Delete category
const deleteCategory = async (id) => {
    try {
        const result = await sysCategoriesModel.destroy({
            where: { sysCategoryID: id },
        });
        return result > 0; // Check if any row was deleted
    } catch (error) {
        throw new Error('Error deleting category: ' + error.message);
    }
};

export const sysCategoriesService = {
    createCategory,
    getCategories,
    updateCategory,
    getCategory,
    deleteCategory,
};
