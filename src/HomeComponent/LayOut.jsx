import Footer from "./Footer";
import Header from "./Header";

const LayOut = ({ children }) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayOut;
