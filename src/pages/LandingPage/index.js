import React from 'react';



import {  BackgroundI, Mossoro, ContainerBotton, Span} from './styles';
import Button from '../../components/Button';


const LandingPage = () =>{



    return(

        <BackgroundI>
            <Mossoro><h1>MOSSORÓ+</h1>

            </Mossoro>
            <Span>Encontre e divulgue seu evento aqui.</Span>
            <ContainerBotton>
                <Button type="submit">Login</Button>
                <Button type="submit" >Cadastrar</Button>
            </ContainerBotton>


        </BackgroundI>

    )

}

export default LandingPage

