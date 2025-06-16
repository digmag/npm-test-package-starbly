import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
    border: none;
    padding: 1rem;
    ${({ theme: { Colors, currentTheme } }) => {
        if (currentTheme === 'light') {
            return css`
                background-color: ${Colors.blue[1000]};
            `
        }
        return css`
            background-color: ${Colors.red[1000]};
        `
    }}
`