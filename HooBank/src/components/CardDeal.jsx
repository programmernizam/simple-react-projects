import { card } from "../assets";
import styles, { layout } from "../style";
export default function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          step.
        </h2>
      </div>
    </section>
  );
}
