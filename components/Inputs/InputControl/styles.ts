import styled from 'styled-components';

import { theme } from 'styles/theme';

interface IError {
  error: boolean
}

interface ILabel {
  active: boolean
  error: boolean
}

export const InputWrapper = styled.div`
  color: ${theme.darker_white};
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label<ILabel>`
  color:  ${(props: IError) => 
    props.error 
      ? theme.red 
      : theme.darker_white};
  font-size: ${(props: ILabel) => props.active ? '0.8' : '1'}rem;
  left: 13px;
  position: absolute;
  pointer-events: none;
  top: ${(props: ILabel) => props.active ? '16px' : '24px'};
  transition: top .2s ease;
`;

export const Counter = styled.span`
  color: ${theme.darker_white};
  display: none;
  font-size: 0.8rem;
  position: absolute;
  right: 0.5em;
  top: 1em;
`;

export const Input = styled.input<IError>`
  background: ${theme.blue};
  border-radius: 4px;
  border: none;
  color: ${theme.white};
  font-size: 1rem;
  height: 32px;
  margin-top: .5em;
  padding-top: 1.5em;
  padding-left: .75em;
  outline: ${(props: IError) => 
    props.error 
      ? '2px solid ' + theme.red 
      : '1px solid ' + theme.darker_white};

  :focus {
    outline: ${(props: IError) => 
    props.error 
      ? '2px solid ' + theme.red 
      : '1px solid ' + theme.hack};
  }

  :focus + ${Label} {
    top: 1em;
    font-size: 0.8rem;
    transition: top .2s ease;
    color: ${(props: IError) => props.error ? theme.red : theme.hack};
  }

  :focus + ${Label} + ${Counter} {
      display: block;
    }
`;

export const Small = styled.small`
  margin-top: .75em;  
  color: #F5323E;
  position: absolute;
  top: 65px;
  padding: 0 12px;
`;

export const TextArea = styled.textarea`
  background: ${theme.blue};
  border-radius: 4px;
  border: none;
  color: ${theme.white};
  font-size: 1rem;
  height: 70px;
  margin-top: .5em;
  padding-top: 1.5em;
  padding-left: .75em;
  resize: none;
  outline: ${(props: IError) => 
    props.error 
      ? '2px solid ' + theme.red 
      : '1px solid ' + theme.darker_white};

  :focus {
    outline: ${(props: IError) => 
    props.error 
      ? '2px solid ' + theme.red 
      : '1px solid ' + theme.hack};
  }

  :focus + ${Label} {
    top: 1em;
    font-size: 0.8rem;
    transition: top .2s ease;
    color: ${(props: IError) => props.error ? theme.red : theme.hack};
  }

  :focus + ${Label} + ${Counter} {
      display: block;
    }
`;
