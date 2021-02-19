import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, ButtonToolbar, Modal } from "react-bootstrap";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
//import Example from "./readmore";

export const DetailsVehicles = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const element = store.people[params.theid];
	return <h1>Hola</h1>;
};
