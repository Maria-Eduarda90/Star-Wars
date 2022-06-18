import styles from './styles.module.scss';

import avatar from '../../images/svg/Avatar.svg';

export function Message(){
    return(
        <div className={styles.container}>
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
                    A paz é uma mentira, só há paixão. Através da paixão, eu ganho força. Através da força, eu ganho poder. Através do poder, eu ganho vitória. Através da vitória, as minhas correntes são quebradas. A Força irá me libertar.
                </p>
            </div>

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
                    A paz é uma mentira, só há paixão. Através da paixão, eu ganho força. Através da força, eu ganho poder. Através do poder, eu ganho vitória. Através da vitória, as minhas correntes são quebradas. A Força irá me libertar.
                </p>
            </div>
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
                    A paz é uma mentira, só há paixão. Através da paixão, eu ganho força. Através da força, eu ganho poder. Através do poder, eu ganho vitória. Através da vitória, as minhas correntes são quebradas. A Força irá me libertar.
                </p>
            </div>
        </div>
    );
}