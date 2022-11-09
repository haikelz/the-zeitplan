import Navbar from "./components/navbar";
import Layout from "./components/templates/layout";
import Banner from "./components/banner";
import Harga from "./components/harga";
import Fitur from "./components/fitur";
import Download from "./components/download";
import Footer from "./components/footer";
import Testimoni from "./components/testimoni";
import Alasan from "./components/alasan";

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Banner />
      <Alasan />
      <Fitur />
      <Harga />
      <Testimoni />
      <Download />
      <Footer />
    </Layout>
  );
};

export default App;
