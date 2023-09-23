import { check } from "express-validator";

const validarLogin = [
    check('nombre').notEmpty().isString().withMessage('nombre debe ser de tipo string y es requerido'),
    check('apellido').notEmpty().isString().withMessage('apellido debe ser string y es requerido'),
    check('direccion').notEmpty().isString().withMessage('direccion debe ser string y es requerido'),
    check('telefono').notEmpty().isString().withMessage('telefono es de tipo string y es requerido'),
    check('email').notEmpty().isEmail().withMessage('se debe enviar en formato email y es requerido'),
    check('password').notEmpty().isString().withMessage('password debe ser formato string y es requerido'),
    check('cedula').notEmpty().isString().withMessage('cedula es de tipo string y es requerido'),
    check('rol').notEmpty().isString().withMessage('rol es un string y es requerido')
];
   
export default validarLogin;
