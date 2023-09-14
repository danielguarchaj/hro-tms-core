import { getAreas } from "../services/areaService";

export const getAreasController = async (req, res) => {
  try {
    const areas = await getAreas();
    res.status(200).json(areas);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An error ocurred while fetching areas from core service",
      error: error.message,
    });
  }
};
