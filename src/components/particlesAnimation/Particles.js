import { init } from 'emailjs-com'
import React, { useRef, useEffect } from 'react'
import { animateScroll } from 'react-scroll'

const Particles = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const mouse = {
            x: null,
            y: null,
            radius: 150
        }

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        canvas.height = window.innerHeight
        canvas.width = window.innerWidth

        class Particles {
            constructor(x, y, dx, dy, r, color) {
                this.x = x;
                this.y = y
                this.dx = dx
                this.dy = dy
                this.r = r
                this.color = color
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
                ctx.fillStyle = this.color
                ctx.fill()
            }

            update() {
                //collision detection between particles and mouse pointer
                const mouseDx = this.x - mouse.x
                const mouseDy = this.y - mouse.y

                const distanceBtwMouseAndParticle = getDistance(mouseDx, mouseDy)
                if (distanceBtwMouseAndParticle <= this.r + mouse.radius) {
                    if (mouseDx <= 0 && this.x > this.r * 10) {
                        this.x -= 10
                    }
                    if (mouseDx > 0 && this.x < canvas.width - this.r * 10) {
                        this.x += 10
                    }
                    if (mouseDy <= 0 && this.y > this.r * 10) {
                        this.y -= 10
                    }
                    if (mouseDy > 0 && this.y < canvas.height - this.r * 10) {
                        this.y += 10
                    }
                }

                //detect collion between canvas edges and particles
                if (this.x <= this.r || this.x + this.r >= canvas.width) {
                    this.dx = -this.dx
                }
                if (this.y <= this.r || this.y + this.r >= canvas.height) {
                    this.dy = -this.dy
                }
                this.x += this.dx
                this.y += this.dy
                this.draw();
            }
        }
        let particles = []

        const getRandomInRange = (max, min) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        const getDistance = (dx, dy) => {
            return Math.sqrt(dx * dx + dy * dy)
        }

        const init = () => {
            particles = []
            canvas.height = window.innerHeight
            canvas.width = window.innerWidth
            const particlesCount = (canvas.height * canvas.width) / 15000
            for (let i = 0; i < particlesCount; i++) {
                const r = getRandomInRange(4, 2)
                const x = getRandomInRange(canvas.width - r * 10, r * 10)
                const y = getRandomInRange(canvas.height - r * 10, r * 10)
                const dx = Math.random() * 5 - 2.5
                const dy = Math.random() * 5 - 2.5
                const color = 'rgba(255,255,255,0.4)'
                particles.push(new Particles(x, y, dx, dy, r, color))
            }

            particles.forEach(particle => particle.draw())

        }

        window.addEventListener('resize', () => {
            init();
        })

        window.addEventListener('mousemove', event => {
            mouse.x = event.x
            mouse.y = event.y
        })

        let isInside = true

        const isVisible = () => {
            const canvasElem = document.getElementById('canvasx')
            const canvasBounding = canvasElem.getBoundingClientRect()
            isInside = canvasBounding.bottom >= 0 ? true : false
        }

        window.addEventListener('scroll', event => {
            isVisible();
        })

        const connectLines = () => {
            let opacity = 0.25
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const xDist = particles[i].x - particles[j].x
                    const yDist = particles[i].y - particles[j].y
                    const distance = getDistance(xDist, yDist)
                    if (distance < (canvas.height / 120) * (canvas.width / 120)) {
                        opacity -= 0.0001
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = `rgba(255,255,255,${opacity})`
                        ctx.stroke()
                    }
                }
            }
        }

        const animate = () => {
            requestAnimationFrame(animate)
            if (isInside) {
                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
                particles.forEach(particle => particle.update())
                connectLines()
            }
        }

        init()
        animate()

    }, [])

    return <canvas ref={canvasRef} id='canvasx'></canvas>
}

export default Particles
