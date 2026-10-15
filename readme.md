# 📊 Tablero de Control Operativo · PMO 2027

¡Bienvenido! Este repositorio aloja la versión interactiva y modular del **Reporte Ejecutivo de la PMO**, rediseñado para el monitoreo ágil de los programas del portafolio.

## 🚀 Características Incorporadas
*   **Buscador Dinámico:** Filtra instantáneamente proyectos, iniciativas o encargados en tiempo real desde la barra de herramientas superior.
*   **Alineación Anti-Desfases:** Distribución en 3 columnas maestras fijas que optimizan el espacio visual sin dejar huecos interactivos.
*   **Visualización de Estatus:** Los proyectos integran un indicador cromático visual según su estado operativo (`En proceso`, `Planeado` o `No planeado`).
*   **Gestión Desacoplada:** Toda la base informativa se lee directamente desde `data.js`, eliminando la necesidad de alterar código lógico (`app.js`) para actualizar metas.

## 📂 Arquitectura de Archivos
1.  `index.html`: Contenedores base del tablero, buscador y cuadrículas lógicas.
2.  `styles.css`: Identidad visual premium, degradados dinámicos por programa y estilos de estatus.
3.  `data.js`: Estructura central de datos orientada a objetos (Portafolio de Programas).
4.  `app.js`: Motor de filtrado y renderizado dinámico en el DOM.
5.  `README.md`: Documentación oficial del proyecto.

## 🛠️ Instrucciones de Despliegue
Al tratarse de una solución *Front-end pura*, no requiere instalación de dependencias de servidor:
1. Descarga o remueve la extensión '.txt' de los 5 archivos guardándolos en una misma carpeta local.
2. Abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Edge, Safari, Firefox).