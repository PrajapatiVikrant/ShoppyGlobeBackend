const auth = {
    signup:async(req,res)=>{
        const {email,password} = req.body;
        try {
           
            


        } catch (error) {
            res.status(500).json({
                message:"Internal Server Error"
            })
        }

    },
    login:async(req,res)=>{

    }
}




export default auth;