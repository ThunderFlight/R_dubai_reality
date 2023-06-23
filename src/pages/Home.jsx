import { HomeOurExpertise, HomeQuote, HomeVideo } from '../components/Home';
import { HomeAppartaments } from '../components/Home/HomeAppartaments';
import { HomeContactUs } from '../components/Home/HomeContactUs/HomeContactUs';
export const Home = () => {
  return (
    <>
      <HomeOurExpertise />
      <HomeVideo />
      <HomeQuote />
      <HomeAppartaments />
      <HomeContactUs />
    </>
  );
};
