import React, { useEffect } from 'react';

const Title = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="visme_d" data-title="Custom Form" data-url="4d7zzmjj-custom-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="34012"></div>
  );
};

export default Title;
