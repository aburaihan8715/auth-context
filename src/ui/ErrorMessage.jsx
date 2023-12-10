const ErrorMessage = ({ children }) => {
  return (
    <div className="my-10 text-center text-2xl font-semibold capitalize text-red-600">
      {" "}
      {children}
    </div>
  );
};

export default ErrorMessage;
