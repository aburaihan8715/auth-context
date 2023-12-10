import { useUserAuth } from "../hooks/useUserAuth";

const Home = () => {
  const { user } = useUserAuth();
  console.log(user);
  return (
    <div className="">
      <div>home page</div>
    </div>
  );
};

export default Home;
