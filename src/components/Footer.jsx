import React from "react";

const GridItem = ({children}) => (<div className="w-full h-full grow p-8 flex flex-col justify-center items-start">{children}</div>)

const ContainerItem = ({children}) => (<div className="w-full items-center content-start flex p-1 cursor-pointer hover:text-secondary ">{children}</div>)

const Footer = () => {
  return (
    <footer className="w-full h-40 bg-transparent font-Sora relative after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-primary after:to-secondary">
      <div className="w-full h-full flex content-start">

        <GridItem>Enmanuel Colina</GridItem>

        <GridItem>
            <ContainerItem>Linkdn</ContainerItem>
            <ContainerItem>Github</ContainerItem>
            <ContainerItem>Instagram</ContainerItem>
        </GridItem>
      </div>
    </footer>
  );
};

export default Footer;
