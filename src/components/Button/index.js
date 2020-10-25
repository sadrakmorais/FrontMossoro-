import React, { useEffect } from 'react';

const Button = ({ color, label, ...rest }) => {
	useEffect(() => {
		return () => console.log('BOTÃO MERREU'); // Retorna uma função que é executada no momento da morte
	}, []);

	return (
		<button style={{ background: color }} {...rest}>
			{label}
		</button>
	);
};

export default Button;
