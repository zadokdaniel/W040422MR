const Footer = () => {
  return (
    <footer className="border-top pt-3 py-2 text-center">
      <span>
        Real<i className="bi bi-geo-fill"></i>App
      </span>
      <span className="mx-2">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
