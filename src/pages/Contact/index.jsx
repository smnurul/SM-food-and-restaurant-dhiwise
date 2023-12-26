import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer from "components/Footer";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[120px] items-center justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1112px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <Img
              className="h-[51px] w-[12%]"
              src="images/img_logo.svg"
              alt="Logo"
            />
            <div className="flex md:flex-1 sm:flex-col flex-row font-opensans sm:gap-5 items-start justify-center md:ml-[0] ml-[107px] md:mt-0 mt-2.5 pt-0.5 w-[52%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/menu")}
                >
                  Menu
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start ml-8 sm:ml-[0]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/aboutus")}
                >
                  About us
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[31px]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/orderonline")}
                >
                  Order online
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[27px]">
                <Text
                  className="common-pointer text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                  onClick={() => navigate("/reservation")}
                >
                  Reservation
                </Text>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start sm:ml-[0] ml-[31px] w-[14%] sm:w-full">
                <Text
                  className="text-base text-gray-900_cc"
                  size="txtOpenSansRomanRegular16Gray900cc"
                >
                  Contact us
                </Text>
                <Line className="bg-red-400 h-px w-[58%]" />
              </div>
            </div>
            <Button
              className="cursor-pointer flex h-[50px] items-center justify-center md:ml-[0] ml-[122px] w-[50px]"
              leftIcon={
                <Img
                  className="h-6 m-[13px]"
                  src="images/img_cart.svg"
                  alt="cart"
                />
              }
              shape="circle"
              color="white_A700"
              variant="fill"
            ></Button>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-center text-sm"
              shape="round"
              color="red_400"
              size="sm"
              variant="fill"
            >
              Log in
            </Button>
          </div>
          <div className="flex flex-col gap-[19px] items-center justify-start mt-[117px]">
            <Text
              className="md:text-5xl text-[80px] text-gray-900"
              size="txtOpenSansRomanBold80"
            >
              Contact us
            </Text>
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-801 w-full"
              size="txtPoppinsRegular25"
            >
              We love hearing from our customers. Feel free to share your
              experience or ask any questions you may have.
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[50px] w-full">
            <div
              className="bg-cover bg-no-repeat h-[550px] md:h-[60px] p-[215px] md:px-10 sm:px-5 relative rounded-[24px] w-[48%] md:w-full"
              style={{ backgroundImage: "url('images/img_map.png')" }}
            >
              <Img
                className="absolute bottom-[39%] h-[60px] inset-x-[0] mx-auto w-[9%]"
                src="images/img_location.svg"
                alt="location"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-9 items-center justify-start w-[49%] md:w-full">
              <div className="flex flex-col gap-6 items-center justify-start rounded-lg w-full">
                <Input
                  name="Firstname"
                  placeholder="First name"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-400 border-solid w-full"
                  type="text"
                  shape="round"
                ></Input>
                <Input
                  name="Lastname"
                  placeholder="Last name"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-400 border-solid w-full"
                  type="text"
                  shape="round"
                ></Input>
                <Input
                  name="Emailaddress"
                  placeholder="Email address"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-400 border-solid w-full"
                  type="email"
                  shape="round"
                ></Input>
                <Input
                  name="Subject"
                  placeholder="Subject"
                  className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-gray-400 border-solid w-full"
                  shape="round"
                ></Input>
                <TextArea
                  className="bg-white-A700 border border-gray-400 border-solid leading-[normal] pb-[35px] pl-6 pr-[35px] pt-[30px] sm:px-5 rounded-lg text-base placeholder:text-gray-500 text-gray-500 text-left w-full"
                  name="Massage"
                  placeholder="Message"
                ></TextArea>
              </div>
              <Button
                className="cursor-pointer min-w-[540px] sm:min-w-full rounded-[12px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                color="red_400"
                size="lg"
                variant="fill"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-901 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
