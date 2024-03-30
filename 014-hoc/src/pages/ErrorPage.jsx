import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }
  return (
    <div className="container mx-auto mt-9">
      <h1>{title}</h1>
      <p>{message}</p>
      <Link to="/" className="text-orange-400">
        Return to Home page
      </Link>
    </div>
  );
}

export default ErrorPage;
