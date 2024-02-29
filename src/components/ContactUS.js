import React, { useEffect } from 'react';

const ContactUS = () => {
  useEffect(() => {
    // Load the Visme forms script
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up: remove the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="visme_d" data-title="Blog Contact Form" data-url="y43n1xmz-blog-contact-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="10927"></div>
  );
};

export default ContactUS;
