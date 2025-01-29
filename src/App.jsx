import Navbar from "./components/Navbar";
import SearchBar from "./components/Search";
import TopPicksBanner from "./components/TopPicksBanner";
import Container from "./components/ui/Container";
import CardsSection from "./components/CardsSection";
import data from "./assets/data/data.json";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Container className=" gap-10 justify-between w-full hidden lg:flex">
        <TopPicksBanner />
        <TopPicksBanner />
        <TopPicksBanner />
      </Container>
      <CardsSection title="Popular Courses" data={data} />
      <CardsSection title="New Courses" data={data} />
      <div style={{ width: "100%", height: 100 }}></div>
      <Footer />
    </div>
  );
};

export default App;
