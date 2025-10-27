# Backend - Trabajo Práctico Final (Node.js)

Este repositorio contiene el código fuente del servidor backend, desarrollado en Node.js como parte del Trabajo Práctico Final del cuatrimestre correspondiente a Back End / Node JS de la Comisión 25256 de la ruta FULL STACK en Talento Tech. Su propósito es crear una API RESTful para gestionar los productos, categorías y usuarios de la tienda online "Crisol" (React SAP), cumpliendo con los requerimientos de autenticación, roles y arquitectura solicitados.

**Importante:** Este proyecto tiene una finalidad puramente académica y de demostración.

---

## Tecnologías Utilizadas

-   **Node.js:** Entorno de ejecución para JavaScript del lado del servidor.
-   **Express.js:** Framework para la creación de la API RESTful y la gestión de rutas y middlewares.
-   **Firebase Admin SDK:** Para la integración con **Firestore** como base de datos NoSQL.
-   **JSON Web Token (JWT):** Para la generación de tokens de autenticación y la protección de rutas.
-   **Bcrypt:** Para el hasheo y la comparación segura de contraseñas de usuario.
-   **CORS:** Middleware para habilitar el Intercambio de Recursos de Origen Cruzado.
-   **Dotenv:** Para la gestión de variables de entorno.
-   **Prettier:** Para mantener un formato de código consistente en todo el proyecto.

## Características Principales

-   **Arquitectura en Capas:** El proyecto está estructurado en `routes`, `controllers`, `services` y `models` para una mejor organización y escalabilidad.
-   **API RESTful Completa:** Endpoints para operaciones CRUD sobre las colecciones de `productos`, `categorías` y `usuarios`.
-   **Autenticación con JWT:** Un endpoint `/auth/login` valida las credenciales del usuario contra la base de datos (usando `bcrypt`) y devuelve un Bearer Token.
-   **Control de Acceso por Roles:**
    -   **Rutas Protegidas:** Un middleware (`auth.middleware.js`) verifica la validez del JWT en las rutas que lo requieren.
    -   **Roles de Usuario:** Se definen dos roles principales: `admin` y `superAdmin`.
    -   **Middlewares de Rol:** (`roles.middleware.js`) Se utilizan para restringir el acceso a ciertas rutas según el rol del usuario.
-   **Lógica de "Dry Run" (Simulación):** Los usuarios con rol `admin` pueden realizar peticiones de escritura (POST, PUT, DELETE), pero estas son interceptadas y devuelven una respuesta exitosa simulada, sin modificar la base de datos. Solo el `superAdmin` puede realizar cambios reales.

## Endpoints de la API

### Autenticación
-   `POST /auth/login`: (Público) Recibe `email` y `password`, devuelve un Bearer Token si las credenciales son válidas.

### Productos
-   `GET /api/products`: (Público) Devuelve todos los productos.
-   `GET /api/products/:id`: (Público) Devuelve un producto por su ID.
-   `POST /api/products/create`: (Protegido - `admin` / `superAdmin`) Agrega un nuevo producto.
-   `PUT /api/products/:id`: (Protegido - `admin` / `superAdmin`) Actualiza un producto existente.
-   `DELETE /api/products/:id`: (Protegido - `admin` / `superAdmin`) Elimina un producto por su ID.

### Categorías
-   `GET /api/categories`: (Público) Devuelve todas las categorías.
-   `POST /api/categories/create`: (Protegido - `admin` / `superAdmin`) Agrega una nueva categoría.
-   `DELETE /api/categories/:name`: (Protegido - `admin` / `superAdmin`) Elimina una categoría por su nombre.

### Usuarios (Próximamente)
-   `GET /api/users`: (Protegido - `superAdmin`) Devuelve todos los usuarios.
-   `POST /api/users/create`: (Protegido - `superAdmin`) Crea un nuevo usuario.
-   `DELETE /api/users/:id`: (Protegido - `superAdmin`) Elimina un usuario por su ID.

---
