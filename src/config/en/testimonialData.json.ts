import Thomas from "@images/thomas-sandgrav.png";
import Annika from "@images/annika-review.jpg";
import Jaanus from "@images/jaanus-leinonen.png";
import Rain from "@images/rain-allikvee.png";
import Mart from "@images/mart-nomper.jpg";

import { type TestimonialItem } from "../types/configDataTypes";

export const testimonialData: TestimonialItem[] = [
  {
    avatar: Thomas,
    name: "Thomas M.",
    title: "Sandgrav Solutions",
    testimonial: `Reminders appearing automatically on dashboards save around 20% of time on task management. Uku has become the backbone of how we run our firm.`,
  },
  {
    avatar: Annika,
    name: "Annika R.",
    title: "Aaron's Accounting Services",
    testimonial: `After one year using Uku, we can serve 38% more clients with the same team. The automation handles what used to take hours of manual work.`,
  },
  {
    avatar: Jaanus,
    name: "Jaanus K.",
    title: "IT Manager, Leinonen Estonia",
    testimonial: `Uku provides monthly data that helps us make informed pricing decisions. The analytics give us visibility we never had before.`,
  },
  {
    avatar: Mart,
    name: "Mart Nõmper",
    title: "Rödl & Partner",
    testimonial: `Uku's team is incredibly attentive and actually listens. Their support quality is something we've rarely experienced with software vendors.`,
  },
  {
    avatar: Rain,
    name: "Rain Allikvee",
    title: "Co-founder, Uku",
    testimonial: `We built Uku to create an environment where teams are happy, clients are well-served, and profits are fair. That vision drives every feature we ship.`,
  },
];

export default testimonialData;
