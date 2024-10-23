import Footer from "./Footer";
import Heads from "./Heads";

const LayOut = ({ children }) => {
  return (
    <div className="">
      <Heads />
      {children}
      <Footer />
    </div>
  );
};

export default LayOut;
