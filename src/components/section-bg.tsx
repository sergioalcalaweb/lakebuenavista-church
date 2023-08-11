const SectionBG = () => {
  return (
    <div className="w-full h-full absolute -right-5 top-5">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800"><defs><linearGradient gradientTransform="rotate(225 0.5 0.5)" x1="50%" y1="0%" x2="50%" y2="100%" id="ppperspective-grad2"><stop stop-color="hsl(50, 98%, 50%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(50, 98%, 50%)" stop-opacity="0" offset="100%"></stop></linearGradient></defs><g fill="hsl(50, 98%, 50%)" shape-rendering="crispEdges"><polygon points="800,0 511,289 289,289 578,0" fill="url(#ppperspective-grad2)" opacity="0.45"></polygon><polygon points="800,0 511,289 511,511 800,222" fill="url(#ppperspective-grad2)" opacity="0.2"></polygon><rect width="222" height="222" x="289" y="289"></rect></g></svg>
    </div>
  );
}
 
export default SectionBG;