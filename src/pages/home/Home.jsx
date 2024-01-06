
import FeaturedRooms from '../../components/home/FeaturedRooms';
import Newsletter from '../../components/home/Newsletter';
import Banner from '../../components/home/banner/Banner';
import Reviews from '../../components/reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <Newsletter></Newsletter>
            <Reviews></Reviews>
           
        </div>
    );
};

export default Home;