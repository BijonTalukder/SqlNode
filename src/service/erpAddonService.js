
import erpAddonModel from "../model/erpAddonModel.js";


// Create a new ERP Module
const createErpAddon= async (postBody) => {
  console.log("create ERP module hit");
  const result = await erpAddonModel.create(postBody);
  return result;
};

// Get all ERP Modules
const getErpAddons= async () => {
  const result = await erpAddonModel.findAll();
  return result;
};

// Update an ERP Module
const updateErpAddon= async (postBody, id) => {
  const result = await erpAddonModel.update(postBody, {
    where: { moduleID: id },
  });
  return result;
};

// Get a single ERP Module by ID
const getErpAddonById = async (id) => {
  const result = await erpAddonModel.findByPk(id);
  return result;
};

// Delete an ERP Module
const deleteErpAddon = async (id) => {
  const result = await erpAddonModel.destroy({
    where: { moduleID: id },
  });
  return result;
};

// Exporting all service functions as an object
export const erpAddonService = {
  createErpAddon,
  getErpAddons,
  updateErpAddon,
  getErpAddonById,
  deleteErpAddon,
};
