import PhoneSignUpForm from "../components/PhoneSignUpForm";

const PhoneSignUp = () => {
  return (
    <div className="py-4">
      <div className="mx-auto max-w-md rounded-md border p-4 shadow-lg">
        <div>
          <h1 className="mb-4 text-center text-3xl uppercase">
            Firebase Auth Phone
          </h1>
        </div>

        <div>
          {/* <PhoneSignUpForm /> */}
          <PhoneSignUpForm />
        </div>
      </div>
    </div>
  );
};

export default PhoneSignUp;
