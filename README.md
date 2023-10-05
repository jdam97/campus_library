# CAMPUS' LIBRARY

Este es un proyecto full stack desarrollado con React JS, Node.js, MongoDB y Express enfocado en el sistema de gestion de una biblioteca que permite realizar las  reservas  de libros que requieran los estudiantes en CampusLands. La aplicación tiene tres tipos de usuarios: Users, Staff y Admin, cada uno con diferentes funcionalidades y permisos.

## Inicio de sesión y registro
En esta vista los usuarios podrán iniciar sesión con sus perfiles o en caso no poseer uno, crearlo.

### Sign in
![Alt text](./src/assets/login.png) por colocar

### Sign up
![Alt text](./src/assets/login.png) por colocar

## Users
![Alt text](./client/public/image.png) por colocar

- Iniciar sesión y registrarse en la plataforma.
- Visualizar los libros disponibles para reservas.


- Crear Reservas de los libros que quieres.

**GET** `http://192.168.129.72:5047/v1/usuarios/disponibles` Para la visualización de los libros disponibles se ejecutan al cargar la página, listando solo los libros disponibles de momento para reserva.

**POST** `http://192.168.129.72:5047/v1/usuarios/booking`Para la reserva de los libros, los cuales los campers deberán ingresar los datos necesarios para ello como la fecha de inicio y finalizaciónd e la reserva

Luego de hacer la reserva del libro que se requiere, se envia una solicitud al bibliotecario(staff), este las aceptará o las declinará segpun lo vea necesario
 
 馃敶 **NOT SOLVED**

 馃數 **IN PROGRESS**

 馃煝 **SOLVED**


## Staff
![Alt text](./client//public/image-1.png) Por colocar

- Se debe iniciar sesion con una cuenta registrada por un administrador.
- Visualizar todas las solicitudes de prestamos pendientes
- aceptar o declinar las solciitudes dependiendo del tiempo y requerimientos.
- en el boton + permite crear los libros nuevos que entran a la biblioteca, estos de una vez se colocan disponibles para que el usuario los pueda visualizar.
- Cuando se aceptan las reservas, este enera el contrato activo de la persona que hizo la reserva.

**GET** `http://192.168.129.72:5047/v1/staff` Permite mostrar todas las solicitudes pendientes que se deben aceptar o declinar.
![Alt text](./client/public/image-2.png)

**POST** `http://192.168.129.72:5047/v1/staff/loans` Permite crear el contrato de reserva del producto(loans) cuando se selecciona el boton de "aceptar" a la reserva especifica mostrada en pantalla.
![Alt text](./client/public/image-3.png)

**PUT** `http://192.168.129.72:5047/v1/staff/loans` Automaticamente modifica la reserva y la coloca en el sstado como "disponible", esto para que el usuario pueda ver si la reserva fue aceptada **Confirmado** 

**PUT** `http://192.168.129.72:5047/v1/staff/loans` En caso de declinar la solicitud, se colocara el estadod e la reserva como "cancelada" lo que significará que la petición de la reserva del libro fue rechazada.
**Cancelada** 

**POST** `http://192.168.129.72:5047/v1/staff/productos` Permite crear nuevos productos o en este caso libros para que el usuario pueda visualizarlos, automáticamente se colocan como disponibles para la vista del usuario.



## Admin
![Alt text](./client/public/image-4.png) por colocar

- Iniciar sesión, se debe iniciar sesion con la unica cuenta creada por el super admin.
- Listar los colaboradores de la biblioteca.
- Crear nuevos colaboradores que haran parte del staff de la biblioteca.

**GET** `http://192.168.129.72:5047/v1/admin` Automaticamente al cargar la página de admin, esta traerá las cards con la información de todos los usuarios actuales de la biblioteca.
![Alt text](./client/public/image-5.png)

_Correo del admin_
```bash
    {
        correo:"jonathan@gmail.com",
        pass:"12345"
    }
```

**POST** `http://192.168.129.72:5047/v1/admin/signUpStaff` Permite crear nuevos colaboradores para que estos inicien sesion normalmente desde el apartado del login con su rol de "colaborador".

## Tecnolog铆as Utilizadas

- **Frontend**: React JS se utiliza para crear la interfaz de usuario.
- **Backend**: Node.js y Express.js se utilizan para desarrollar la API RESTful.
- **Base de datos**: MongoDB se utiliza para almacenar los datos de la aplicaci贸n.
- **Autenticación**: Se implementa un sistema de autenticación utilizando JWT (JSON Web Tokens).
- **Control de versiones**: Git se utiliza para controlar la versión del código.
- **Gestión de dependencias**: NPM se utiliza para gestionar las dependencias del proyecto.

## Configuración del Proyecto

1. Clona el proyecto
```bash
git pull https://github.com/jdam97/campus_library.git
```

3. En el folder client ejecuta 
```bash
npm install
npm run build
```
2. El folder server ejecuta 
```bash
npm install
npm run dev