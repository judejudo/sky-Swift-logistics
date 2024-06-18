// src/pages/HomePage.js
import React from "react";
import ship from "../assets/images/ship.jpg";
import dhl_plane from "../assets/images/dhl_plane.jpg";
import mitchell_warehouse from "../assets/images/mitchel_warehouse.png";
import quote from "../assets/icons/quote.png";
import shipbox from "../assets/icons/shipbox.png";
import tracking from "../assets/icons/tracking.png";
import crane from "../assets/icons/crane.png";
import handshake from "../assets/icons/handshake.png";
import exchange from "../assets/icons/exchange.png";
import walk from "../assets/icons/walk.png";
import handshake1 from "../assets/icons/handshake1.png";
import crane2 from "../assets/images/crane.png";
import shipping from "../assets/icons/shipping.png";
import containers from "../assets/icons/containers.png";
import serviceIcon1 from "../assets/icons/service-icon-1.png";
import serviceIcon2 from "../assets/icons/service-icon-2.png";
import serviceIcon3 from "../assets/icons/service-icon-3.png";
import serviceIcon4 from "../assets/icons/service-icon.png";
import worldwide from "../assets/images/worldwide.jpg";
import visa from "../assets/logos/visa_logo.png";
import i_m from "../assets/logos/im.png";
import mastercard from "../assets/logos/mastercard.png";
import dhl from "../assets/logos/dhl.png";
import sbm from "../assets/logos/sbm_logo.png";
import ipay from "../assets/logos/ipay.png";
import stanbic from "../assets/logos/stanbic.png";
import equity from "../assets/logos/equity_bank_logo.png";
import mitchell from "../assets/logos/mitchell.png";
import truck from "../assets/icons/truck.png";
import number1 from "../assets/icons/number.png";
import number2 from "../assets/icons/number2.png";
import number3 from "../assets/icons/number3.png";
import number123 from "../assets/icons/number123.png";
import reception from "../assets/icons/receiption.png";
import delivery from "../assets/icons/delivery.png";
import shipping_package from "../assets/icons/shipping_package.png";
import route from "../assets/icons/route.png";

