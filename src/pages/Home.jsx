import {
  HomeAppartaments,
  HomeCarouselEmployee,
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
      <ContactUs />
      <HomeUsefulArticles />
      <HomeCarouselEmployee />
    </>
  );
};
