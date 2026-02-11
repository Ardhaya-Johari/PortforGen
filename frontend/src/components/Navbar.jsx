export default function Navbar() {
  return (
    <nav>
      {['about','skills','projects','education','additional'].map(s => (
        <a key={s} href={`#${s}`}>{s}</a>
      ))}
    </nav>
  );
}
