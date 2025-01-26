import { redirect } from 'next/navigation';

const NotFoundPage = () => {
  // Redirect to the home page for any unknown route
  redirect('/');

  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  );
};

export default NotFoundPage;
