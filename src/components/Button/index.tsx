import React from 'react';
import style from './Botao.module.scss';

class Botão extends React.Component<{ texto: "adicionar" }> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Botão;