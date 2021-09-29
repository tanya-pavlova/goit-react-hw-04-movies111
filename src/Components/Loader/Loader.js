import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './loader.module.css';

const Spinner = () => {
  return (
    <div className={styles.Container}>
      <Loader
        type="ThreeDots"
        color="#ca2828"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

export default Spinner;
