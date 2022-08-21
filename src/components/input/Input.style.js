import styled from 'styled-components';


export const InputContainer = styled.div`

`

export const Input = styled.input`
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #4E598C;
border-radius: 10px;
margin-top: 10px;
margin-bottom: 25px;
width: ${props => props.width ? props.width : '100%'};
height: 45px;
padding: 10px;
`