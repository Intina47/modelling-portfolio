import BlogComponent from '../app/components/blog';
import Navbar from '../app/components/navbar';
import '../app/globals.css';

const Blog = () => {
    return (
        <div>
            <Navbar />
            <BlogComponent />
        </div>
    );
};

export default Blog;
