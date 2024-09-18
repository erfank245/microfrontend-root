import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@vue-mf/navbar",
  app: () => System.import("@vue-mf/navbar"),
  activeWhen: ["/"]
});
registerApplication({
  name: "@vue-mf/page-home",
  app: () => System.import("@vue-mf/page-home"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@vue-mf/page-1",
  app: () => System.import("@vue-mf/page-1"),
  activeWhen: ["/link-1"],
});

start({
  urlRerouteOnly: true,
});
