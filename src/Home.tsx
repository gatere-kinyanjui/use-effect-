import { useNavigate } from "react-router-dom";

// interface NavigateOptions {
//   replace?: boolean;
//   preventScrollReset?: boolean;
//   relative?: RelativeRoutingType;
//   unstable_flushSync?: boolean;
//   unstable_viewTransition?: boolean;
// }

// type RelativeRoutingType = "route" | "path";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Cat Status App</h1>
      <h2>Push the Button Below to Enter</h2>
      <button onClick={() => navigate("/cat")}>Enter</button>
    </div>
  );
};

export default Home;
