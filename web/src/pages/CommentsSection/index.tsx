import { Header } from '../../components/Header';
import { Comments } from '../../components/Comments';
import { SendComments } from '../../components/SendComments';
import styles from './styles.module.scss';

export function CommentsSection() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Comments />
                <SendComments />
            </div>
        </>
    );
}