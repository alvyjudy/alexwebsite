const createLinkTo = (url, updater) => {
  return (e) => {
    history.pushState({}, undefined, url);
    updater(url.split("/").slice(1));
    e.preventDefault();
  };
}

export default createLinkTo;
