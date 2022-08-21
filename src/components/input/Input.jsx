import {InputContainer, Input} from './Input.style'


export const InputComponent = ({
    placeholder = "",
    type = "text",
    width
}) => {
    return <InputContainer>
    <Input placeholder={placeholder} type={type} width={width} />
    
    </InputContainer>

}