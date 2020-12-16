import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import IconButton from "@material-ui/core/IconButton";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Logo from "./logo.png";

const Main = () => {
  return (
    <div className="container">
        <div>
      <img className="logo" src={Logo} alt="Ayuda NGO" />
      <ul className="icons">
        <li>
          <h3>Join the WhatsApp Group </h3>

          <IconButton
            href="https://chat.whatsapp.com/EaIdRV66hdgGQ0zif1XZwg"
            target="_blank"
          >
            <WhatsAppIcon />
          </IconButton>
        </li>
        <li>
          <h3>Apply here </h3>
          <IconButton
            href="https://chat.whatsapp.https://docs.google.com/forms/d/e/1FAIpQLScwPKzLhm3hrVFWBW5NB_8FBYIfz_vYJ97qjB-IVZ4dU6oWOg/viewform/EaIdRV66hdgGQ0zif1XZwg"
            target="_blank"
          >
            <SupervisorAccountIcon />
          </IconButton>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Main;
