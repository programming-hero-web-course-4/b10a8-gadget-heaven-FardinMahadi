import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white p-5">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <h2 className="text-4xl mb-8">404 - Page Not Found</h2>
        <p className="text-lg mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <img
          src="https://via.placeholder.com/400x300.png?text=404+Error"
          alt="404 Error"
          className="mb-6 rounded-lg shadow-lg"
        />

        <Link
          to="/"
          className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-6 rounded-full text-lg transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
