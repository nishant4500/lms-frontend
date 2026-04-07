import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useAppDispatch';
import { fetchUserProfile } from '../slices/userSlice';
import WelcomeCard from '../components/dashboard/WelcomeCard';
import Card from '../components/common/Card';
import LoadingSpinner from '../components/common/LoadingSpinner';

const stats = [
  { label: 'Courses Enrolled', value: '0', icon: '📚' },
  { label: 'Completed', value: '0', icon: '✅' },
  { label: 'In Progress', value: '0', icon: '🎯' },
  { label: 'Certificates', value: '0', icon: '🏆' },
];

const DashboardPage = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <WelcomeCard />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Activity">
          <div className="text-center py-8 text-gray-400">
            <svg className="mx-auto h-12 w-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p>No recent activity yet.</p>
            <p className="text-sm mt-1">Start exploring courses to get started!</p>
          </div>
        </Card>

        <Card title="Upcoming Deadlines">
          <div className="text-center py-8 text-gray-400">
            <svg className="mx-auto h-12 w-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p>No upcoming deadlines.</p>
            <p className="text-sm mt-1">You're all caught up!</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
