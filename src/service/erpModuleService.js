// import ErpModule from "../model/erpModuleModel.js";

import ErpModule from "../model/erpModuleModel.js";

// Create a new ERP Module
const createErpModule = async (postBody) => {
  console.log("create ERP module hit");
  const result = await ErpModule.create(postBody);
  return result;
};

// Get all ERP Modules
const getErpModules = async () => {
  const result = await ErpModule.findAll();
  return result;
};

// Update an ERP Module
const updateErpModule = async (postBody, id) => {
  const result = await ErpModule.update(postBody, {
    where: { moduleID: id },
  });
  return result;
};

// Get a single ERP Module by ID
const getErpModuleById = async (id) => {
  const result = await ErpModule.findByPk(id);
  return result;
};

// Delete an ERP Module
const deleteErpModule = async (id) => {
  const result = await ErpModule.destroy({
    where: { moduleID: id },
  });
  return result;
};

// Exporting all service functions as an object
export const erpModuleService = {
  createErpModule,
  getErpModules,
  updateErpModule,
  getErpModuleById,
  deleteErpModule,
};
