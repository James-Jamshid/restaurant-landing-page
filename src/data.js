//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  // FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi";
import { SiNetlify } from "react-icons/si";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  // {
  //   name: "portfolio",
  //   href: "portfolio",
  // },
  // {
  //   name: "services",
  //   href: "services",
  // },
  // {
  //   name: "testimonials",
  //   href: "testimonials",
  // },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: "https://youtube.com/channel/UCPKqQOYv3ckl9l29twiuylw",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/invites/contact/?i=1vnht9hv8hea&utm_content=xwiw7q",
  },

  {
    icon: <FiFacebook />,
    href: "https://www.facebook.com/jamshid.makhmudov.1994",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at jamshid.makh94@mail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Daegu, South Korea",
    description: "Serving clients worldwide",
  },
];
