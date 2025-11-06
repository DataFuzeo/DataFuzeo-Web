// // "use client"

// // import { Button } from "@/components/ui/button"
// // import { ParticleGlobe } from "@/components/particle-globe"

// // export function Hero() {
// //   const scrollToSection = (sectionId: string) => {
// //     const element = document.getElementById(sectionId)
// //     if (element) {
// //       element.scrollIntoView({ behavior: "smooth" })
// //     }
// //   }

// //   return (
// //     <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
// //       {/* Background gradient */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

// //       {/* Particle Globe */}
// //       <div className="absolute inset-0 flex items-center justify-center">
// //         <ParticleGlobe />
// //       </div>

// //       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //         <div className="space-y-8">
// //           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
// //             <span className="gradient-text">AI, Data & Automation</span>
// //             <br />
// //             <span className="text-foreground">Solutions for Business Impact</span>
// //           </h1>

// //           <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
// //             Transform your business with cutting-edge artificial intelligence, data science, and automation solutions
// //             that drive measurable results.
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
// //             <Button
// //               size="lg"
// //               onClick={() => scrollToSection("contact")}
// //               className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground pulse-glow text-lg px-8 py-6"
// //             >
// //               Contact Sales
// //             </Button>
// //             <Button
// //               size="lg"
// //               variant="outline"
// //               onClick={() => scrollToSection("projects")}
// //               className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
// //             >
// //               See Projects
// //             </Button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
// "use client"

// import { useEffect, useRef } from "react"
// import { Button } from "@/components/ui/button"
// import { ParticleGlobe } from "@/components/particle-globe"
// import Typed from "typed.js"
// import * as THREE from "three"

// export function Hero() {
//   const typedEl = useRef<HTMLSpanElement>(null)
//   const cubeRef = useRef<HTMLDivElement>(null)

//   // Typed.js effect
//   useEffect(() => {
//     const typed = new Typed(typedEl.current, {
//       strings: ["AI", "Data", "Automation"],
//       typeSpeed: 80,
//       backSpeed: 50,
//       backDelay: 1500,
//       loop: true,
//     })
//     return () => typed.destroy()
//   }, [])

//   // Three.js cube
//   useEffect(() => {
//     if (!cubeRef.current) return

//     const scene = new THREE.Scene()
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       cubeRef.current.clientWidth / cubeRef.current.clientHeight,
//       0.1,
//       1000
//     )
//     const renderer = new THREE.WebGLRenderer({ alpha: true })
//     renderer.setClearColor(0x000000, 0) // transparent background
//     renderer.setSize(cubeRef.current.clientWidth, cubeRef.current.clientHeight)
//     cubeRef.current.appendChild(renderer.domElement)

//     const geometry = new THREE.BoxGeometry()
//     const material = new THREE.MeshStandardMaterial({
//       color: 0x00aaff,
//       wireframe: true,
//       transparent: true,
//       opacity: 0.4,
//     })
//     const cube = new THREE.Mesh(geometry, material)
//     scene.add(cube)

//     const light = new THREE.PointLight(0xffffff, 1)
//     light.position.set(5, 5, 5)
//     scene.add(light)

//     camera.position.z = 3

//     const animate = () => {
//       requestAnimationFrame(animate)
//       cube.rotation.x += 0.01
//       cube.rotation.y += 0.01
//       renderer.render(scene, camera)
//     }
//     animate()

//     const handleResize = () => {
//       if (!cubeRef.current) return
//       camera.aspect =
//         cubeRef.current.clientWidth / cubeRef.current.clientHeight
//       camera.updateProjectionMatrix()
//       renderer.setSize(
//         cubeRef.current.clientWidth,
//         cubeRef.current.clientHeight
//       )
//     }
//     window.addEventListener("resize", handleResize)

//     return () => {
//       window.removeEventListener("resize", handleResize)
//       if (cubeRef.current) {
//         cubeRef.current.removeChild(renderer.domElement)
//       }
//     }
//   }, [])

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//     >
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

//       {/* Rotating Cube Background (behind) */}
//       <div ref={cubeRef} className="absolute inset-0 pointer-events-none z-0" />

//       {/* Particle Globe (above cube) */}
//       <div className="absolute inset-0 flex items-center justify-center z-10 opacity-60">
//         <ParticleGlobe />
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="space-y-8">
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
//             <span className="gradient-text">
//               <span ref={typedEl}></span>
//             </span>
//             <br />
//             <span className="text-foreground">Solutions for Business Impact</span>
//           </h1>

//           <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
//             Transform your business with cutting-edge artificial intelligence, data
//             science, and automation solutions that drive measurable results.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Button
//               size="lg"
//               onClick={() => scrollToSection("contact")}
//               className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground pulse-glow text-lg px-8 py-6"
//             >
//               Contact Sales
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               onClick={() => scrollToSection("projects")}
//               className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
//             >
//               See Projects
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { Button } from "@/components/ui/button"
import { ParticleGlobe } from "@/components/particle-globe"
import { TypeAnimation } from "react-type-animation"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

      {/* Particle Globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ParticleGlobe />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
            <span className="gradient-text">
              <TypeAnimation
                sequence={[
                  "AI, Data & Automation", // text
                  2000, // wait 2s
                  "", // erase
                  500, // wait 0.5s
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: "inline-block" }}
              />
            </span>
            <br />
            <span className="text-foreground">
              Solutions for Business Impact
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Transform your business with cutting-edge artificial intelligence,
            data science, and automation solutions that drive measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground pulse-glow text-lg px-8 py-6"
            >
              Contact Sales
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6"
            >
              See Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
