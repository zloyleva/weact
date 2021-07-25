const render = (element, container) => {
  const dom = element.type === 'TEXT_ELEMENT' ? document.createTextNode("") : document.createElement(element.type);
  Object.keys(element.props)
    .forEach(name => {
      dom[name] = element.props[name];
    });
  element.children.forEach(child => render(child, dom));
  container.appendChild(dom);
}

const createTextElement = text => ({
  type: "TEXT_ELEMENT",
  props: {
    nodeValue: text,
  },
  children: []
})

const createElement = (type, props = {}, ...children) => {
  return {
    type,
    props,
    children: children.map(element => typeof element === "object" ? element : createTextElement(element))
  }
}

export const Weact = {
  render,
  createElement,
}
