# Backend - Trabajo Práctico Final (Node.js)

Este repositorio contiene el código fuente del servidor backend, desarrollado en Node.js como parte del Trabajo Práctico Final. Su propósito es crear una API RESTful para gestionar los productos de la tienda online "Crisol", cumpliendo con los requerimientos de autenticación y arquitectura solicitados.

**Importante:** Este proyecto tiene una finalidad puramente académica y de demostración.

---

## Tecnologías Utilizadas

- **Node.js:** Entorno de ejecución para JavaScript del lado del servidor.
- **Express.js:** Framework para la creación de la API RESTful y la gestión de rutas y middlewares.
- **Firebase Admin SDK:** Para la integración con **Firestore** como base de datos NoSQL.
- **JSON Web Token (JWT):** Para la generación de tokens de autenticación en el endpoint de login y la protección de rutas.
- **CORS:** Middleware para habilitar el Intercambio de Recursos de Origen Cruzado.
- **Dotenv:** Para la gestión de variables de entorno, manteniendo la configuración sensible fuera del código.

## Características Principales

- **Arquitectura en Capas:** El proyecto está estructurado en `routes`, `controllers`, `services` y `models` para una mejor organización y escalabilidad.
- **API RESTful:** Endpoints para operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los productos.
- **Autenticación con JWT:** Un endpoint `/auth/login` valida las credenciales del usuario y devuelve un Bearer Token para ser utilizado en peticiones posteriores.
- **Rutas Protegidas:** Un middleware verifica la validez del JWT para asegurar que solo usuarios autenticados puedan realizar operaciones de escritura (POST, PUT, DELETE).

## Endpoints de la API

- `GET /api/products`: Devuelve todos los productos.
- `GET /api/products/:id`: Devuelve un producto por su ID.
- `POST /api/products/create`: (Protegido) Agrega un nuevo producto.
- `DELETE /api/products/:id`: (Protegido) Elimina un producto por su ID.
- `POST /auth/login`: Recibe credenciales y devuelve un Bearer Token.

## Instalación y Uso

1.  Clonar el repositorio:
    ```bash
    git clone https://github.com/elmoteroloco/tpf-node-final.git
    ```
2.  Instalar dependencias:
    ```bash
    npm install
    ```
3.  Crear un archivo `.env` en la raíz del proyecto y configurar las variables de entorno (credenciales de Firebase, secreto para JWT, etc.).
4.  Ejecutar el servidor en modo de desarrollo:
    ```bash
    npm run dev
    ```

---
