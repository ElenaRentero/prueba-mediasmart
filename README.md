# Prueba de código para Junior Developer 📫
En este repositorio se encuentra el resultado de la prueba técnica de código realizada por Elena Clemente Rentero para **Mediasmart**. Se ha utilizado el framework de React **NextJS** para su desarrollo.

> **Note**
> Enlace directo al proyecto pinchando en el siguiente [enlace]()

## 📌 Descripción 

### Front end

Para el frontend, se ha diseñado un formulario que envía una solicitud POST a la API. El formulario incluye los siguientes campos:

- **Nombre completo** (obligatorio, con más de 3 caracteres)
- **Correo electrónico** (obligatorio, con validación sencilla de email)
- **Teléfono** (opcional, solo números y sin tener en cuenta los prefijos del país)
- **Mensaje** (obligatorio, con más de 10 caracteres)

Además, se han validado los campos del formulario antes de enviar los datos a la API.

### Back end

Para el backend, se ha desarrollado una API con un único endpoint de tipo **POST** que recibe la información introducida en el formulario descrito anteriormente. La API además, responde en formato JSON y contiene los siguientes campos:

- **Nombre completo**
- **Correo electrónico**
- **Teléfono**
- **Mensaje**

### Extras

- El formulario se ha estilizado utilizando los colores y la tipografía de [mediasmart](https://www.mediasmart.io/contact-us).

- Además, se ha agregado un campo dinámico en el formulario que consiste en un checkbox que permite al usuario seleccionar si desea incluir el tratamiento que se le dará al enviar el formulario. Si el checkbox está activo, se muestra un menú desplegable (select) con dos opciones: ["Sr.", "Sra."]. La información seleccionada en este menú desplegable se envia junto con el resto de los campos del formulario a la API. Si el checkbox está desactivado, el menú desplegable no se muestra ni se tiene en cuenta para el envío de campos de la API.

## 🛠️ Herramientas

A la hora de resolver el proyecto se han utilizado las siguientes herramientas:

- **HTML**
- **CSS**
  - Flexbox
  - Box model (size, padding and margin)
  - Grid
- **NextJS**
  - Gestión de eventos en el navegador
  - Componentes: identifica componentes únicos y reutilizables
  - UseState: variables de estado para todos los datos manipulados por el usuario
  - Props: flujo de información de componentes padres a hijos
  - Next/image: extensión del componente ```<img>``` de HTML para optimización de las imágenes
  - Proptypes: para verificar los tipos de props recibidos por los componentes
- **Control de versiones GIT**
- **ESLint** para encontrar y arreglar errores de sintaxis en el código

## 💾 Guía de inicio rápido 

En primer lugar, para tener el repositorio en tu ordenador:

1. Haz click en la esquina superior derecha > **Fork**.

Una vez **hecho el fork**:

1. Ábrelo en tu editor de código.
1. Abre una terminal e **instala las dependencias locales** ejecutando en la terminal de comandos...

```npm install```

Una vez hemos instalado las dependencias, **el proyecto debe arrancarse cada vez que nos pongamos a programar** ejecutando el siguiente comando:

```npm run dev```

Este comando abre una ventana de Chrome y muestra tu página web.

Después de ejecutar ```npm run dev``` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta ```src/``` y programar cómodamente.

## ✅ Resultado final

<img width="1000" alt="image" src="https://user-images.githubusercontent.com/111798280/227615532-444ef85f-e9ad-4abc-b67b-9ea3730c40fc.png">
