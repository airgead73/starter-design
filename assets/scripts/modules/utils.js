const getAttrs = ($element) => {

  const attrs = new Object;
  const attrNames = $element.getAttributeNames();

  attrNames.forEach(name => {
    attrs[name] = $element.getAttribute(name);
  });

 return attrs;

}

export {
  getAttrs
}