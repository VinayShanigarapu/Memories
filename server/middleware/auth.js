// To check if user is allowed or not we create a middleware
import jwt from "jsonwebtoken";
// wants to like
// click the like button => auth middleware (next) => like controller.. // middleware verifies 
const auth = async (req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;
        if(token && isCustomAuth){
            decodedData = jwt.verify(token, 'test');

            req.userId = decodedData?.id; // ?. optional chaining
        }else{
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub; // sub is a google name
        }
        next();
    } catch (error) {
        console.log(error);
    }
}
export default auth;