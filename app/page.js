import Home from '@/sections/Home';
import styles from '@/styles';

export default function Page() {
  return (
    <div className={`bg-[${styles.bgColor}]`}>
      <Home />
    </div>
  );
}
