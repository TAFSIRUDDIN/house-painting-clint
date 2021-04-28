import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Inspection from '../Inspection/Inspection';
import Project from '../Project/Project';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div style={{backgroundColor: 'pink'}}>
            <Header/>
            <Projects></Projects>
            <Services></Services>
            <Inspection></Inspection>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;