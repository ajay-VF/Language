import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    if (window.google && window.google.translate) {
      window.googleTranslateElementInit = () => {
        if (!window.googleTranslateInitialized) {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,fr,de,es,hi', // Add your supported languages here
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          }, 'google_translate_element');
          window.googleTranslateInitialized = true; // Flag to prevent re-initialization
        }
      };

      window.googleTranslateElementInit();
    } else {
      const script = document.querySelector('script[src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]');
      if (script) {
        script.onload = () => {
          window.googleTranslateElementInit();
        };
      }
    }

    return () => {
      window.googleTranslateInitialized = false; 
    };
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
