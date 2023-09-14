import { createTurn, getTurnsOfTheDay } from "../services/turnService";

export const createTurnController = async (req, res) => {
  try {
    const newTurn = await createTurn(req.body);
    res
      .status(201)
      .json({ message: "Turn created successfully", turn: newTurn });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export const getTurnsOfTheDayController = async (_req, res) => {
  try {
    const turnQueue = await getTurnsOfTheDay();
    console.log(turnQueue);
    res.status(200).json(turnQueue);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
