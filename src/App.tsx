import { Applications, Footer } from "./components/ApplicationsFooter";
import { Header, Hero } from "./components/HeaderHero";
import { People, Audience } from "./components/PeopleAudience";
import { Problem, Programme } from "./components/ProblemProgramme";

export default function App() {
  return (
    <>
      <Header />
      <main className="bg-ivory" id="main-content" tabIndex={-1}>
        <Hero />
        <Problem />
        <Programme />
        <People />
        <Audience />
        <Applications />
      </main>
      <Footer />
    </>
  );
}
