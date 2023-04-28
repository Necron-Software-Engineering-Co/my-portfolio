import './App.css';
import bg from '../src/assets/bg.mp4';
import AnimatedCursor from './hooks/AnimatedCursor';
import Typewriter from "typewriter-effect";


  const Figma = () => {
    window.location.href = 'https://www.figma.com/@carvalh'; 
  };

  const Linkedin = () => {
    window.location.href = 'https://www.figma.com/@carvalh'; 
  };

  const Github = () => {
    window.location.href = 'https://github.com/sentidofront'; 
  };

function App() {
  return (
    <div className="App">
      <video src={bg} autoPlay loop muted />
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="255, 255 ,255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      />
    <div className='Title'>
        <Typewriter
          options={{
            strings: "Guilherme Carvalho",
            autoStart: true,
            delay: 'natural',
            loop: false,
            deleteSpeed: 190,
          }}
        />
      </div>
      <div className='Text'>
      <Typewriter
          options={{
            strings: "Experienced Front-End Developer and UX/UI Designer with skills in Adobe Creative Suite, Figma, and web technologies Passionate about creating intuitive and user-friendly interfaces, with a focus on Schizoanalysis and Deleuzean practices. Strong communication and collaboration skills, constantly seeking to learn and improve, and excited about contributing to the success of a team's products.",
            autoStart: true,
            delay: 1,
            loop: false,
            deleteSpeed: 30,
          }}
        />
     </div>
     <div className='buttons'>
      <button onClick={Figma} className='figma-button'></button>
      <button className='linkedin-button'></button>
      <button onClick={Github} className='github-button'></button>
     </div>
     <h1 className='react'>react</h1>
      <div class="loading-bar-container">
        <div class="loading-bar">
          <div class="loading-bar-fill" id="loading-bar-fill"></div>
      </div>
      </div>
      <h1 className='design'>UX Design</h1>
      <div class="designloading-bar-container">
        <div class="designloading-bar">
          <div class="designloading-bar-fill" id="designloading-bar-fill"></div>
      </div>
      </div>
    </div>

  );
}

export default App;
