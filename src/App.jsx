import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Values from "./components/Values/Values";
import Electricity from "./components/Electricity/Electricity";
import Cases from "./components/Сases/Сases";
import FAQ from "./components/FAQ/FAQ";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import { appStyles } from "./styles";

function App() {
  return (
    <Container sx={appStyles.container}>
      <Header />
      <Container component="main" sx={appStyles.main}>
        <Main />
        <Values />
        <Electricity />
        <Cases />
        <FAQ />
        <ContactUs />
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
