// "use client"

// import { useEffect, useRef, useCallback, useMemo } from "react"

// export function ParticleGlobe() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const animationFrameRef = useRef<number>()
//   const lastFrameTimeRef = useRef<number>(0)

//   const config = useMemo(
//     () => ({
//       particleCount: 300, // Reduced from 800 to 300 for better performance
//       radius: 0,
//       connectionDistance: 60, // Reduced connection distance
//       frameRate: 30, // Target 30fps instead of 60fps
//       frameInterval: 1000 / 30,
//     }),
//     [],
//   )

//   const animate = useCallback(
//     (currentTime: number) => {
//       if (currentTime - lastFrameTimeRef.current < config.frameInterval) {
//         animationFrameRef.current = requestAnimationFrame(animate)
//         return
//       }

//       lastFrameTimeRef.current = currentTime

//       const canvas = canvasRef.current
//       if (!canvas) return

//       const ctx = canvas.getContext("2d")
//       if (!ctx) return

//       const rect = canvas.getBoundingClientRect()
//       ctx.clearRect(0, 0, rect.width, rect.height)

//       const time = 0.008 // Slower rotation
//       const rotationY = time * 0.3 + 0 // mouseX is not yet defined
//       const rotationX = 0 // mouseY is not yet defined

//       const cosY = Math.cos(rotationY)
//       const sinY = Math.sin(rotationY)
//       const cosX = Math.cos(rotationX)
//       const sinX = Math.sin(rotationX)

//       const particles: Array<{
//         x: number
//         y: number
//         z: number
//         originalX: number
//         originalY: number
//         originalZ: number
//         size: number
//         opacity: number
//         visible: boolean
//       }> = []

//       const initializeParticles = () => {
//         particles.length = 0
//         for (let i = 0; i < config.particleCount; i++) {
//           const phi = Math.acos(-1 + (2 * i) / config.particleCount)
//           const theta = Math.sqrt(config.particleCount * Math.PI) * phi

//           const x = config.radius * Math.cos(theta) * Math.sin(phi)
//           const y = config.radius * Math.sin(theta) * Math.sin(phi)
//           const z = config.radius * Math.cos(phi)

//           particles.push({
//             x,
//             y,
//             z,
//             originalX: x,
//             originalY: y,
//             originalZ: z,
//             size: Math.random() * 1.5 + 0.5, // Smaller particles
//             opacity: Math.random() * 0.6 + 0.4,
//             visible: true,
//           })
//         }
//       }

//       initializeParticles()

//       let mouseX = 0
//       let mouseY = 0

//       let mouseUpdateTimeout: NodeJS.Timeout
//       const handleMouseMove = (e: MouseEvent) => {
//         clearTimeout(mouseUpdateTimeout)
//         mouseUpdateTimeout = setTimeout(() => {
//           mouseX = (e.clientX - window.innerWidth / 2) * 0.0005 // Reduced sensitivity
//           mouseY = (e.clientY - window.innerHeight / 2) * 0.0005

//           // Update rotation based on mouse position
//           const rotationY = time * 0.3 + mouseX
//           const rotationX = mouseY * 0.3

//           const cosY = Math.cos(rotationY)
//           const sinY = Math.sin(rotationY)
//           const cosX = Math.cos(rotationX)
//           const sinX = Math.sin(rotationX)

//           // Clear canvas and redraw particles
//           ctx.clearRect(0, 0, rect.width, rect.height)

//           const visibleParticles: Array<{
//             x2D: number
//             y2D: number
//             z: number
//             size: number
//             opacity: number
//             index: number
//           }> = []

//           particles.forEach((particle, index) => {
//             // Rotate particle
//             const x1 = particle.originalX * cosY - particle.originalZ * sinY
//             const z1 = particle.originalX * sinY + particle.originalZ * cosY

//             const y1 = particle.originalY * cosX - z1 * sinX
//             const z2 = particle.originalY * sinX + z1 * cosX

//             // Cull particles behind the camera
//             if (z2 < -config.radius) return

//             // Project to 2D
//             const scale = 200 / (200 + z2)
//             const x2D = x1 * scale + rect.width / 2
//             const y2D = y1 * scale + rect.height / 2

//             // Cull particles outside viewport
//             if (x2D < -50 || x2D > rect.width + 50 || y2D < -50 || y2D > rect.height + 50) return

//             const opacity = particle.opacity * Math.max(0.1, (z2 + config.radius) / (2 * config.radius))

//             visibleParticles.push({
//               x2D,
//               y2D,
//               z: z2,
//               size: particle.size * scale,
//               opacity,
//               index,
//             })

//             // Draw particle with simplified rendering
//             ctx.beginPath()
//             ctx.arc(x2D, y2D, particle.size * scale, 0, Math.PI * 2)
//             ctx.fillStyle = `rgba(112, 165, 250, ${opacity})`
//             ctx.fill()
//           })

//           for (let i = 0; i < visibleParticles.length; i++) {
//             const particle1 = visibleParticles[i]

//             // Only check nearby particles for connections
//             for (let j = i + 1; j < Math.min(i + 10, visibleParticles.length); j++) {
//               const particle2 = visibleParticles[j]

