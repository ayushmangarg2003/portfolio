import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import './Details.css'

gsap.registerPlugin(ScrollTrigger);

const Details = (props) => {
  const sectionRefs = useRef([]);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Set up GSAP animations
  useEffect(() => {
    const splitTypes = document.querySelectorAll('.reveal-type');

    splitTypes.forEach((char) => {
      const bg = char.dataset.bgColor;
      const fg = char.dataset.fgColor;

      const text = new SplitType(char, { types: 'chars' });

      gsap.fromTo(
        text.chars,
        {
          color: bg,
        },
        {
          color: fg,
          duration: 0.2,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div>
      <section ref={(el) => (sectionRefs.current[0] = el)}>
        <p
          className="reveal-type"
          data-bg-color="#333"
          data-fg-color="#f6f6f6"
        >
          {props.details}
        </p>
      </section>
    </div>
  );
};

export default Details;
