import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
	height: 100%;
	display: flex;
	align-items: flex-start;
	justify-content:initial;
	background: #f1f1f1;

`
export const FormContainer = styled.div`
border-radius: 4px;
box-shadow: 0px 2px 3px 1px rgba(100, 100, 100, 0.3);
width: 100%;
align-items: flex-start;
padding: 10px;
display: flex;


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
height:196px;
width:100%;

padding:5px;
display: inline;

`

export const DataContainer = styled.footer`
display: flex;
width: 100%;


`
export const VacationsContainer = styled.div`
display: flex;
width: 50%;


padding-left:20%;

`
export const ContainerSubscribe = styled.div`
padding-left:10%;
padding-top:2px;
margin-top:1px;
cursor: pointer;

`
