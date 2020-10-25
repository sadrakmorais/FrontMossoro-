import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Button from '../../components/Button';

const Events = () => {
	const [mostraBotao, setMostrarBotao] = useState(true);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const buscarEventos = async () => {
			try {
				const events = await Axios.get('http://localhost:3000/api/v1/events');

				setLoading(false);

				console.log(events);
			} catch (error) {
				console.error(error);
			}
		};

		buscarEventos();
	}, []);

	if (loading) {
		return <h1>Carregando...</h1>;
	}

	return (
		<div>
			<h1>Eventos</h1>

			{mostraBotao === true ? (
				<Button label='ENTRAR' color='#FF00FF' onClick={() => setMostrarBotao(false)} />
			) : null}
		</div>
	);
};

export default Events;
