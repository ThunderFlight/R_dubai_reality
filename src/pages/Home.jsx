import { HomeContactUs, HomeOurExpertise, HomeQuote, HomeVideo } from '../components/Home';
import { HomeAppartaments } from '../components/Home/HomeAppartaments';

export const Home = () => {
  return (
    <div>
      <HomeOurExpertise />
      <HomeVideo />
      <HomeQuote />
      <HomeAppartaments />
      <HomeContactUs />
    </div>
  );
};
