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
import ArticleAbout from './components/ArticleAbout';
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

  // Read from somewhere
  const aboutMeData = {
    paragraphs : [ 
      {
        text : `We have created a fictional 'personal' website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        showMobile : true
      },
      {
        text : `Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        showMobile : false
      }
    ],
    avatar : {
      photo : "https://www.w3schools.com/w3images/avatar_hat.jpg",
      caption : "My Name"
    }
  };

  const skillsData = [
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
    }];
  
  const highlightRendered = highlightItems.map( (el, i) =>{
    return (<HighlightItem 
      name={el.name} 
      ammount={el.ammount} manyMore={el.manyMore} key={i}></HighlightItem>
    );
  });

  const skillsRendered = skillsData.map( (el, i) => {
    return (
      <SkillBar name={el.name} 
        icon={el.icon} 
        percentage={el.percentage}
        key={i}></SkillBar>
    );
  });

  /** */

  return (
    <div className="App">
      <Navbar></Navbar>
      <ParallaxImage text="MY WEBSITE LOGO" image="bgimg-1" id="home" isprincipal="true"></ParallaxImage>
      <ArticleContainer 
        title="ABOUT ME" 
        summary="I love photography" 
        id="about">
          <div className="w3-row">
            <ArticleAbout {...aboutMeData}></ArticleAbout>
          </div>
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
