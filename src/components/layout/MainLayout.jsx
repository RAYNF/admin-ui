import Header from "../fragments/Header";
import Navbar from "../fragments/Navbar";
import { useContext } from "react";
import { BaseThemeContext } from "../../context/baseThemeContext";
import { NotifContext } from "../../context/notifContext";
import SimpleBackdrop from "../elements/Backdrop";
import CustomizedSnackbars from "../elements/SnackBar";

const MainLayout = (props) => {
  const { children } = props;
  const { msg, setMsg, open, setOpen, isLoading, setIsLoading } =
    useContext(NotifContext);
  const { baseTheme, toggleTheme } = useContext(BaseThemeContext);

  return (
    <div
      className={`flex ${baseTheme.bgcolor} w-screen min-h-screen max-w-full `}
    >
      {/* navbar start */}
      <Navbar />
      {/* navbar end */}

      <div className="w-screen">
        {/* {isLoading && (
          <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
        )} */}
        {msg && (
          <CustomizedSnackbars
            severity={msg.severity}
            message={msg.desc}
            open={open}
            setOpen={setOpen}
          />
        )}

        {/* header start */}
        <Header />
        {/* header end */}

        {/* content start */}
        <main className="px-6 py-4">
          {children}
          </main>
        {/* content end */}
      </div>
    </div>
  );
};

export default MainLayout;
