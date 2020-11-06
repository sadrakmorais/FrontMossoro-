import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: initial;
	background: #f1f1f1;
`;
export const FormContainer = styled.div`
	border-radius: 4px;
	box-shadow: 0px 2px 3px 1px rgba(100, 100, 100, 0.3);
	width: 100%;
	align-items: flex-start;
	padding: 10px;
	display: flex;
	margin: 3px;
	background: white;

	& > h1 {
		font-size: 28px;
		color: rgba(20, 20, 20, 0.8);
		margin-bottom: 12px;
	}

	& form {
		width: 100%;
	}
`;

export const InfoContainer = styled.div`
	height: 20%;
	width: 100%;
	padding: 5px;
	display: inline;
	background: white;
`;

export const DataContainer = styled.footer`
	display: flex;
	margin-top: 5px;
	width: 100%;
	justify-content: space-around;
`;
export const VacationsContainer = styled.div`
	display: flex;
	width: 50%;
	padding-top: 1%;

	padding-left: 20%;
`;
export const ContainerSubscribe = styled.div`
	padding-left: 10%;
	padding-top: 2px;
	margin-top: 1px;
	display: flex;
`;
export const ContainerDescription = styled.div`
	width: 100%;
	height: 100px;
	border-radius: 1px;
	word-wrap: break-word;
	background: white;
    &:hover {
		box-shadow: 0px 1px 1px 1px rgba(100, 100, 100, 0.2);;
	}
`;
export const ContainerLocation = styled.div`
margin-top:2%;
	padding: 2px;
	width: 100%;
	height: 30px;
	display: flex;
	word-wrap: break-word;
`;
