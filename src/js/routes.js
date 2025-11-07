
import HomePage from '../pages/main.svelte';
import AboutPage from '../pages/about.svelte';
import SettingsPage from '../pages/settings.svelte';
// import FormPage from '../pages/form.svelte';
import MetricPage from '../pages/metric.svelte';
import HumanPage from '../pages/human.svelte';
//  import HumanPage2 from '../pages/tabs/human.svelte';
import VetPage from '../pages/vet.svelte';
// import DynamicRoutePage from '../pages/dynamic-route.svelte';
// import RequestAndLoad from '../pages/request-and-load.svelte';
import NotFoundPage from '../pages/404.svelte';
// import HelpPage from '../pages/help.svelte';
//  import VirtualPage from '../pages/virtual.svelte';
// import TabsRoutable from "../pages/home.svelte";

var routes = [
  {
    path: "/",
    component: HomePage,
    on: {
      pageAfterIn: function (event, page) {},
    },
  },
  // {
  //   path: "/",
  //   component: HomePage,
  //   tabs: [
  //     {
  //       path: "/",
  //       id: "human",
  //       component: HumanPage2,
  //     },
  {
    path: "/vet/",
    id: "vet",
    component: VetPage,
    options: {
      // transition: "f7-cover",
    },
  },
  {
    path: "/metric/",
    id: "metric",
    component: MetricPage,
    options: {
      // transition: "f7-cover",
    },
  },
  //   ],
  // },
  // {
  //   path: "/",
  //   component: HomePage,
  //   on: {
  //     pageAfterIn: function (event, page) {},
  //   },
  // },
  // {
  //   path: "/virtual/",
  //   component: VirtualPage,
  // },

  {
    path: "/about/",
    component: AboutPage,
    options: {
      // transition: "f7-cover",
    }
  },
  {
    path: "/settings/",
    component: SettingsPage,
    name: "settings",
  },

  //   {
  //     path: '/vet/',
  //     component: VetPage
  //   },
  {
    path: "/human/",
    component: HumanPage,
    name: "human",
  },
  // {
  //     path: '/metric/',
  //     component: MetricPage
  //   },
  // {
  //     path: '/help/',
  //     component: HelpPage
  //   }
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
