import React from "react";
import "./PhotoSection.css";

const PhotoSection = () => {
  const cardData = [
    {
      title: "Sed ut perspiciatis",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg",
    },
    {
      title: "Lorem ipsum dolor",
      description:
        "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      imageUrl:
        "https://thumbs.dreamstime.com/b/hands-computer-desk-using-laptop-rustic-wood-background-cup-tea-book-globe-glasses-53253551.jpg",
    },
    {
      title: "Nemo enim ipsam",
      description:
        "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/05/03/13/22/empire-state-building-5125016_640.jpg",
    },
  ];

  return (
    <div className="photo-section">
      <h2 className="photo-section-title">Make your photos more stylish</h2>
      <p className="photo-section-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <div className="photo-cards">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imageUrl} alt={card.title} className="card-image" />
            <div className="card-text">
              <h4 className="card-title">{card.title}</h4>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoSection;
