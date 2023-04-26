import Botao from '../Button';
import Relogio from './Relogio';

interface Props {
    texto: string;
}

const Cronometro = (props: Props) => {
    return (
        <div>
            <p>Escolha um card e inicie o cronometro</p>
            <div>
                <Relogio />
            </div>
            <Botao texto={String(props.texto)} />

        </div>
    )
}

export default Cronometro;