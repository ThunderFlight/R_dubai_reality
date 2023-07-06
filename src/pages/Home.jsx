import {
  HomeAppartaments,
  HomeContactUs,
  HomeLatest,
  HomeOurExpertise,
  HomeQuote,
  HomeUsefulArticles,
  HomeVideo,
} from '../components/Home';
import { ContactUs } from '../components/common';

export const Home = () => {
  return (
    <>
      <HomeLatest />
      <HomeOurExpertise />
      <HomeVideo />
      <HomeQuote />
      <HomeAppartaments />
      <HomeContactUs />
      <HomeUsefulArticles />
      <ContactUs />
    </>
  );
};
