import { SparklesCore } from "@/components/UI/Sparkles";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1 className={styles.title_hi}>Hi , I'm</h1>
        <h1 className={styles.title_name}>Vinay Padman</h1>
        <div className={styles.title_summary}>
          Hey there! 🚀 I'm a Software Engineer hailing from the vibrant land of
          Kerala, India. With my trusty tools including React.js, TypeScript,
          JavaScript, SCSS, and the mighty C#/.NET, I craft digital wonders that
          dance and dazzle on the screen! 💻 Whether it's building sleek
          interfaces or conjuring up backend magic, I'm your go-to wizard. My
          coding journey is like a thrilling adventure, always exploring new
          realms of technology and pushing boundaries. Let's sprinkle some fun
          into the code and create software that not only works flawlessly but
          also brings a smile to your face!
        </div>
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className={styles.particle}
          particleColor="#03fcdb"
        />
      </div>
    </div>
  );
};

export default Home;
