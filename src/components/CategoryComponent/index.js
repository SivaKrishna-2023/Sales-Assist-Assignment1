import { useContext } from "react";
import { v4 } from "uuid";
import styles from "./index.module.css";
import ReactContext from "../../context/ReactContext";

const CategoryComponent = () => {
  const { apiStatus, data, categoryText, setCategoryText } =
    useContext(ReactContext);

  let categories = [];
  data.forEach((each) => {
    const name = each.category[0].toUpperCase() + each.category.slice(1);
    if (!categories.includes(name)) {
      categories.push(name);
    }
  });

  const progressView = () => {
    const ls = [1, 2, 3, 4, 5, 6];
    return (
      <>
        {ls.map((each) => (
          <button
            className={`${styles.categoryItemPlaceholder} ${
              categoryText === each ? styles.categoryItemSelected : null
            }`}
            key={v4()}>
            .
          </button>
        ))}
      </>
    );
  };

  return (
    <div className={styles.categoryContainer}>
      {apiStatus === "IN_PROGRESS" ? (
        progressView()
      ) : (
        <>
          <button
            className={`${styles.categoryItem} ${
              categoryText === "" ? styles.categoryItemSelected : null
            }`}
            key={v4()}
            onClick={() => setCategoryText("")}>
            All
          </button>
          {categories.map((each) => (
            <button
              className={`${styles.categoryItem} ${
                categoryText === each ? styles.categoryItemSelected : null
              }`}
              key={v4()}
              onClick={() => setCategoryText(each)}>
              {each}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default CategoryComponent;