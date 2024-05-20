import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { createNoise2D } from 'simplex-noise';
import { clamp } from 'lodash';

function FluidBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const noise2D = createNoise2D();
    const noiseScale = 1;
    const particleCount = 500;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: 0,
      vy: 0,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        const angle = noise2D(p.x * noiseScale, p.y * noiseScale) * Math.PI * 6;
        p.vx += Math.cos(angle) * 0.5;
        p.vy += Math.sin(angle) * 0.5;

        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / dist;
        const forceDirectionY = dy / dist;
        const maxDist = 150;
        const force = (maxDist - dist) / maxDist;

        if (dist < maxDist) {
          p.vx -= forceDirectionX * force * 10;
          p.vy -= forceDirectionY * force * 10;
        }

        p.vx *= 0.95;
        p.vy *= 0.95;

        p.x = clamp(p.x + p.vx, 0, canvas.width);
        p.y = clamp(p.y + p.vy, 0, canvas.height);

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      gsap.to(mouse.current, {
        duration: 0.5,
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#000' }}></canvas>;
};


export default FluidBackground