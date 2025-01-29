const FooterBlock = ({ title, links, className, children }) => {
  return (
    <div className="w-1/4">
      <h1 className="text-blue-500 text-lg">{title}</h1>
      <div className={"mt-3 flex flex-col gap-2"}>
        {links != undefined
          ? links.map((item, index) => (
              <a className="text-black" key={index} href="#">
                {item}
              </a>
            ))
          : children}
      </div>
    </div>
  );
};

export default FooterBlock;
