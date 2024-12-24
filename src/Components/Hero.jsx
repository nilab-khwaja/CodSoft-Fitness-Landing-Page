import React from "react";
import { useState } from "react";
import gal1 from "../assets/gal-1.jpg";
import gal2 from "../assets/gal-2.jpg";
import gal3 from "../assets/gal-3.jpg";
import gal4 from "../assets/gal-4.jpg";
import gal5 from "../assets/gal-5.jpg";
function Hero(){
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [gal1, gal2, gal3, gal4, gal5];
  
    // Open modal to show the clicked image
    const openModal = (image) => {
      setSelectedImage(image);
    };
  
    // Close modal
    const closeModal = () => {
      setSelectedImage(null);
    };
    return (
        <section className="hero" id="hero">
          <div className="container">
            <h1>Get Fit, Stay Healthy</h1>
            <p>Join our community and achieve your fitness goals.</p>
            <button>Learn More</button>
    
            {/* Image Gallery */}
            
          </div>

          <div className="image-gallery">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  onClick={() => openModal(image)}
                />
              ))}
            </div>
    
          {/* Modal (Popup) for selected image */}
          {selectedImage && (
            <div className="modal" onClick={closeModal}>
              <div className="modal-content">
                <img src={selectedImage} alt="Selected" />
              </div>
            </div>
          )}
        </section>
      );
}

export default Hero;