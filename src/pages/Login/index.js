import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { Container } from './styles';

const Login = () => {
	const [cpf, setCPF] = useState('111.222.333-44');
	const [email, setEmail] = useState('teste@hotmail.com');
	const [password, setPassword] = useState('teste123');

	useEffect(() => {
		/** useEffect usado para verificar se o usuário já esta autenticado.
		 * caso sim, o redireciona para outra página;
		 */

		const isUserAuthenticated = async () => {
			try {
				const authToken = localStorage.getItem('@AUTH');

				if (authToken) {
					const headers = { authorization: `Bearer ${authToken}` };
					const response = await Axios.get('http://localhost:3000/api/v1/auth', {
						headers,
					});

					const isAuthenticated = response.status === 200 ? true : false;

					if (isAuthenticated) {
						return (window.location = '/events');
					}
				}
			} catch (error) {
				console.error(error);
			}
		};

		isUserAuthenticated();
	}, []);

	const handleLogin = async (e) => {
		try {
			e.preventDefault();

			const payload = { email, cpf, password };
			const response = await Axios.post('http://localhost:3000/api/v1/auth', payload);

			const authToken = response.data.auth;

			return localStorage.setItem('@AUTH', authToken);
		} catch (error) {
			const { status } = error.response;

			switch (status) {
				case 404:
					return alert('Usuário nao encontrado');
				case 401:
					return alert('Senha incorreta');
				default:
					return alert('API deu o prego');
			}
		}
	};

	return (
		<Container>
			<form onSubmit={handleLogin}>
				<input
					defaultValue='teste@hotmail.com'
					placeholder='CPF'
					onChange={(e) => setCPF(e.target.value)}
				/>
				<input
					defaultValue='111.222.333-44'
					placeholder='email'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					defaultValue='teste123'
					placeholder='password'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type='submit'>Entrar</button>
			</form>
		</Container>
	);
};

export default Login;
