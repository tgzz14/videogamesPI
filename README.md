![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# **VIDEOGAMES** | Proyecto Individual

## **📌 OBJETIVOS**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  Afirmar y conectar los conceptos aprendidos en la carrera.
-  Aprender mejores prácticas.
-  Aprender y practicar el workflow de GIT.
-  Utilizar y practicar testing.

<br />

---

## **📖 ENUNCIADO GENERAL**

La idea de este proyecto es construir una aplicación web a partir de la API [**rawg**](https://rawg.io/apidocs) en la que se pueda:

-  Buscar videojuegos.
-  Visualizar la información de los videojuegos.
-  Filtrarlos.
-  Ordenarlos.
-  Crear nuevos videojuegos.

<br />

---

<div align="center">

## **📁 INSTRUCCIONES**

</div>

<br />

### **🖱 BASE DE DATOS**

**📍 MODELO 1 | Videogames**

-  ID (deben ser distintos a los que vienen de la API). \*
-  Nombre. \*
-  Descripción. \*
-  Plataformas. \*
-  Imagen. \*
-  Fecha de lanzamiento. \*
-  Rating. \*

<br />

**📍 MODELO 2 | Genres**

-  ID. \*
-  Nombre. \*

<br />

---

<br />

### **🖱 BACK-END**

Cuenta con las siguientes rutas:

#### **📍 GET | /videogames**

-  Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.

#### **📍 GET | /videogames/:idVideogame**

-  Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
-  El videojuego es recibido por parámetro (ID).

#### **📍 GET | /videogames/name?="..."**

-  Esta ruta obtiene los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
-  Busqueda independiente de mayúsculas o minúsculas.
-  Si no existe el videojuego, muestra un mensaje adecuado.
-  Busca tanto los de la API como los de la base de datos.

#### **📍 POST | /videogames**

-  Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
-  Toda la información debe ser recibida por body.
-  Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).

#### **📍 GET | /genres**

-  Obtiene un arreglo con todos los géneros existentes de la API.

<br />

---

<br />

### **🖱 FRONT-END**


**📍 LANDING PAGE |**
-  Cuenta con una imagen de fondo representativa al proyecto.
-  Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** la página principal de tu SPA:

-  SearchBar: un input de búsqueda para encontrar videojuegos por nombre.
-  Sector en el que se vea un listado de cards con los videojuegos.
-  Cuando se le hace click a una Card muestra al detalle de ese videojuego específico.
-  Botones/Opciones para **filtrar** por género, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating.
-  Paginado: Cuenta con un paginado que muestra un total de 15 videojuegos por página.

<br />

**📍 DETAIL PAGE |** en esta vista se muestra toda la información específica de un videojuego:

-  ID.
-  Nombre.
-  Imagen.
-  Plataformas.
-  Descripción.
-  Fecha de lanzamiento.
-  Rating.
-  Géneros.

<br />

**📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear un nuevo videojuego.

Este formulario es **controlado completamente con JavaScritp**. 

---

<br />


<div align="center">
<img src="./videogame.png" alt="" />
</div>
