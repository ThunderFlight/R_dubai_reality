import {
  HomeAppartaments,
  HomeContactUs,
  HomeOurExpertise,
  HomeQuote,
  HomeVideo,
} from '../components/Home';
import { ContactUs } from '../components/common';

export const Home = () => {
  return (
    <div>
      <HomeOurExpertise />
      <HomeVideo />
      <HomeQuote />
      <HomeAppartaments />
      <HomeContactUs />
      <ContactUs />
    </div>
  );
};
