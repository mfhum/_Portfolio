import React from 'react';
import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//const canvas = document.getElementById('canvas3d');
//const app = new Application(canvas);
//app.load('https://prod.spline.design/eglYARXhNFF5JzGZ/scene.splinecode');
function Hero() {
  const spline = useRef();
  gsap.registerPlugin(ScrollTrigger);

  function onLoad(splineApp) {
    spline.current = splineApp;
    const text = splineApp.findObjectById('960e0b68-df4e-422d-9e8d-c0cad0669f8f');
    const letters = splineApp.findObjectById('350d61eb-42e9-4ee3-8aa2-9a63c75b99a1');
    const letterM = splineApp.findObjectById('55b53231-595d-459d-86cc-eb378077cb6d');
    const letterA = splineApp.findObjectById('b8270215-d89b-4539-aa5b-24c5e018b2f9');
    const letterR = splineApp.findObjectById('db2dde33-6a22-432a-aa6c-8e65629e228d');
    const letterI = splineApp.findObjectById('b8896a2b-22d2-49d7-b402-a7bde7058d57');
    const letterU = splineApp.findObjectById('38ef0751-2803-4828-a738-b62b9b49cd4d');
    const letterS = splineApp.findObjectById('5c371b64-8280-4732-aa61-557b07c336cf');
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#testTrigger',
          start: 'top bottom+10%',
          end: 'top 30%',
          scrub: true,
        },
      })
      .to(text.position, { x: -400, y: -550 }, 0)
      .to(text.scale, { x: 0.5, y: 0.5, z: 0.5 }, 0)
      .to(letters.position, { y: -200 }, 0)
      .to(letterM.rotation, { x: -0.7, y: 0.5, z: 0.8 }, 0)
      .to(letterM.position, { x: -20, y: -25 }, 0)
      .to(letterA.rotation, { x: 0.2, y: 1, z: -0.3 }, 0)
      .to(letterR.rotation, { x: -0.4, y: 0.4, z: -0.5 }, 0)
      .to(letterI.position, { x: 410 }, 0)
      .to(letterI.rotation, { x: 0, y: 1.2, z: -0.2 }, 0)
      .to(letterU.position, { x: 500 }, 0)
      .to(letterU.rotation, { x: -0.3, y: 0.5, z: 0.2 }, 0)
      .to(letterS.position, { x: 670 }, 0)
      .to(letterS.rotation, { x: -0.3, y: -0.5, z: -0.3 }, 0);
  }

  return (
    <section id='Hero' className='Hero'>
      <div className='canvas'>
        <Spline className='Objects' scene='https://prod.spline.design/eglYARXhNFF5JzGZ/scene.splinecode' onLoad={onLoad} />
      </div>
      <div id='testTrigger'>hallo</div>
    </section>
  );
}

export default Hero;
