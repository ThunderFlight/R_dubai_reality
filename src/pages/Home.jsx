import {
  HomeAppartaments,
  HomeFirstScreen,
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
      <HomeFirstScreen />
      <HomeLatest />
      <HomeOurExpertise />
      <HomeVideo />
      <HomeQuote />
      <HomeAppartaments />
      <ContactUs />
      <HomeUsefulArticles />
    </>
  );
};
