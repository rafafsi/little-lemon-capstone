import Header from "../sections/Header";
import Restaurant from "../sections/Restaurant";
import Specials from "../sections/Specials";
import Testimonials from "../sections/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Specials />
      <Testimonials />
      <Restaurant />
    </div>
  );
};

export default Home;
