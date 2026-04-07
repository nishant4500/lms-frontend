import { APP_NAME } from '../../constants';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-6">
      <div className="text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} {APP_NAME} - Learning Management System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
