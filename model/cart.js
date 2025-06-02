import mongoose, { mongo } from "mongoose";

const cartSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,
        ref: "shoppyglobe_productSchema",
        require: true
    },
    user:{
        id:{
            type:mongoose.Schema.ObjectId,
            ref:"shoppyglobe_userSchema",
            require:true
        },
        email:{
            type:String,
            require:true
        }
    },
    image: {
        type: String,
        default: "",
    },
    name: {
        type: String,
        require: true
    },
    brand:{
        type:String,
        require:true
    },
    category: {
        type: String,
        required: true,
        enum: ["furniture", "beauty", "fragrance", "groceries"],
    },
    qty: {
        type: Number,
        require: true
    },

})
const cartModel = mongoose.model("shoppyglobe_cartSchema",cartSchema);
export default cartModel;

