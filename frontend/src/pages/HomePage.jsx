import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

const user = false;

const HomePage = () => {
  return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
};

export default HomePage;
