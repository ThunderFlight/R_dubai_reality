import {
  HomeAppartaments,
  HomeContactUs,
  HomeLatest,
  HomeOurExpertise,
  HomeQuote,
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
      <ContactUs />
    </>
  );
};
