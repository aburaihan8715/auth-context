import UpdateProfileForm from "../components/UpdateProfileForm";

const UpdateProfile = () => {
  return (
    <div className="py-4">
      <div className="mx-auto max-w-md rounded-md border p-4 shadow-lg">
        <div>
          <h1 className="mb-4 text-center text-3xl uppercase">Please Update</h1>
        </div>

        <div>
          <UpdateProfileForm />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
