import styled from '@emotion/styled';

// Es preferible usar estas dos opciones
export const Container = styled.div(() => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const ParamH1 = styled.h1(({ newFontSize }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: newFontSize,
}));

export const ButtonsSeparator = styled.div(() => ({
  marginTop: 50,
  gap: 20,
  flexDirection: 'column',
  display: 'flex',
}));

// Pero también se puede hacer algo así

export const ParamH12 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.newFontSize};
`;
