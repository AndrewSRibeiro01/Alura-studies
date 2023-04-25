import React from 'react';
import style from './Botao.module.scss';

class Botão extends React.Component {
    render() {
        return (
            <button className={style.botao}>
                Botão
            </button>
        )
    }
}

export default Botão;