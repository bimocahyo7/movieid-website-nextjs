import { FaGithub } from "react-icons/fa6";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cyan-800 h-16 px-8 flex items-center justify-between">
      <div className="p-4 text-center font-normal text-white">©{year} Copyright</div>
      <a href="https://github.com/bimocahyo7" target="_blank" className="flex gap-2 items-center bg-slate-200 p-2">
        <FaGithub size={30} />
        <span className="font-semibold text-slate-800">Bimo Cahyo Kusumo</span>
      </a>
    </footer>
  );
}

export default Footer;
