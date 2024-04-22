import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const date = new Date();

export default function Footer() {
  return (
    <footer className="flex flex-col bg-cornsilk px-20 py-10">
      <p className="font-bold">Contact: </p>
      <p className="pb-5 ">pilanesbergleopards@gmail.com</p>
      <div className="flex gap-5 pb-5 border-b border-black">
        <FontAwesomeIcon icon={faFacebook} className="w-[40px]" />
        <FontAwesomeIcon icon={faSquareInstagram} className="w-[40px]" />
        <FontAwesomeIcon icon={faYoutube} className="w-[40px]" />
      </div>
      <p>copyright @ {date.getFullYear()}</p>
    </footer>
  );
}
