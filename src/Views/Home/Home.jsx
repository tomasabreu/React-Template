import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { ButtonsSeparator, Container, ParamH1, ParamH12 } from './styles';
import Routes from '../../Utils/routes';
import ExampleComponent from '../../Components/ExampleComponent/ExampleComponent';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  // Tenemos lo mismo en dos lados y nos mostrar que es lo mismo cambiando la variablea true or false
  const usingReusableComponents = false;

  useEffect(() => {
    console.log(navigator.language);
  }, []);

  return (
    <Container>
      {usingReusableComponents ? (
        <ExampleComponent font1='10rem' font2='2rem' />
      ) : (
        <>
          <ParamH1 newFontSize='5rem'>Texto1</ParamH1>
          <ParamH12 newFontSize='2rem'>Texto2</ParamH12>
          <div>Div normal sin style</div>
          <div
            style={{
              background: 'yellow',
              borderWidth: 1,
              borderColor: 'red',
              borderStyle: 'solid',
            }}
          >
            Div con style in line
          </div>
        </>
      )}
      {/* https://mui.com/material-ui/react-text-field/ */}
      <div style={{ width: 300 }}>
        <TextField
          id='standard-basic'
          label='Un hermoso placeholder'
          variant='standard'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginTop: 30 }}
          fullWidth
        />
      </div>
      <ButtonsSeparator>
        {/* https://mui.com/material-ui/react-button/ */}
        <Button
          fullWidth
          variant='contained'
          onClick={() => console.log(inputValue)}
        >
          Imprimir en Consola
        </Button>
        <Button
          variant='contained'
          fullWidth
          onClick={() =>
            navigate(`${Routes.PRINTER}/${inputValue}`, {
              state: { textFromParams: inputValue },
            })
          }
          disabled={!inputValue}
        >
          Navegar a otra pagina con Texto
        </Button>
        <Button
          fullWidth
          variant='contained'
          onClick={() => navigate('bla bla')}
        >
          NOT FOUND
        </Button>
      </ButtonsSeparator>
    </Container>
  );
};

export default Home;
