// import { features } from "../constants";
import styles, { layout } from "../style";
// import Button from "./Button";
export default function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> well handle
          the money.
        </h2>
      </div>
    </section>
  );
}
