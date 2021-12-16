import styled from 'styled-components';

interface IButton {
  style: 'normal' | 'outline'
  color: string
  textColor: string
}

export const Button = styled.button<IButton>`
  align-items: center;
  border-radius: 9999px;
  display: flex;
  font-size: 1rem;
  height: 100%;
  justify-content: center;
  width: 100%;
  font-weight: 800;
  background: ${(props: IButton) => props.style === 'normal' ? props.color : 'transparent'};
  border: 2px solid ${(props: IButton) => props.style === 'normal' ? 'transparent' : props.color};
  color: ${(props: IButton) => props.textColor};
`;

export const Anchor = styled.a<IButton>`
  align-items: center;
  border-radius: 9999px;
  display: flex;
  font-size: 1rem;
  height: 100%;
  justify-content: center; 
  width: 100%;
  font-weight: 800;
  background: ${(props: IButton) => props.style === 'normal' ? props.color : 'transparent'};
  border: 2px solid ${(props: IButton) => props.style === 'normal' ? 'transparent' : props.color};
  color: ${(props: IButton) => props.textColor};
  transition: background .2s ease-in-out;

  :hover {
    background: ${(props: IButton) => props.color + '33'};
    transition: background .2s ease-in-out;
  }
`;
