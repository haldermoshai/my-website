import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = (baseTitle) => {
  const location = useLocation();

  useEffect(() => {
    let title;
    switch (location.pathname) {
      case '/about':
        title = 'About |';
        break;
      case '/work':
        title = 'Work |';
        break;
      case '/blog':
        title = 'Blog |';
        break;
      case '/contact':
        title = 'Contact |';
        break;
      default:
        title = '';
    }
    document.title = `${title} ${baseTitle}`;
  }, [location, baseTitle]);
};

export default useDocumentTitle;