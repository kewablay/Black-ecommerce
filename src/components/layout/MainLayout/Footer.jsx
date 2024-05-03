import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../../assets/icons/svgIcons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="p-8 py-12 text-white bg-bgDark lg:py-12 text-200 sm:text-300">
      <div className="container grid gap-8 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="space-y-8 ">
          <div className="justify-center space-y-2 ">
            {/* LOgo */}
            <p>Logo</p>
            <p className=" text-200 text-[#797979]">
              © Company
              <br /> All Rights Reserved.
            </p>
          </div>
        </div>
        {/*  */}

        <div>
          <h3 className="mb-2 font-medium text-300 sm:text-400 sm:font-bold">
            Our Company
          </h3>
          <div className="flex flex-col gap-2  text-200 text-[#797979]">
            <Link>About Us</Link>
            <Link>FAQS</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
            <Link>Delivery & Returns</Link>
          </div>
        </div>
        {/*  */}

        <div>
          <h3 className="mb-2 font-medium text-300 sm:text-400 sm:font-bold">
            Contact
          </h3>
          <div className="flex flex-col gap-2  text-200 text-[#797979]">
            <p>
              123 Main Street,
              <br />
              Suite 101 Cityville,
              <br />
              State, Zip
            </p>
            <Link> info@company.com</Link>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>

        {/*  */}
        <div className="space-y-8">
          {/* social icons */}
          <div>
            <h3 className="mb-2 font-medium text-300 sm:text-400 sm:font-bold">
              Social Media
            </h3>
            <div className="flex gap-2">
              <Link to={"#"}>
                <FacebookIcon />
              </Link>
              <Link to={"#"}>
                <LinkedInIcon />
              </Link>
              <Link to={"#"}>
                <TwitterIcon />
              </Link>
              <Link to={"#"}>
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
