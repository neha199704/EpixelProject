import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-heading">
        Snap photos and share like never before
      </h2>
      <div className="features-grid">
        <div className="feature-item">
          <h3>Sed ut perspiciatis</h3>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </p>
          <button className="learn-more-btn">Learn more</button>
        </div>
        <div className="feature-item">
          <h3>Lorem ipsum dolor</h3>
          <p>
            Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi.
          </p>
          <button className="learn-more-btn">Learn more</button>
        </div>
        <div className="feature-item">
          <h3>Nemo enim ipsam</h3>
          <p>
            Consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam.
          </p>
          <button className="learn-more-btn">Learn more</button>
        </div>
        <div className="feature-item">
          <h3>Tempor incididunt</h3>
          <p>
            Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora.
          </p>
          <button className="learn-more-btn">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
