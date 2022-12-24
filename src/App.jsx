import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "./Layout/Layout";
import { setUserLog } from "./ReduxToolKit/Reducers/userLog.slice";

function App() {
  const dispatch = useDispatch();
  const userLog = useSelector((state) => state.userLog.userLog);

  // check if user is logged everywhere on app
  useEffect(() => {
    //set token auth inside ReduxStore if local storage contain "token"
    const tokenId = localStorage.getItem("token");
    if (tokenId !== null) {
      dispatch(setUserLog(tokenId));
    }
  }, [userLog]);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
