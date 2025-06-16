import { ComponentProps } from "react"
import { ButtonStyled } from "./styled"

type ButtonProps = ComponentProps<'button'> & {

}

export const Button = ({ ...props }: ButtonProps) => {
    return <ButtonStyled {...props} />
}