import { Col, Container, Row } from "@/components/layout/Format";
import Image from "next/image";
import "./Footer.css";
import Link from "next/link";
function Footer() {
  const links = {
    col1: [
      {
        name: "ABOUT MARVEL",
        link: "/about",
      },
      {
        name: "HELP/FAQS",
        link: "/help",
      },
      {
        name: "INTENSHIPS",
        link: "/intership",
      },
      {
        name: "CAREERS",
        link: "/careers",
      },
    ],
    col2: [
      {
        name: "ADVERTISING",
        link: "/advert",
      },
      {
        name: "DISNEY+",
        link: "/disney",
      },
      {
        name: "MARVELHQ.CCOM",
        link: "/marvelhq",
      },
      {
        name: "REDEEM DIGITAL COMICS",
        link: "/redeem-comics",
      },
    ],
    col3: [
      {
        name: "MARVEL INSIDER",
        sub_name: "Get Rewarded for Being a Marvel Fan",
        link: "/insider",
        image: "/images/insider-logo-1.png",
        h: 44,
        w: 123,
      },
      {
        name: "MARVEL UNLIMITED",
        sub_name: "Access Over 30,000+ Digital Comics",
        link: "/unlimited",
        image: "/images/unnamed-removebg-preview-2.png",
        h: 44,
        w: 123,
      },
    ],
    col4: [
      {
        alt: "Facebook",
        image: "/images/facebook.png",
      },
      {
        alt: "Twitter",
        image: "/images/twitter.png",
      },
      {
        alt: "Instagram",
        image: "/images/instagram.png",
      },
    ],
    col5: [
      {
        name: "Terms of Use",
        link: "/terms",
      },
      {
        name: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        name: "Your California Privacy Rights",
        link: "/privacy-rights",
      },
      {
        name: "Children's Online Privacy Policy",
        link: "/children-policy",
      },
      {
        name: "Do Not Sell My Personal Information",
        link: "/personal",
      },
      {
        name: "License Agreement",
        link: "/license",
      },
      {
        name: "Marvel Insider Terms",
        link: "/insider",
      },
      {
        name: `©${new Date().getFullYear()} MARVEL`,
        link: "/",
      },
    ],
  };
  return (
    <footer>
      <Container className="pt-[60px] pb-[20px] md:pb-[68px]">
        <Row>
          <Col
            sm={12}
            md={12}
            lg={12}
            className="flex justify-start md:justify-center items-center"
          >
            <div className="dax-ko-footer-logo">
              <Image
                src="/images/Marvel_logo.png"
                alt="Brand Logo"
                width={262}
                height={120}
                priority
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={12} className="dax-ko-footer-menu">
            <div className="dax-ko-footer-menu-left">
              {/* Column 1 */}
              <ul className="w-full sm:w-[45%] md:w-[18%]">
                {links.col1.map((link, index) => (
                  <li
                    className="dax-ko-footer-menu-left-link mb-[8px] md:mb-[16px]"
                    key={index}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>

              {/* Column 2 */}
              <ul className="w-full sm:w-[45%] md:w-[15%]">
                {links.col2.map((link, index) => (
                  <li
                    className="dax-ko-footer-menu-left-link mb-[8px] md:mb-[16px]"
                    key={index}
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>

              {/* Column 3 */}
              <ul className="w-full sm:w-[100%] md:w-[47%]">
                {links.col3.map((link, index) => (
                  <li
                    className="dax-ko-footer-menu-right-link mb-[8px] md:mb-[16px]"
                    key={index}
                  >
                    <div
                      className="image"
                      style={
                        link.image
                          ? { backgroundImage: `url(${link.image})` }
                          : {}
                      }
                    ></div>
                    <div className="meta">
                      <Link href={link.link}>
                        {link.name}
                        <br />
                        <span>{link.sub_name}</span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Social Title */}
              <div className="w-full sm:w-[100%] md:w-[20%]">
                <div className="dax-ko-footer-social-title">FOLLOW MARVEL</div>
                <div className="dax-ko-social-links">
                  {links.col4.map((img) => {
                    return (
                      <Image
                        src={img.image}
                        alt={img.alt}
                        height={50}
                        width={50}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className="dax-ko-footer-end">
              {links.col5.map((data) => {
                return <Link href={data.link}>{data.name}</Link>;
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
