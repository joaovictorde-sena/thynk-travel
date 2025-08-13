import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import Destinations from '../components/Destinations'
import PopularDestinations from '../components/PopularDestinations'
import Testimonials from '../components/Testimonials'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Destinations />
      <PopularDestinations />
      <Testimonials />
      <Categories />
    </div>
  )
}

export default Home