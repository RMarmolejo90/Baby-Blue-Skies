import Navbar from './components/navbar'
import Hero from './components/hero'
import Carousel from './components/carousel'
import Cta from './components/cta'
import Hook from './components/hook'
import EmailForm from './components/emailList'


function App() {
  return (
    <div className='leading-6 text-base'>
      <Navbar />
      <Hero />
      <EmailForm />
      <Hook />
      <Cta />
      <Carousel />
      
    </div>
  )
}

export default App
