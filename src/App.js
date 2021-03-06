//import React from 'react';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ParallaxImage from './components/ParallaxImage';
import HighlightItem from './components/HighlightItem';
import HighlightContainer from './components/HighlightContainer';
import ArticleContainer from './components/ArticleContainer';
import SkillBar from './components/SkillBar';

function App() {
  // PREPARE Highligh items DB maybe
  const highlightItems = [
    {
      name: "Partners",
      ammount : 14,
      manyMore : true
    },
    {
      name: "Projects Done",
      ammount : 55,
      manyMore : true
    },
    {
      name: "Happy Clients",
      ammount : 89,
      manyMore : true
    },
    {
      name: "Meetings",
      ammount : 150,
      manyMore : true
    }
  ];
  
  const highlightRendered = highlightItems.map( (el, i) =>{
    return (<HighlightItem 
      name={el.name} 
      ammount={el.ammount} manyMore={el.manyMore} key={i}></HighlightItem>
    );
  });

  const skillsRendered = [
    {
        name : "Photography",
        icon : "fa-camera",
        percentage : 90
    },
    {
        name : "Web Design",
        icon : "fa-laptop",
        percentage : 85
    },
    {
      name : "GIMP",
      icon : "fa-photo",
      percentage : 75
    }].map( (el, i) => {
    return (
      <SkillBar name={el.name} 
        icon={el.icon} 
        percentage={el.percentage}
        key={i}></SkillBar>
    );
  });
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <ParallaxImage text="MY WEBSITE LOGO" image="bgimg-1" id="home" isprincipal="true"></ParallaxImage>
      <ArticleContainer 
        title="ABOUT ME" 
        summary="I love photography" 
        id="about">
            <p className="w3-large w3-center w3-padding-16">Im really good at:</p>
            {skillsRendered}
        </ArticleContainer>
      <HighlightContainer>{highlightRendered}</HighlightContainer>
      <ParallaxImage text="PORTFOLIO" image="bgimg-2" id="portfolio"></ParallaxImage>
      <ArticleContainer 
        title="MY WORK" 
        summary="Here are some of my latest lorem work ipsum tipsum. Click on the images to make them bigger" 
        id="about"></ArticleContainer>
      <ParallaxImage text="CONTACT" image="bgimg-3"></ParallaxImage>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
