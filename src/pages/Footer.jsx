import NAMTESlogo from '../assets/img/mems_deiagram 1.png';

function Footer() {
  return (
    <>
      <div className="FooterDiv">

        <div className="FooterInfosDiv">
          <div className="FooterInfoss">
            <h3>Swift Kitchen</h3>
            <h3>  Oye & Ikole Campus,</h3>
            <h3>Ikole-Ekiti State, Nigeria</h3>
          </div>

          <div className="FooterInfos">
            <h3>Home</h3>
            <h3>About Us</h3>
            <h3>Our Chefs</h3>
            <h3>See Our Menu</h3>
            <h3>Contact Us</h3>
          </div>

          
        </div>
        <div className="footer-icons">
          <i class="fa-brands fa-instagram fa-xl"></i>
          <i class="fa-brands fa-facebook-f fa-xl"></i>
          <i class="fa-brands fa-linkedin-in fa-xl"></i>
          <i class="fa-brands fa-twitter fa-xl"></i>
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          backgroundColor: '#09645B',
          color: 'white',
          paddingTop: '5px',
          paddingBottom: '15px',
        }}
      >
        <h4>© SwiftKitchen 2024</h4>
      </div>
    </>
  );
}

export default Footer;
