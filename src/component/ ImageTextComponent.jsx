import React from "react";
import "./ImageTextComponent.css";

const ImageTextComponent = () => {
  return (
    <section className="container">
      <div className="text-section">
        <h4>Have you ever posted any photo on social media?</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className="content">
        <div className="info-grid">
          <div className="info-item">
            <h4>Sed ut perspiciatis</h4>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur.
            </p>
          </div>
          <div className="info-item">
            <h4>Lorem ipsum dolor</h4>
            <p>
              Amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="info-item">
            <h4>Nemo enim ipsam</h4>
            <p>
              Consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est.
            </p>
          </div>
        </div>
        <div className="image-section">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/02/10/04/chicago-1791002_640.jpg"
            alt="Buildings"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageTextComponent;
