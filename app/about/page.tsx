// pages/about.tsx
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <header className="bg-white drop-shadow-md">
        <NavBar />
      </header>
      
      <div className="grid grid-cols-3 p-4">
      <div></div>
        <div className="max-w-2xl p-4 bg-white border rounded-lg drop-shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center drop-shadow-md border-b-stone-400">
          <div className="flex justify-center items-center">
          <Image
            className="hover:scale-125 transition duration-500 cursor-pointer drop-shadow-md"
            src="/favicon.ico"
            alt="DPWH"
            width="90"
            height="90"
          />
          </div>
          BUTUAN CITY DISTRICT ENGINEERING OFFICE
        </h1>
          <table className="table table-bordered table-auto">
            <thead>
              <tr>
                <th>Office Address:</th>
                <td>R. Palma, Butuan City</td>
              </tr>
              <tr>
                <th>District Engineer:</th>
                <td>DE JOSE CAESAR A. RADAZA</td>
              </tr>
              <tr>
                <th>Contact No.:</th>
                <td> (085) 815-3971</td>
              </tr>
              <tr>
                <th>District Engineer Email Address:</th>
                <td>radaza.jose_caesar@dpwh.gov.ph</td>
              </tr>
              <tr>
                <th>Asst. District Engineer:</th>
                <td>ADE ERVIN P. SALANG</td>
              </tr>
              <tr>
                <th>Asst. District Engineer Email Address:</th>
                <td>salang.ervin@dpwh.gov.ph</td>
              </tr>
              <tr>
                <th>Region:</th>
                <td>
                  <a
                    target="_blank"
                    href="https://www.dpwh.gov.ph/dpwh/directory/region/region-xiii"
                  >
                    Region XIII
                  </a>
                </td>
              </tr>
            </thead>
          </table>
        </div>
        <div></div>
      </div>
      <footer className="absolute inset-x-0 bottom-0 h-16">
        <Footer />
      </footer>
    </>
  );
};

export default AboutPage;
