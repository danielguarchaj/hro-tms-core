import turnModel from "../models/turnModel";
import { TURN_STATUS } from "../utils/constants";

export const createTurn = async (data) => {
  try {
    const newTurn = new turnModel({
      ...data,
      timestamp: new Date().toISOString(),
      status: TURN_STATUS.onQueue,
    });
    await newTurn.save();
    return newTurn;
  } catch (error) {
    return error;
  }
};

export const getTurnsOfTheDay = async () => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const turns = await turnModel.find({
      timestamp: { $gte: today, $lt: tomorrow },
    });
    return turns;
  } catch (error) {
    return error;
  }
};

export const updateTurnStatus = async (id, newStatus) => {
  try {
    const updatedTurn = await turnModel.findByIdAndUpdate(
      id,
      { status: newStatus },
      {
        new: true,
      }
    );
    if (!updatedTurn) {
      throw new Error("User not found or couldn't be updated");
    }
    return updatedTurn;
  } catch (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }
};
