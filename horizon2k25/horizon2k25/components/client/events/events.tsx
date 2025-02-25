import { HeadLine } from "@/components/global/HeadLine";
import { WidgetWrapper } from "@/components/global/WidgetWrapper";
import GlassMenu from "@/components/style/GlassMenu";
import ScrollReveal from "@/components/style/ScrollReveal";
import TextPressure from "@/components/style/TextPressure";


const menuItems = [
  {
    number: 1,
    text: "Blind Code",
    image: "/images/ferrari.png",
    posterImage: "/images/ferrari.png",
    description: "Code without seeing the screen, show your skills",
    link: "/events"
  },
  {
    number: 2,
    text: "Blind Code",
    image: "/images/ferrari.png",
    posterImage: "/images/ferrari.png",
    description: "Code without seeing the screen, show your skills",
    link: "/events"
  },
  {
    number: 3,
    text: "Blind Code",
    image: "/images/ferrari.png",
    posterImage: "/images/ferrari.png",
    description: "Code without seeing the screen, show your skills",
    link: "/events"
  },
  // ... more items
];

const Events = () => (

  <WidgetWrapper>
    <HeadLine title="Events that are Funtastic" subtitle="Horizon has been a astounding festival and these events are the reason why. We've got a little something for everyone." titleClass="text-red-500 text-3xl sm:text-5xl"/>
    <TextPressure
    text="Fun!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={26}
  />

  <GlassMenu 
      items={menuItems}
    />

  <TextPressure
    text="Tech!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={26}
  />

<GlassMenu 
      items={menuItems}
    />

  <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={50}
  textClassName='text-red-300 text-center'
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal>

  </WidgetWrapper>
);

export default Events;
