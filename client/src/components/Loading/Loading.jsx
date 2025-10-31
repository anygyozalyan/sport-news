import styles from './Loading.module.css';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/Goal.json';

function Loading() {
    return (
        <div className={styles.loadingWrapper}>
            <Lottie animationData={loadingAnimation} loop={true} className={styles.loadingLottie} />
        </div>
    );
}

export default Loading;