import Container from "./ui/Container";
import FooterSection from "./ui/FooterSection";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <Container className="hidden md:block w-full max-w-full mt-40">
        <FooterSection />
      </Container>
      <div className="bg-yellow-300 py-3 text-center w-full left-0 p-0 m-0 hidden md:block">
        Copyright © {date} SkillHive Inc. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
