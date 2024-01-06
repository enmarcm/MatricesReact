export default function Navbar({filas}) {
  return (
    <nav className="h-16 min-h-12 flex  items-center relative w-full m-auto after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-l after:from-primary after:to-secondary">
      <div className="w-4/5 m-auto flex justify-between items-center">
        <label className="text-secondary text-xl font-extrabold font-Sora">Gauss Jordan NxN</label>
        <label>Nro de variables: #{filas}</label>
      </div>
    </nav>
  );
}