//               const distance = Math.sqrt(
//                 Math.pow(particle1.x2D - particle2.x2D, 2) + Math.pow(particle1.y2D - particle2.y2D, 2),
//               )

//               if (distance < config.connectionDistance) {
//                 ctx.beginPath()
//                 ctx.moveTo(particle1.x2D, particle1.y2D)
//                 ctx.lineTo(particle2.x2D, particle2.y2D)
//                 ctx.strokeStyle = `rgba(112, 165, 250, ${(1 - distance / config.connectionDistance) * 0.15 * Math.min(particle1.opacity, particle2.opacity)})`
//                 ctx.lineWidth = 0.5
//                 ctx.stroke()
//               }
//             }
//           }
//         }, 16) // Throttle to ~60fps
//       }

//       window.addEventListener("mousemove", handleMouseMove, { passive: true })

//       animationFrameRef.current = requestAnimationFrame(animate)

//       return () => {
//         window.removeEventListener("mousemove", handleMouseMove)
//         clearTimeout(mouseUpdateTimeout)
//         if (animationFrameRef.current) {
//           cancelAnimationFrame(animationFrameRef.current)
//         }
//       }
//     },
//     [config],
//   )

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     // Set canvas size
//     const resizeCanvas = () => {
//       const dpr = window.devicePixelRatio || 1
//       const rect = canvas.getBoundingClientRect()

//       canvas.width = rect.width * dpr
//       canvas.height = rect.height * dpr
//       canvas.style.width = rect.width + "px"
//       canvas.style.height = rect.height + "px"

//       ctx.scale(dpr, dpr)

//       // Update radius based on canvas size
//       config.radius = Math.min(rect.width, rect.height) * 0.15
//     }

//     resizeCanvas()
//     window.addEventListener("resize", resizeCanvas)

//     return () => {
//       window.removeEventListener("resize", resizeCanvas)
//     }
//   }, [config])

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 pointer-events-none opacity-50"
//       style={{
//         mixBlendMode: "screen",
//         width: "100%",
//         height: "100%",
//       }}
//     />
//   )
// }
"use client"

import { useEffect, useRef, useMemo } from "react"

export function ParticleGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  const config = useMemo(
    () => ({
      particleCount: 300,
      radius: 0,
      connectionDistance: 60,
    }),
    []
  )

  // Store particles globally so they persist
  const particlesRef = useRef<
    Array<{ x: number; y: number; z: number; size: number; opacity: number }>
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0) // reset before scaling
      ctx.scale(dpr, dpr)

      config.radius = Math.min(canvas.clientWidth, canvas.clientHeight) * 0.15

      // Initialize particles ONCE per resize
      particlesRef.current = []
      for (let i = 0; i < config.particleCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / config.particleCount)
        const theta = Math.sqrt(config.particleCount * Math.PI) * phi

        const x = config.radius * Math.cos(theta) * Math.sin(phi)
        const y = config.radius * Math.sin(theta) * Math.sin(phi)
        const z = config.radius * Math.cos(phi)

        particlesRef.current.push({
          x,
          y,
          z,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.6 + 0.4,
        })
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let rotationY = 0
    let rotationX = 0

    const animate = () => {
      if (!ctx) return
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const rect = canvas.getBoundingClientRect()

      rotationY += 0.002 // auto-rotation
      const cosY = Math.cos(rotationY)
      const sinY = Math.sin(rotationY)
      const cosX = Math.cos(rotationX)
      const sinX = Math.sin(rotationX)

      const visibleParticles: Array<{
        x2D: number
        y2D: number
        z: number
        size: number
        opacity: number
      }> = []

      particlesRef.current.forEach((p) => {
        // Rotate
        const x1 = p.x * cosY - p.z * sinY
        const z1 = p.x * sinY + p.z * cosY
        const y1 = p.y * cosX - z1 * sinX
        const z2 = p.y * sinX + z1 * cosX

        const scale = 200 / (200 + z2)
        const x2D = x1 * scale + rect.width / 2
        const y2D = y1 * scale + rect.height / 2

        visibleParticles.push({
          x2D,
          y2D,
          z: z2,
          size: p.size * scale,
          opacity: p.opacity,
        })

        // Draw particle
        ctx.beginPath()
        ctx.arc(x2D, y2D, p.size * scale, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(112, 165, 250, ${p.opacity})`
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < visibleParticles.length; i++) {
        for (let j = i + 1; j < visibleParticles.length; j++) {
          const a = visibleParticles[i]
          const b = visibleParticles[j]
          const dist = Math.hypot(a.x2D - b.x2D, a.y2D - b.y2D)
          if (dist < config.connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(a.x2D, a.y2D)
            ctx.lineTo(b.x2D, b.y2D)
            ctx.strokeStyle = `rgba(112,165,250,${
              (1 - dist / config.connectionDistance) * 0.15
            })`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current)
    }
  }, [config])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        mixBlendMode: "screen",
        width: "100%",
        height: "100%",
      }}
    />
  )
}