const HomePage = () => {
  return (
    <div className="font-fredoka">
      <div
        className="relative font-fredoka flex items-center justify-center  h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${ship})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center space-y-3 pl-20">
          <h1 className="text-8xl font-bold text-white">Welcome to </h1>
          <h2 className="text-7xl text-orange-700">Sky-Swift Logistics</h2>
          <p className="text-white text-3xl">
            Global Logistics Expertise you can count on
          </p>
          <p className="text-white text-3xl">
            for International Shipping and more
          </p>
          <div className="absolute transform scale-y-[-1] flex flex-row pb-[650px] pl-[300px] items-center justify-center">
            <div className="text-center  h-40 bg-gray-100 w-64 scale-y-[-1]  shadow-xl  border-orange-400  rounded-lg">
              <img src={quote} alt="ship" className=" h-14 w-14  ml-24 mt-2" />
              <p className="font-bold text-center">Get a quote</p>
              <p className="font-thin">Estimate how much it will cost</p>
              <p className="font-thin">to ship your package</p>
            </div>
            <div className=" bg-gray-100 h-52 w-64 scale-y-[-1] shadow-xl border-orange-400 border rounded-lg ">
              <img
                src={tracking}
                alt="shipbox"
                className="h-18 w-18  ml-20 mt-4 "
              />
              <p className="font-bold text-center">Tracking</p>
              <p className="text-center font-thin">
                Track your package's delivery progress
              </p>
            </div>
            <div className=" bg-gray-100 h-40 w-64  scale-y-[-1] shadow-xl  border-orange-400 rounded-lg ">
              <img
                src={shipbox}
                alt="shiptracking"
                className=" h-16 w-16  ml-24 mt-2"
              />
              <p className="font-bold text-center">Ship Now</p>
              <p className="text-center font-thin">
                Get your package on the road
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-40 border-2 justify-center items-center rounded border-orange-400 ml-[420px]  w-[500px]">
        <input
          type="text"
          placeholder="Enter your tracking number"
          className=" flex justify-center items-center h-12 w-[390px]  "
        />
        <button className="flex justify-center items-center h-10 w-28 shadow-2xl font-xl font-bold bg-orange-400 text-Track border ">
          Track
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full">
          <div className="mt-16 flex items-center justify-center h-20  bg-slate-200 text-center flex-col">
            <h2 className="text-5xl font-medium tracking-wider text-blue-950">
              OUR SERVICES
            </h2>
            <div className="absolute right-5 flex space-x-5">
              <img className="h-14" src={containers} alt="containers" />
              <img className="h-14" src={crane} alt="crane" />
              <img className="h-14" src={shipping} alt="shipping" />
            </div>
          </div>
        </div>
        <div
          className="relative w-full mt-3  h-[600px] bg-cover bg-center"
          style={{ backgroundImage: `url(${worldwide})` }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <img src={crane2} alt="Overlay" className=" object-cover" />
            <div className="absolute left-0 top-0 mt-32 ml-10 text-start h-32 w-96 ">
              <img
                src={serviceIcon4}
                alt="ship"
                className=" h-14 w-14 p-  z-50 "
              />
              <div className="ml-9 bg-white shadow-lg rounded-lg p-3">
                <p className="font-bold text-orange-400 tracking-wide text-2xl">
                  Real-Time Tracking
                </p>
                <p className="font-thin">
                  Stay connected to your cargo's journey{" "}
                </p>
                <p className="font-thin">with our advanced tracking system</p>
              </div>
            </div>
            <div className="absolute right-10 top-4 ml-10 text-start h-32 w-96 ">
              <img
                src={serviceIcon3}
                alt="ship"
                className=" h-14 w-14 p-  z-50 "
              />
              <div className="ml-9 bg-white shadow-lg rounded-lg p-3">
                <p className="font-bold text-orange-400 tracking-wide text-2xl">
                  Secure Shipping
                </p>
                <p className="font-thin">
                  Our secure handling and vigilant tracking ensure your cargo is
                  protected through it's journey
                </p>
              </div>
            </div>
            <div className="absolute right-20 bottom-10  ml-10 text-start h-32 w-96 ">
              <img
                src={serviceIcon2}
                alt="ship"
                className=" h-14 w-14 p-  z-50 "
              />
              <div className="ml-9 bg-white shadow-lg rounded-lg p-3">
                <p className="font-bold text-orange-400 tracking-wide text-2xl">
                  Packaging
                </p>
                <p className="font-thin">
                  We provide customized packing ensuring your items are safe
                  duing transit{" "}
                </p>
              </div>
            </div>
            <div className="absolute left-10 bottom-10 mt-32 ml-10 text-start h-32 w-96 ">
              <img
                src={serviceIcon1}
                alt="ship"
                className=" h-14 w-14 p-  z-50 "
              />
              <div className="ml-9 bg-white shadow-lg rounded-lg p-3">
                <p className="font-bold text-orange-400 tracking-wide text-2xl">
                  Global Shipping
                </p>
                <p className="font-thin">
                  Reach markets across continets with our comprehensive global
                  shipping solutions{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className=" flex w-full h-screen justify-end items-center mt-10" style={{ backgroundImage: `url(${dhl_plane})` }} >
          <div className="flex flex-col  w-[700px] h-[300px] bg-white bg-opacity-30 backdrop-blur-lg rounded-lg mr-10 p-5">
            <p className="text-5xl font-bold text-red-700 underline"> DHL Official Agent</p>
            <p className="text-2xl"> Our air and ocean freight forwarding services are powered by a partnership with DHL Global Forwarding, ensuring your cargo reaches its destination efficiently and on time. </p>
            <button className="flex justify-center items-center mt-5 h-10 w-40 shadow-2xl font-xl font-bold  text-Track border  text-red-700">
          Learn More
        </button>
          </div>
      </div>
      <div className=" flex w-full h-[650px] justify-end items-center" style={{ backgroundImage: `url(${mitchell_warehouse})` }} >
          <div className="flex flex-col  w-[700px] h-[300px] bg-white bg-opacity-30 backdrop-blur-lg rounded-lg mr-10 p-5">
            <p className="text-5xl font-bold text-blue-700 underline">Mitchell Cotts Super Agent</p>
            <p className="text-2xl"> We have a strong working relationships with Mitchell Cotts which enables us to offer flexible routing and multiple ocean transportation options for both part container (LCL) and full container (FCL) movements.</p>
            <button className="flex justify-center mt-5 items-center h-10 w-40 shadow-2xl font-xl font-bold border text-Track   text-blue-700">
          Learn More
        </button>
          </div>
      </div>
        
      </div>
      <div className="mt-10 flex items-center justify-center h-20 bg-orange-100 text-center flex-col">
        <h2 className="text-5xl font-medium tracking-wider text-blue-950">
          THE PROCESS
        </h2>
        <div className="absolute right-5 flex space-x-5">
          <img className="h-14" src={walk} alt="containers" />
          <img className="h-14" src={route} alt="crane" />
          <img className="h-14 mt-5" src={number123} alt="shipping" />
        </div>
      </div>
      <div className="m-5 mb-32 relative">
        <div className="text-6xl font-medium">
          <p>Our process can be </p>
          <p>simply described in </p>
          <p className="text-orange-400">3 easy steps </p>
        </div>
        <div className="bg-orange-100 h-[450px] w-80 rounded-lg mt-5 absolute right-4 bottom-40">
          <div className="flex flex-col justify-center items-center relative">
            <img className="h-64" src={delivery} alt="step1" />
            <img className="h-20 absolute top-52" src={number3} alt="step1 " />
            <div className="mt-9 flex flex-col items-center  ">
              <p className="text-2xl font-bold">Delivering the </p>
              <p className="font-thin">We confirm successful delivery at </p>
              <p>your receipient</p>
              
            </div>
          </div>
        </div>
        <div className="bg-orange-100 h-[450px] w-80 rounded-lg mt-5 absolute left-[520px] bottom-24">
          <div className="flex flex-col justify-center items-center relative">
            <img className="h-64" src={shipping_package} alt="step1" />
            <img className="h-20 absolute top-52" src={number2} alt="step1 " />
            <div className="mt-9 flex flex-col items-center  ">
              <p className="text-2xl font-bold">Delivering the </p>
              <p className="font-thin">We confirm successful delivery at </p>
              <p>your receipient</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-100 h-[450px] w-80 rounded-lg mt-5 ml-10 ">
          <div className="flex flex-col justify-center items-center relative">
            <img className="h-64" src={reception} alt="step1" />
            <img className="h-20 absolute top-52" src={number1} alt="step1 " />
            <div className="mt-9 flex flex-col items-center  ">
              <p className="text-2xl font-bold">Receiption of Package</p>
              <p className="font-thin">Your package arrives safely</p>
              <p className="font-thin">at out secure facility </p>
            </div>
          </div>
          {/* <img className="absolute right-10 bottom-10  h-72" src={truck} alt="step1" /> */}
        </div>
        
      </div>
      <div className="mt-10 flex items-center justify-center h-20 bg-orange-100 text-center flex-col">
        <h2 className="text-5xl font-medium tracking-wider text-blue-950">
          OUR PARTNERS
        </h2>
        <div className="absolute right-5 flex space-x-5">
          <img className="h-14" src={handshake} alt="containers" />
          <img className="h-14" src={exchange} alt="crane" />
          <img className="h-14" src={handshake1} alt="shipping" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-5 space-y-5 w-full mb-4">
        <img src={dhl} alt="logo" className="h-64 w-64" />
        <img src={mitchell} alt="logo" className="h-24 w-auto" />
        <img src={visa} alt="logo" className="h-20 w-auto" />
        <img src={i_m} alt="logo" className="h-40 w-auto" />
        <img src={ipay} alt="logo" className="h-24 w-auto" />
        <img src={sbm} alt="logo" className="h-24 w-auto" />
        <img src={stanbic} alt="logo" className="h-24 w-auto" />
        <img src={mastercard} alt="logo" className="h-24 w-auto" />
        <img src={equity} alt="logo" className="h-24 w-auto" />
      </div>
    </div>
  );
};

export default HomePage;
