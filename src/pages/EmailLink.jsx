import EmailLinkForm from "../components/EmailLinkForm";

const EmailLink = () => {
  return (
    <div className="py-4">
      <div className="mx-auto max-w-md rounded-md border p-4 shadow-lg">
        <div>
          <h1 className="mb-4 text-center text-3xl uppercase">
            firebase auth email link
          </h1>
        </div>

        <div>
          <EmailLinkForm />
        </div>
      </div>
    </div>
  );
};

export default EmailLink;
