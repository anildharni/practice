import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ToDoContextProvider from "./store/Context";
import AllMeetups from "./pages/AllMeetups/AllMeetups";
import FavMeetups from "./pages/FavMeetups/FavMeetups";
import NewMeetup from "./pages/NewMeetup/NewMeetupCreate";

function App() {

  const AllMeetupPaths = () => useRoutes([
    { path: "/", element: <AllMeetups /> },
    { path: "/allmeetups", element: <AllMeetups /> },
    { path: "/newmeetup", element: <NewMeetup /> },
    { path: "/favmeetups", element: <FavMeetups /> },
  ]);

  return (
    <>
      <ToDoContextProvider>
        <Layout>
        </Layout>
        <AllMeetupPaths />
      </ToDoContextProvider>
    </>
  );
}

export default App;
