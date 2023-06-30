import {
  HomeAppartaments,
  HomeCarouselEmployee,
  HomeContactUs,
  HomeOurExpertise,
  HomeQuote,
  HomeUsefulArticles,
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
      <HomeUsefulArticles />
      {/* <ContactUs /> */}
      <HomeCarouselEmployee />
    </div>
  );
};
