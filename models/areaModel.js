import mongoose from "mongoose";

const AreaSchema = new mongoose.Schema({
  nombre: String,
});

export default mongoose.model("Area", AreaSchema);
