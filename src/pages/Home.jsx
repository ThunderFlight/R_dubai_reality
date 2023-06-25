import {
  HomeAppartaments,
  HomeContactUs,
  HomeOurExpertise,
  HomeQuote,
  HomeVideo,
} from '../components/Home';

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
