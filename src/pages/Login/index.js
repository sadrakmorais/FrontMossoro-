import React, { useEffect, useState, useContext } from 'react';
import Axios from 'axios';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { Container, FormContainer, RememberMe } from './styles';

import { AuthContext } from '../../store/Auth';

const Login = () => {
	const { signIn } = useContext(AuthContext);

	const [cpf, setCPF] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [remember, setRemember] = useState(false);

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
			const { data } = await Axios.post('http://localhost:3000/api/v1/auth', payload);

			const validationSchema = Yup.object().shape({
				email: Yup.string().required(),
				cpf: Yup.string().required(),
				password: Yup.string().required(),
			});

			await validationSchema.validate(payload);

			signIn(data.user, data.auth, remember);
		} catch (error) {
			if (error instanceof Yup.ValidationError) {
				return alert('Preencha todos os campos corretamente');
			}

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
			<FormContainer>
				<h1>Entrar</h1>
				<Form onSubmit={handleLogin}>
					<Input label='CPF' value={cpf} onChange={(e) => setCPF(e.target.value)} />
					<Input label='email' value={email} onChange={(e) => setEmail(e.target.value)} />
					<Input
						label='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<RememberMe>
						<input
							type='checkbox'
							checked={remember}
							onChange={() => setRemember(!remember)}
						/>
						<label>Lembrar-me</label>
					</RememberMe>

					<Button type='submit'>Entrar</Button>
				</Form>
			</FormContainer>
		</Container>
	);
};

export default Login;
