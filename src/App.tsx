
import { useGSAP } from '@gsap/react';
import gsap, { Expo } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import './App.css';

function App() {
  gsap.registerPlugin(TextPlugin)

  useGSAP(() => {
    const tl = gsap.timeline()

    const ideaTextTransition = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg",
      duration: 0.7
    };

    const ideaTextTransitionLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg",
      duration: 0.7
    };

    tl.to(".container", { visibility: "visible", duration: 0.1 })
      .from(".one", { opacity: 0, y: 10, duration: 0.7 })
      .from(".two", { opacity: 0, y: 10, duration: 0.4 })
      .to(".one", { opacity: 0, y: 10, duration: 0.7 }, "+=2.5")
      .to(".two", { opacity: 0, y: 10, duration: 0.7 }, "-=1")
      .from(".three", { opacity: 0, y: 10, duration: 0.7 })
      .to(".three", { opacity: 0, y: 10, duration: 0.7 }, "+=2")
      .from(".four", { scale: 0.2, opacity: 0, duration: 0.7 })
      .from(".fake-btn", { scale: 0.2, opacity: 0 })
      .to("#text", { text: { value: "Feliz dia dos namorados! Eu te amo e tudo mais... blablabla"}, duration: 5, delay: 1, ease: "none"})
      .to(".fake-btn", { backgroundColor: "#49a791", duration: 0.1 })
      .to(".four", { scale: 0.2, opacity: 0, y: -150, duration: 0.5 }, "+=0.7")
      .from(".idea-1", ideaTextTransition)
      .to(".idea-1", ideaTextTransitionLeave, "+=1.5")
      .from(".idea-2", ideaTextTransition)
      .to(".idea-2", ideaTextTransitionLeave, "+=1.5")
      .from(".idea-3", ideaTextTransition)
      .to(".idea-3 strong", { scale: 1.2, x: 10, backgroundColor: "rgb(237, 21, 21)", color: "#fff", duration: 0.5 })
      .to(".idea-3", ideaTextTransitionLeave, "+=1.5")
      .from(".idea-4", ideaTextTransition)
      .to(".idea-4", ideaTextTransitionLeave, "+=1.5")
      .from(".idea-5", { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0, duration: 0.7 }, "+=0.5")
      .to(".idea-5 span", { rotation: 90, x: 8, duration: 0.7 }, "+=0.4")
      .to(".idea-5", { scale: 0.2, opacity: 0, duration: 0.7 }, "+=2")
      .from(".idea-6 span", { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut, duration: 0.8, stagger: 0.2 })
      .to(".idea-6 span", { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut, duration: 0.8, stagger: 0.2 }, "+=1")
      .fromTo(".baloons img", { opacity: 0.9, y: 1400, duration: 2.5, stagger: 0.2 }, { opacity: 1, y: -1000, duration: 2.5, stagger: 0.2 })
      .from(".girl-dp", { scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45, duration: 0.5 }, "-=2")
      .from(".wish-hbd", { scale: 3, opacity: 0, ease: Expo.easeOut, duration: 0.8, stagger: 0.2 })
      .from(".wish h5", { opacity: 0, y: 10, skewX: "-15deg", duration: 0.5 }, "party")
      .to(".eight svg", { visibility: "visible", opacity: 0, scale: 80, repeat: 3, repeatDelay: 1.4, duration: 1.5, stagger: 0.3 })
      .to(".six", { opacity: 0, y: 30, zIndex: "-1", duration: 0.5 })
      .from(".nine p", { opacity: 0, y: -20, rotationX: 5, skewX: "15deg", duration: 1, stagger: 1.2 })
      .fromTo(".last-smile", { scale: 1, duration: 2, repeat: -1 }, { scale: 1.1, duration: 2, repeat: -1 }, "+=1");
  })

  return (
    <div className="App">
      <div className="container">
        <div className="one">
          <h1 className="one">
            <span id="name">Marine</span>
          </h1>

          <p className="two" id="greetingText">Eu amo te chamar assim kkk</p>
        </div>

        <div className="three">
          <p>Nosso primeiro dia dos namorados! 😍</p>
        </div>

        <div className="four">
          <div className="text-box">
            <span id="text"></span>
          </div>

          <p className="fake-btn">
            <img src="send.svg" />
          </p>
        </div>

        <div className="five">
          <p className="idea-1">Não era o que eu estava planejando.</p>
          <p className="idea-2">Queria que fosse tudo muito especial.</p>
          <p className="idea-3">
            Porém, por motivos de força maior...
          </p>
          <p className="idea-4">Tive que utilizar do que eu sei fazer de melhor:</p>
          <p className="idea-5">
            Improvisar {' '}
            <span>:)</span>
          </p>
          <p className="idea-6">
            <span>E</span>
            <span>n</span>
            <span>t</span>
            <span>ã</span>
            <span>o</span>
          </p>
        </div>

        <div className="six">
          <img src="watch.png" alt="" className="girl-dp" id="imagePath" />
          <div className="wish">
            <p className='wish-hbd'>Feliz dia dos namorados, minha vida!</p>
            <h5 id="wishText">Quero agradecer por cada momento que passamos juntos e por todo o amor e carinho que tu me da. Tu ilumina meus dias e enche minha vida de alegria. Sou eternamente grato por te ter ao meu lado.</h5>
          </div>
        </div>

<div className="seven">
          <div className="baloons">
            <img src="balloon.svg" alt="" />
            {/* <img src="music-note.svg" alt="" />  */}
            <img src="smiling.svg" />
            <img src="heart.svg" />
            {/* <img src="happy.svg" alt="" />  */}
            <img src="balloon.svg" alt="" />
            {/* <img src="music-note.svg" alt="" />  */}
            {/* <img src="smiling.svg" />  */}
            <img src="heart.svg" />
            <img src="balloon.svg" alt="" />
            <img src="music-note.svg" alt="" />
            <img src="heart.svg" />
            <img src="balloon.svg" alt="" />
            {/* <img src="music-note.svg" alt="" />  */}
            {/* <img src="smiling.svg" />  */}

            <img src="heart.svg" />
            <img src="balloon.svg" alt="" />
            <img src="heart.svg" />
            <img src="heart.svg" />
            <img src="music-note.svg" alt="" />
            <img src="smiling.svg" />

            <img src="happy.svg" alt="" />
            <img src="balloon.svg" alt="" />
            <img src="heart.svg" />
            {/* <img src="music-note.svg" alt="" />  */}
            {/* <img src="heart.svg"  */}

            <img src="happy.svg" alt="" />
            <img src="balloon.svg" alt="" />
            <img src="music-note.svg" alt="" />
            <img src="smiling.svg" />
            {/* <img src="heart.svg" />  */}
            {/* <img src="happy.svg" alt="" />  */}
          </div>
        </div>

        <div className="eight">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
        </div>

        <div className="nine">
          <p>#SamsungEnviaLogoProRS</p>
          <p id="replay">Te amo my life</p>
          <p className="last-smile">♥</p>
        </div>
      </div>
    </div>
  );
}

export default App
