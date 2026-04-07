import { useAppSelector } from '../../hooks/useAppDispatch';
import Card from '../common/Card';

const WelcomeCard = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Card className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="flex items-center space-x-4">
        <div className="h-16 w-16 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">
            {user?.firstName?.charAt(0)?.toUpperCase() || 'U'}
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            Welcome back, {user?.firstName || 'User'}!
          </h2>
          <p className="text-blue-100 mt-1">
            {user?.role === 'instructor'
              ? "Ready to teach today?"
              : user?.role === 'admin'
              ? "Manage your LMS platform"
              : "Continue your learning journey"}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default WelcomeCard;
