import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/31672482?s=460&u=df0255a187e94bccddca5cbd618579d8a925dab3&v=4" alt="Rafaela Tasso"/>
                <div>
                    <strong>Rafaela Tasso</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>Minha descrição como proffy!</p>

            <footer>
                <p>Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>

            </footer>
        </article>
    );
}

export default TeacherItem;