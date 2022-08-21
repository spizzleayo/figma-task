import {Label} from './Label.style'


export default function LabelComponent ({
    label
}) {
    return <Label for={label}>{label}</Label>
}