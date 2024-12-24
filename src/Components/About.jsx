import React from "react";
import { useState,useEffect } from "react";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.avif";
import i6 from "../assets/i6.jpg";
import i7 from "../assets/i7.jpg";
import i8 from "../assets/i8.jpg";
import i9 from "../assets/hero.webp";
import i10 from "../assets/hero2.jpg";
function About(){
    const images = [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10]
    
    const [currentImageIndex,setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
      }, [images.length]);

    return(
        <section className="about" id="about">
        <div className="about-container">
          <div className="about-text">
            <h2>About Us</h2>
            <p> At our core, we believe in the transformative power of fitness and community. 
            Whether you're just starting your fitness journey or you're a seasoned athlete, 
            we’re here to guide and inspire you every step of the way. With state-of-the-art facilities, 
            experienced trainers, and a vibrant community of like-minded individuals, we create an environment 
            where everyone can thrive. Your goals are our goals, and we’re passionate about helping you unlock your potential, 
            one workout at a time. Let’s redefine what’s possible—together.</p>
          </div>
          <div className="image-slider">
            <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
          </div>
        </div>
      </section>
    )
}

export default About;