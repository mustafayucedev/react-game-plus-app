import Header from 'components/Header/Index';
import Content from 'components/Content/Index';
import Footer from 'components/Footer/Index';
import 'scss/style.scss';
import { FilterProvider } from 'context/filter';

function App() {
  return (
    <FilterProvider>
      <Header />
      <Content />
      <Footer />
    </FilterProvider>

  );
}

export default App;
