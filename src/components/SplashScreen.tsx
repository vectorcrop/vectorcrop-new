// import anime from "animejs"
// import { useEffect, useState } from 'react'
// import { HTMLAttributes } from 'react';



// const SplashScreen = ({ finishLoading } ) => {
//   const [isMounted, setIsMounted] = useState(false)
//   const animate = () => {
//     const loader = anime.timeline({
//       complete: () => finishLoading(),
//     })

//     loader
//       .add({
//         targets: "#logo",
//         delay: 0,
//         scale: 1,
//         duration: 500,
//         easing: "easeInOutExpo",
//       })
//       .add({
//         targets: "#logo",
//         delay: 100,
//         scale: 1.25,
//         duration: 500,
//         easing: "easeInOutExpo",
//       })
//       .add({
//         targets: "#logo",
//         delay: 100,
//         scale: 1,
//         duration: 500,
//         easing: "easeInOutExpo",
//       })
//       .add({
//         targets: "#logo",
//         delay: 100,
//         scale: 1.25,
//         duration: 500,
//         easing: "easeInOutExpo",
//       })
//       .add({
//         targets: "#logo",
//         delay: 100,
//         scale: 1,
//         duration: 500,
//         easing: "easeInOutExpo",
//       })
//   }

//   useEffect(() => {
//     const timeout = setTimeout(() => setIsMounted(true), 10)
//     animate()
//     return () => clearTimeout(timeout)
//   }, [])

//   interface CustomDivProps extends HTMLAttributes<HTMLDivElement> {
//     isMounted: boolean;
//   }
  
//   const CustomDiv: React.FC<CustomDivProps> = ({ children, className, isMounted, ...rest }) => {

//   return (
//     <div className={`flex h-screen items-center justify-center ${className}`} {...rest}>
//       {isMounted && <img id="logo" src="./logoblack.png" alt="" width={60} height={60} />}
//       {children}
//     </div>
//   )
// }
// }

// export default SplashScreen
