import reactImg from './assets/react-core-concepts.png';        //[A]  Forma optimizada para importar imagenes
import { CORE_CONCEPTS } from './data';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


/*Dos reglas importantes a seguir
El nombre de la función debe empezar con capital letter
La función tiene que retornar un valor que sea "renderizable"
*/

function CoreConcept({title,description,image}){
  return (
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>

    </li>
  );
}


function Header() {
  /*
    Como buena practica separar todo el codigo de js fuera de JSX para no tenero todo el código dentro de los curly braces
  */
  const description = reactDescriptions[genRandomInt(2)];


  return (
    <header>
      {/*<img src="src/assets/react-core-concepts.png" alt="Stylized atom" />*/}
      {/*No es buena práctica poner valores hardcodeados en src porque durante deployment se puede perder
      lo ideal es crear un import [A]*/}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts </h2>
        <ul>
        <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}/>

          {/*Alternativa de sintaxis, spread operator al objeto, pero al pasarlo las propiedades se tienen que llamar igual que los parametros que recibe*/}
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>

        </section>
      </main>
    </div>
  );
}

export default App;

/* 
Para crear un proyecto de react
npm create vite@latest react-project
npm install 
npm run dev
*/
