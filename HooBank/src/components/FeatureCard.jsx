import styles from "../style";
export default function FeatureCard({ feature, index }) {
  const { icon, title, content } = feature;

  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== feature.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img
          src={icon}
          alt="feature_icon"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-semibold font-poppins text-white text-[18px] leading-[23px]">
          {title}
        </h4>
        <p>{content}</p>
      </div>
    </div>
  );
}
