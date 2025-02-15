import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#292929', color: 'white', padding: '10px', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
      <p>&copy; {new Date().getFullYear()} Alberto Portfolio website</p>
    </footer>
  );
};

export default Footer;
