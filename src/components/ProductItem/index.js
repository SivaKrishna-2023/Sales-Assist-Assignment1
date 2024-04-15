import { CiBookmarkPlus } from "react-icons/ci";
import styles from "./index.module.css";

const ProductItem = ({ productDetails }) => {
  const { price, title, thumbnail, discountPercentage } = productDetails;
  return (
    <li className={styles.productCard}>
      <div className={styles.productCardImageBox}>
        <button className={styles.productBookMark}>
          <CiBookmarkPlus size={30} />
        </button>
        <img className={styles.productCardImage} src={thumbnail} alt="" />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.productDetails}>
        <h4 className={styles.productDetailsPrice}>
          Rs {price}
          <span>
            {Math.floor(price + (price * discountPercentage) / 100)} off
          </span>
          <span>({discountPercentage}%)</span>
        </h4>
        <button className={styles.productBtn}>
          <img src="Group 451.png" alt="" width={24} />
        </button>
      </div>
    </li>
  );
};

export default ProductItem;