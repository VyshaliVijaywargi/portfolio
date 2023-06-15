// import React from 'react'
// import Header from './components/header/Header.jsx'
// import About from './components/about/About.jsx'
// import Skills from './components/Skills/Skills.jsx'
// import Projects from './components/Projects/Projects.jsx'
// import Contact from './components/contact/Contact.jsx'
// import Navbar from './components/Navbar/Navbar.jsx'



// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//     <Header /> 
//     <About />
//     <Skills />
//     <Projects />
//     <Contact />
//     </div>
//   )
// }

// export default Home
// import React, { useEffect, useState } from "react";
// import About from "../../components/about/About";
// import Contact from "../../components/contact/Contact";
// // import HeroSection from "../../components/heroSection/HeroSection";
// import Loader from "../../components/loader/Loader";
// import Navbar from "../../components/Navbar/Navbar";
// import Projects from "../../components/Projects/Projects";
// import Skills from "../../components/Skills/Skills";
// import Header from  "../../components/header/Header";


// const Home = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isDark,setIsDark] = useState(true)
//   const [currentTheme, setCurrentTheme] = useState('light');
//   useEffect(() => {
//     let timerId = setTimeout(() => {
//       setIsLoading(false);
//       return () => clearTimeout(timerId);
//     }, 2500);
//   }, []);
//   const themeToggler = () => {
//       currentTheme === 'light'
//           ? setCurrentTheme('dark')
//           : setCurrentTheme('light');
//   };

//   // console.log("loading state -->",isLoading)
//   if (isLoading) {
//     return <Loader />;
//   }

//   return (
//     <div className="home-main-cont">
//       <Navbar setIsDark={setIsDark} isDark={isDark} themeToggler={themeToggler} />
//       {/* <HeroSection /> */}
//       <Header/>
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//     </div>
//   );
// };

// export default Home;