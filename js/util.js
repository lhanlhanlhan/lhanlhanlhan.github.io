const HpUtils = {
  getCurrentPagePath: function() {
    const pathArray = window.location.pathname.split('/');
    // remove empty strings in case the path ends with a slash
    const filteredPathArray = pathArray.filter((path) => path !== '');
    const currentPath = filteredPathArray.join('/');
    return `/${currentPath}`;
  }
}
