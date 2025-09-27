
import { Link } from 'react-router-dom';

const NotFound = () => {

    return (
        <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
            <div className="w-full max-w-md text-center">
                <div className="mb-8">
                    <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"  />
                    <span className='bg-[#1cb3ff] mt-5 rounded text-white font-bold text-3xl p-3'>
                        <Link to="/" >Go To Home</Link>
                    </span>
                </div>



            </div>
        </div>
    );
};

export default NotFound;

