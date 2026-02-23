import React, { useEffect, useRef } from 'react';

const VectorFieldBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const GRID_SIZE = 40;
        const MAX_DIST = 300;

        const render = () => {
            ctx.fillStyle = '#020617';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const { x: xc, y: yc } = mouseRef.current;
            const cols = Math.ceil(canvas.width / GRID_SIZE) + 1;
            const rows = Math.ceil(canvas.height / GRID_SIZE) + 1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * GRID_SIZE;
                    const y = j * GRID_SIZE;

                    const dx = xc - x;
                    const dy = yc - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    const theta = Math.atan2(dy, dx);
                    const effect = Math.max(0, 1 - dist / MAX_DIST);

                    const opacity = 0.2 + 0.8 * effect;
                    const size = 1 + 2 * effect;

                    // Desplazar estrella ligeramente hacia el cursor
                    const dMove = effect * 15;
                    const starX = x + Math.cos(theta) * dMove;
                    const starY = y + Math.sin(theta) * dMove;

                    ctx.beginPath();
                    ctx.arc(starX, starY, size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(6, 182, 212, ${opacity})`;
                    ctx.fill();

                    // Resplandor para estrellas más cercanas al cursor
                    if (effect > 0.2) {
                        ctx.beginPath();
                        ctx.arc(starX, starY, size * 2.5, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(6, 182, 212, ${opacity * 0.3})`;
                        ctx.fill();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
                display: 'block'
            }}
        />
    );
};

export default VectorFieldBackground;
