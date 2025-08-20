var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// helper.js
function new_greet(name) {
  return `bye, ${name}!`;
}
__name(new_greet, "new_greet");

// worker.js
var worker_default = {
  async fetch(request, env, ctx) {
    return new Response(new_greet("World 87!"));
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
