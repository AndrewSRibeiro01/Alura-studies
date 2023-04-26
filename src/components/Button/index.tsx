import React, { ButtonHTMLAttributes } from 'react';
import style from './Botao.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    texto: string;
}

const Botao: React.FC<ButtonProps> = ({ texto, ...rest }) => {
    return (
        <button {...rest}> {texto} </button>
    )
}

export default Botao;