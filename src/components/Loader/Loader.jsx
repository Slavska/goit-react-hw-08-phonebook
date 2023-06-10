import css from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={css.Spinner}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="orangered"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
