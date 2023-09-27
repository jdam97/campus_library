export const validateRol = (requiredPermission)=> async(req,res,next)=>{
    
    let {permisos} = req.auth.payload.info[0];
    if (!permisos.includes("admin")) {
        if (!permisos.includes(requiredPermission))
          return res.send({ status: 401, message: "No tienes autorización" });
      }
      next();
    
}