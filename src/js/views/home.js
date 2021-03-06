import React from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselItem, CarouselItemProps, CarouselProps } from "react-bootstrap";
import "../../styles/home.scss";

export const Home = () => (
	<Carousel className="Carousel">
		<Carousel.Item interval={3000}>
			<Link to="/character">
				<img
					className="d-block w-100"
					src="https://i.pinimg.com/originals/f3/23/55/f32355d4790b1083ba03bfa535c497a7.jpg"
					alt="Characters"
				/>
				<Carousel.Caption className="shadow">
					<h3>Personajes</h3>
					<p>Descripcion de personajes</p>
				</Carousel.Caption>
			</Link>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
			<Link to="/planets">
				<img className="d-block w-100" src="https://i.imgur.com/fiKu58y.jpg" alt="Planets" />
				<Carousel.Caption className="shadow">
					<h3>Planetas</h3>
					<p>Descripcion de planetas</p>
				</Carousel.Caption>
			</Link>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
			<Link to="/vehicle">
				<img className="d-block w-100" src="http://i.imgur.com/rE70lnQ.jpg" alt="Vehicles" />
				<Carousel.Caption className="shadow">
					<h3>Vehicles</h3>
					<p>Descripcion de Vehiculos</p>
				</Carousel.Caption>
			</Link>
		</Carousel.Item>
	</Carousel>
);
