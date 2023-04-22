import Navbar from './components/navbar'
import Hero from './components/hero'
import Carousel from './components/carousel'
import Cta from './components/cta'
import Hook from './components/hook'
import Why from './components/why'
import Footer from './components/footer'
import loadable from '@loadable/component';

const EmailForm = loadable(() => import('./components/emailList'));


function App() {

  
  return (
    <div className='leading-6 text-base text-dark-shade bg-white-shade'>
      <Navbar />
      <Hero />
      <Hook />
      <Cta />
      <Carousel />
      <Why />
      <EmailForm />
      <Footer />
    </div>
  )
}

export default App
