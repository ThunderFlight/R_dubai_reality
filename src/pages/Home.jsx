import {
  HomeAppartaments,
  HomeContactUs,
  HomeOurExpertise,
  HomeQuote,
  HomeUsefulArticles,
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
      <HomeUsefulArticles />
      <ContactUs />
    </div>
  );
};
