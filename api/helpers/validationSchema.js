export const vSchema = (schema) => async (req,res,next) => {
    try {
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        res.status(400).send({status: 400, Infoerror:{message:"Error en el envio de los datos",error: error.message} });
    }
};