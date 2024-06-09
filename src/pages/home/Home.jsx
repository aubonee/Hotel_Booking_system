
import FeaturedRooms from '../../components/home/FeaturedRooms';
import Newsletter from '../../components/home/Newsletter';
import Banner from '../../components/home/banner/Banner';
import Facilities from '../../components/home/facilities/Facilities';
import Location from '../../components/home/map/Location';
import Services from '../../components/home/ourService/Services';
import Reviews from '../../components/reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Facilities></Facilities>
            <FeaturedRooms></FeaturedRooms>
            <Location></Location>
            {/* <Newsletter></Newsletter> */}
            <Reviews></Reviews>
           
        </div>
    );
};

export default Home;