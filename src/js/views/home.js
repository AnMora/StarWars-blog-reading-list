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
					src="http://4.bp.blogspot.com/_sO_FX2iu0XU/TUny5g3TdaI/AAAAAAAAJsY/WQgoFQaP1Cw/s1600/Star+Wars+Wallpaper.jpg"
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
				<img
					className="d-block w-100"
					src="https://www.enjpg.com/img/2020/star-wars-15-scaled.jpg"
					alt="Planets"
				/>
				<Carousel.Caption className="shadow">
					<h3>Planetas</h3>
					<p>Descripcion de planetas</p>
				</Carousel.Caption>
			</Link>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
			<Link to="/vehicle">
				<img className="d-block w-100" src="https://i.imgur.com/EUvvLfZ.jpg?fb" alt="Vehicles" />
				<Carousel.Caption className="shadow">
					<h3>Vehicles</h3>
					<p>Descripcion de Vehiculos</p>
				</Carousel.Caption>
			</Link>
		</Carousel.Item>
	</Carousel>
);
