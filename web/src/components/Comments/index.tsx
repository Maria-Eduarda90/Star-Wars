import styles from './styles.module.scss';

import avatar from '../../images/svg/Avatar.svg';
import { useEffect, useState } from 'react';
import { api } from '../../api/api';

type commentProps = {
    comment: string;
}

export function Comments(){
    const [comments, setComments] = useState<commentProps[]>([]);

    useEffect(() => {
        api.get('/comments').then(response => {
            setComments(response.data);
        })
    }, [comments])

    return(
        <div className={styles.container}>
            {comments.map(comment => {
                return(
                    <div className={styles.content}>
                        <div className={styles.information}>
                            <div>
                                <img src={avatar} alt="avatar" />
                                <h1>Anônimo</h1>
                            </div>
                            <div>
                                <span>há 2 dias</span>
                            </div>
                        </div>
                        <p>
                            {comment.comment}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}