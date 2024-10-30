const Instructions = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-green-500">Hello Applicant</h1>
        <h1 className="text-xl font-bold text-red-500">
          This Task is estimated to take a maximum of 3 hours to complete. If you can't implement everything oy want, do not worry, we can discuss any unimplemented/unfinished features during the interview.
        </h1>
        <p className="text-md text-gray-500">
          - The project is to visualize posts and comments from a mock API,
          check the README.md for more details.{" "}
        </p>
        <p className="text-md text-gray-500">
          - The task is simply fetch posts from the API, display these posts,
          the details of the post and the comments associated with the post.
        </p>
        <p className="text-md text-gray-500">
          - We have not implemented any setup, so please feel free to be
          creative with the implementation of a solution. We are interested in
          code modularity and implementation of a good User Interface.
        </p>
        <p className="text-md text-gray-500">
          - Feel free to remove this Instructions component from the App.tsx
          file, and create your own components to display the data.
        </p>
      </div>
    </>
  );
};

export default Instructions;
