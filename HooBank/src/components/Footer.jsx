import { logo } from "../assets";
import styles from "../style";
export default function Footer() {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div>
          <img src={logo} alt="hooBank" />
        </div>
      </div>
    </footer>
  );
}
