import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-900">Page not found</h2>
        <p className="mt-2 text-gray-500 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to={ROUTES.HOME}
            className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
          <Link
            to={ROUTES.DASHBOARD}
            className="px-6 py-3 bg-white text-gray-700 rounded-md font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
