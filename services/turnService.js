import { DateTime } from "luxon";
import turnModel from "../models/turnModel";

export const createTurn = async (data) => {
  try {
    const newTurn = new turnModel({
      ...data,
      timestamp: new Date().toISOString(),
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
