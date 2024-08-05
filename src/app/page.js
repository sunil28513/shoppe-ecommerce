import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/assets/css/spacing.css'
import '../../public/assets/css/main.css'
import HomePage from './components/pagescomp/home/page';
import Header from './components/common/header/page';

export default function App() {
  return (
    <main>
        <Header/>
        <HomePage/>
    </main>
  );
}
