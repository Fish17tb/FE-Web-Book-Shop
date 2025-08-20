import { PulseLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems:"center" }}>
        <h4 style={{color:"#049170"}}>chờ xíu</h4>
        <PulseLoader color="#049170" size={15} aria-label="Loading Spinner" />;
      </div>
    </div>
  );
};

export default Spinner;
