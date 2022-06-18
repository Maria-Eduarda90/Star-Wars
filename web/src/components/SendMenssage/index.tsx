import styles from './styles.module.scss';

import avatar from '../../images/svg/Avatar.svg';

export function SendMessage(){
    return(
        <div className={styles.sendMessageContainer}>
            <div className={styles.content}>
                <img src={avatar} alt="avatar" />
                <textarea name="message" id="message" placeholder='Comente algo sobre Star wars'/>
                <button>
                    Enviar
                </button>
            </div>
        </div>
    );
}