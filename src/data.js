import TestiImage1 from "./assets/img5.JPG";
import TestiImage2 from "./assets/img5.JPG";
import TestiImage3 from "./assets/img5.JPG";

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
// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "“Visited Shaif’s Cuisine with friends last Sunday.  Really lovely meal and very warm welcome – we would recommend this lovely restaurant and will try to go back again”",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "from start to finish, lovely experience. Hostess very pleasant, wait staff john was wonderful and attentive, food plentiful and delicious, desserts out of this world",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText: `A warm and friendly welcome with fantastic customer service. Always great, tasty food served piping hot- just the way we love it . Would definitely recommend. We have been repeatedly and it's consistently exceeded our expectations    authorName: "Olivia Doe"`,
    authorPosition: "Head of Design, Google",
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
