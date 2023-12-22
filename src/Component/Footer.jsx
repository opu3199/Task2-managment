
const Footer = () => {
    return (
      <div className="mt-10">
        <footer data-aos="fade-up-right" className="footer p-10 bg-fuchsia-950 text-neutral-content">
          
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Tital</a>
            <a className="link link-hover">Priority</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
  
          <nav>
            <header className="footer-title">Sign up & get 10% off your next order</header>
            <input className="p-2" type="email" name="" placeholder="email" id="" />
            <button className="bg-red-300 p-2 rounded-md">Subscribe</button>
            <div className="flex gap-5">
              <a href="https://www.facebook.com/">Facebook</a>
              <a href="https://github.com/opu3199">Github</a>
              <a href="https://www.linkedin.com/in/md-rakib-hasan-66aa00234">Linkdien</a>
            </div>
          </nav>
  
        </footer>
      </div>
    );
  };
  
  export default Footer;