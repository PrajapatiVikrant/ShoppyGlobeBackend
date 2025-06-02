import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    brand:{
        type:String,
        require:true
    },
     category: {
        type: String,
        required: true,
        enum: ["furniture", "beauty", "fragrance", "groceries"],
    },
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    offer:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
})

const productModel = mongoose.model("shoppyglobe_productSchema",productSchema);

export default productModel;