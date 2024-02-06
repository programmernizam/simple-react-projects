/* eslint-disable react/prop-types */
export default function Button({ styles }) {
  return (
    <button
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
      type="button"
    >
      Get Started
    </button>
  );
}
