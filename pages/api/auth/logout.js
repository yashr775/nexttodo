
import { asyncError, errorHandler } from "../../../middlewares/error";
import { cookieSetter } from "@/utils/features";


const handler = asyncError(async (req, res) => {
    if (req.method !== "GET") {
        return errorHandler(res, 400, "Only GET request allowed");
    }



    cookieSetter(res, null, false);

    res.status(200).send({ sucess: true, message: "Loggeed out successfully" });
});

export default handler;
