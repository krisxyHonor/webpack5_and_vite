import n from "jquery";
const r = "inner text from info.js";
function f(e, t) {
  let o = "<" + e + "/>";
  n(o).text(t).appendTo("body");
}
export {
  f as createElem,
  r as default
};
