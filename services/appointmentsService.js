import appointmentModel from "../models/appointmentModel";

export const createAppointment = async (data) => {
  try {
    const timeNow = new Date().toISOString();
    const newAppointment = new appointmentModel({
      ...data,
      timestamp: timeNow,
      updatedAt: timeNow,
    });
    await newAppointment.save();
    return newAppointment;
  } catch (error) {
    return error;
  }
};
