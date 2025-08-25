import { contactModel } from "../Model/contactModel.js";

export const contactControllers = async (req, res) => {
    try {
        const reqBody = req.body;
        const contact =await contactModel.create(reqBody)
        return res.json({
            success: true,
            data: contact
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
