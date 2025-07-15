import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Ideas from '../components/Ideas';

export default function IdeasPage() {
  return (
    <>
      <Navbar />
      <Ideas onlyRecent={false} />
      <Contact />
    </>
  );
}
