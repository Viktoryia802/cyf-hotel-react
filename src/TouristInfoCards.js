import React from "react";

const Card = props => {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" />
      <div className="card-body">
        <a href={props.url} className="btn btn-primary">
          Go to {props.city}
        </a>
      </div>
    </div>
  );
};

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <Card
        img="https://live.staticflickr.com/4831/32321524798_f1d2188ae7_b.jpg"
        url="https://www.peoplemakeglasgow.com"
        city="Glasgow"
        alt="glasqowbuildings"
      />

      <Card
        img="https://live.staticflickr.com/6059/6272043372_5cd92b0ea9_b.jpg"
        url="https://www.visitmanchester.com"
        city="Manchester"
        alt="manchestercityside"
      />

      <Card
        img="https://upload.wikimedia.org/wikipedia/commons/8/82/London_Big_Ben_Phone_box.jpg"
        url="https://www.visitlondon.com"
        city="London"
        alt="bigbenlondon"
      />
    </div>
  );
};

export default TouristInfoCards;
