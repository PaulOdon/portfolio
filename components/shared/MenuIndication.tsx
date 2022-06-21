import Gradient from "rgt";

export const MenuIndication = ({ icon, title }) => (
  <div
    style={{ position: "absolute", right: 48, top: 48, textAlign: "center" }}
  >
    <Gradient dir="left-to-right" from="#0500FF" to="#BD00FF">
      {/* <span className="material-icons" style={{ fontSize: 24 }}>
        {icon}
      </span> 
      <br />*/}
      {title}
    </Gradient>
  </div>
);
