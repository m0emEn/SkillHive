import FooterBlock from "./FooterBlock";
import LinkedIn from "../../assets/images/icons/LinkedIn";
import Facebook from "../../assets/images/icons/Facebook";
import Instagram from "../../assets/images/icons/Instagram";
const FooterSection = () => {
  return (
    <>
      <div className="lg:px-30 px-10 py-8 flex gap-10 justify-around">
        <FooterBlock
          title={"About Us"}
          links={["Home", "Our Story", "Terms Of Use"]}
        />
        <FooterBlock title={"More"} links={["Blog"]} />
        <FooterBlock title={"Discover"} links={["Our Offers", "Our Content"]} />
        <FooterBlock title={"Contact Us"}>
          <div className="flex gap-4">
            <Facebook size={26} />
            <Instagram size={26} />
            <LinkedIn size={26} />
          </div>
        </FooterBlock>
      </div>
    </>
  );
};

export default FooterSection;
