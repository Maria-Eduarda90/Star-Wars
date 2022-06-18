import { Header } from '../../components/Header';
import { Message } from '../../components/Message';
import { SendMessage } from '../../components/SendMenssage';
import styles from './styles.module.scss';

export function CommentsSection() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Message />
                <SendMessage />
            </div>
        </>
    );
}