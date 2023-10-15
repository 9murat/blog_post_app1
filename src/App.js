import 'react-toastify/dist/ReactToastify.css';
import NavigatorPage from "./pages/navigator/navigatorPage";
import { ToastContainer } from "react-toastify";
function App() {

  return (
    <div className="app_container">
      <NavigatorPage />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        theme="light"
      />
    </div>
  );
}

export default App;
