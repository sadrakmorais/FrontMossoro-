import React, { useEffect, useState } from 'react';
import MyEvents from '../../components/MyEvents';
import { Container, Header, CardContainer } from './styles';
import { GET } from '../../services/api';

const Events = () => {
	const [loading, setLoading] = useState(true);
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const { data } = await GET('/subscriptions');

				setEvents(data.events);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};

		fetchEvents();
	}, []);

	if (loading) {
		return (
			<Container>
				<h1>Carregando...</h1>
			</Container>
		);
	}

	return (
		<Container>
			<Header>Minhas inscrições</Header>
			<CardContainer>

				<ul>
					{events.map((event) => {
						return <MyEvents event={event} key={event._id}/>;
					})}

				</ul>
			</CardContainer>
		</Container>
	);
};

export default Events;
