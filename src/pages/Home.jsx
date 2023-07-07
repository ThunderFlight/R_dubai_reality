import {
  HomeAppartaments,
  HomeLatest,
  HomeOurExpertise,
  HomeQuote,
  HomeUsefulArticles,
  HomeVideo,
} from '../components/Home';

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
    </>
  );
};
