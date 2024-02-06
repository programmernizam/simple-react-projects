import { stats } from "../constants";
import styles from "../style";
export default function Stats() {
  return (
    <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className="">
          <h4>{stat.value}</h4>
          <p>{stat.title}</p>
        </div>
      ))}
    </div>
  );
}
