import areaModel from "../models/areaModel";

export const getAreas = async () => {
  try {
    const areas = await areaModel.find();
    return areas;
  } catch (error) {
    return error;
  }
};
