import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";


const cardInfo = [
	{
		image: "https://picsum.photos/id/237/350/200",
		title: "Little Black Puppy",
		text: "Happiness is a warm puppy. -Charles M. Schulz"

	},
	{
		image: "https://picsum.photos/id/217/350/200",
		title: "Old lake pier",
		text: "So lovely was the loneliness of a wild lake. -Edgar Allan Poe"
	},
	{
		image: "https://picsum.photos/id/233/350/200",
		title: "Train travel",
		text: "The journey of a thousand miles begins with a single step. -Lao Tzu"
	},
	{
		image: "https://picsum.photos/id/222/350/200",
		title: "Cloudy day",
		text: "No one is free, even the birds are chained to the sky. -Bob Dylan"
	}
];


const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
 <div className="container my-5">
        <div className="row">
          {cardInfo.map((card, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <Card
                image={card.image}
                title={card.title}
                text={card.text}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;


