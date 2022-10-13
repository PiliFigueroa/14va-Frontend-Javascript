# AhorrADAs
### ⚙️ Consigna

En este proyecto vas a crear una aplicación que permita llevar un registro de los gastos realizados y de los ingresos obtenidos. Aplicarás lo aprendido para estructurar y almacenar la información compleja de tu aplicación, y desarrollarás funcionalidades que posibiliten manipularla y realizar operaciones esenciales a la hora de trabajar con datos.

Para este proyecto trabajarás en equipo siguiendo prácticas que se utilizan profesionalmente para desarrollar colaborativamente.

### 👀 Ejemplo

Puedes ver un ejemplo funcional del proyecto siguiendo [este link](https://frontend-proyecto-ahorradas.adaitw.org/).

### 💬 Comentarios

A este proyecto se le suma un nuevo grado de complejidad: tenemos que trabajar y operar con datos, y tenemos que mostrarlos y poder interactuar con ellos. No solo tenemos que maquetar las pantallas, sino que también debemos asegurarnos que todo el manejo del DOM funcione correctamente y de que los datos mantengan su consistencia entre operación y operación.

Por eso, y de la misma forma que el proyecto anterior, es recomendable ir haciendo las funcionalidades una por una. Al empezar una nueva funcionalidad, deberíamos crear una nueva brach y ponerle un nombre adecuado (por ejemplo, `vista-balance`, `editar-categoria`, `filtros-busqueda`), en esa branch ocuparnos única y exclusivamente de esa funcionalidad, y una vez terminada, mergearla a main y continuar con la siguiente funcionalidad, repetiendo el proceso.

Si tenemos que mejorar o arreglar una funcionalidad ya agregada, deberíamos hacer una nueva branch para dicho fix o refactor, y nombrarla adecuadamente (por ejemplo, `refactor-filtros`, `fix-agrega-operacion`), y una vez finalizada la mejora o correción, mergearla a main.

Además, es sumamente importante trabajar con el DOM y con los datos por separado. Primero, porque son dominios de problema diferentes: cómo operar con datos por un lado, y cómo visualizarlos por el otro. Segundo, porque permite concentrarnos específicamente en una parte del problema, ignorando la otra parte o pudiendo trabajar en paralelo. Por lo tanto, ambos aspectos deberían funcionar correctamente de forma independiente, es decir, debería poder navegar por la aplicación por más que no haya ningún dato real, y debería poder trabajar con los datos (crearlos, guardarlos, editarlos, modificarlos) sin tener que hacer uso de la interfaz (llamando a las funciones por consola).

Esto lo podemos lograr si nos aplicamos a los criterios de funciones pura a la hora de operar los datos. Aquellas funciones que manipulen la información no deben modificar el DOM, ni llamar a ninguna otra función que lo haga. Y por otro lado, las que sí trabajan con el DOM, no deben manipular los datos, sino llamar a las funciones que lo hacen de forma pura.

### 👍 Criterios de aceptación

Los requisitos mínimos para que el proyecto sea considerado para la entrega son:

- Debe respetar el diseño general dado. Pueden modificarse a gusto colores, fondo, fuentes e íconos
- Debe respetar las interacciones y flujo de pantallas
- Debe ser responsive
- Debe cumplir con las funcionalidades principales listadas en la sección siguiente
- Debe hacer hacer uso de un framework CSS (sólo deben agregarse estilos propios si no hay forma de lograrlo con el framework)
- Debe estar deployado y ser accesible desde una dirección web
- No se debe trabajar en la rama main. En main sólo van a mergearse las demás ramas, por lo que cada commit de main debería ser el merge de una branch de una funcionalidad terminada
- Cada funcionalidad que se agregue debe hacerse mediante un PR (Pull Request)

### ⚙️ Funcionalidades principales

- Se debe poder agregar, editar y eliminar operaciones
- Se debe poder agregar, editar y eliminar categorías
- Cada operación debe contar con:
    - Descripción
    - Monto
    - Tipo de operación (gasto o ganancia)
    - Categoría a la que pertenece
    - Fecha de realización
- Cada categoría debe contar con un nombre
- Al eliminar una categoría, se deben eliminar todas las operaciones asociadas a ella
- Se debe poder filtrar las operaciones realizadas por:
    - Tipo de operación (gasto, ganancia o ambas)
    - Categoría a la que pertenece (una en específico o cualquiera)
    - Fecha de realización (a partir de la fecha seleccionada)
- Se debe poder ordernar las operaciones realizadas por:
    - Fecha de realización (más y menos reciente)
    - Monto (mayor y menor)
    - Descripción (en orden alfabético creciente y decreciente)
- Se debe poder obtener los siguientes reportes:
    - Un resumen con:
        - Categoría con mayor ganancia
        - Categoría con mayor gasto
        - Categoría con mayor balance
        - Mes con mayor ganancia
        - Mes con mayor gasto
    - Totales (gastos, ganancias y balances) por categoría
    - Totales (gastos, ganancias y balances) por mes
- Se deben guardar los datos en el almacenamiento local del navegador

📝 Criterios de evaluación

- Menos de 6 (No aprobado)
- 6 (Aprobado)
    - Respeta la consigna
    - Estructura correcta de documento HTML
    - Respeta el diseño dado
    - Respeta el funcionamiento
    - Respeta el flujo de pantallas
    - Responsive funciona correctamente
- 7 (Bueno)
    - Código bien indentado
    - Buenos nombres de funciones y variables
    - Los datos mantienen su integridad
- 8 (Muy bueno)
    - Funciones pequeñas
    - Nombres de branchs adecuados
    - Lógica clara y simple
    - Buen uso estructuras de datos (arrays y objetos)
    - Buen uso de estructuras de control (condicionales y bucles)
- 9 (Muy bueno)
    - Uso de funciones puras para el manejo de datos
    - Separación clara de manejo de datos y visualización
    - Buen uso de métodos funcionales de array (map, filter, reduce, etc)
- 10 (Excelente)
    - Reutilización de lógica / funciones
    - Commits con mensajes adecuados
    - Un PR por funcionalidad, fix o mejora
    - PRs con buenos títulos