const app  = document.querySelector("#app")


   
const contenido = () => {
    // 1. Tipo
    // 2. Propiedades
    // 3. Hijos 
    const ahora = "1/8/2022"
    const h1 = React.createElement("h1", {key:1}, "Con lo visto hasta ahora ({ahora})");
    const h2 = React.createElement("h2", {key:2}, "Replica este HTML");
    const h3 = React.createElement("h3", {key:3}, "Usando");
    const h4 =  React.createElement("h4", {key:4}, "React.js");
    const footer = React.createElement("footer", {key:5}, "Suerte!");
    return React.createElement("div", {className:"root"}, [h1, h2, h3, h4, footer]);
    
}

const root=ReactDOM.createRoot(app);
root.render(contenido());
document.title = "Frontend III Ejercicio práctico clase 1"; // esto renderiza todo de nuevo?
