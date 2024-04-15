import { v4 } from "uuid";
import styles from "./index.module.css";

const headerImgList = [
  "https://res.cloudinary.com/dniq4wbom/image/upload/v1708116489/Group_475_tzgsz1.png",
  "https://res.cloudinary.com/dniq4wbom/image/upload/v1708116484/Group_307_qng0ml.png",
  "https://res.cloudinary.com/dniq4wbom/image/upload/v1708116478/Group_300_hg9jm2.png",
  "https://res.cloudinary.com/dniq4wbom/image/upload/v1708116478/Group_300_hg9jm2.png",
  "https://res.cloudinary.com/dniq4wbom/image/upload/v1708116462/Group_303_twgtcy.png",
  "https://res.cloudinary.com/dniq4wbom/image/upload/v1708116469/Group_302_e2avtv.png",
  "https://res.cloudinary.com/dniq4wbom/image/upload/v1708116450/Group_304_zbtrxu.png",
];

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      {headerImgList.map((each) => (
        <img key={v4()} src={each} alt="" className={styles.image} />
      ))}
    </header>
  );
};

export default HeaderComponent;