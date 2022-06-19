import styles from './styles.module.scss';

import avatar from '../../images/svg/Avatar.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../api/api';

export function SendComments(){
    const [ comments, setComments ] = useState('');

    const handleSendComments = async (event: FormEvent) => {
        event.preventDefault();

        if(!comments.trim()){
            return
        }

        const data = {
            comment: comments,
        }

        await api.post('/comments', data);
        setComments('');
    }

    return(
        <div className={styles.sendMessageContainer}>
            <form className={styles.content} onSubmit={handleSendComments}>
                <img src={avatar} alt="avatar" />
                    <textarea
                     name="message" 
                     id="message" 
                     placeholder='Comente algo sobre Star wars'
                     value={comments}
                     onChange={e => setComments(e.target.value)}
                    />
                    <button>
                        Enviar
                    </button>
            </form>
        </div>
    );
}