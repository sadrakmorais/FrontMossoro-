import React from 'react';
import {Link} from 'react-router-dom'



import {  BackgroundI, Mossoro, ContainerBotton, Span} from './styles';
import Button from '../../components/Button';


const LandingPage = () =>{



    return(

        <BackgroundI>
            <Mossoro><h1>MOSSORÓ+</h1>

            </Mossoro>
            <Span>Encontre e divulgue seu evento aqui.</Span>
            <ContainerBotton>
            <Link to='/login'><Button>Login</Button></Link>
                <Link to='/register'><Button>Cadastrar</Button></Link>
            </ContainerBotton>


        </BackgroundI>

    )

}

export default LandingPage

