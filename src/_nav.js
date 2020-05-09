export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Resources',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Divisions',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Cattle Enterprise',
          url: '/base/breadcrumbs',
          icon: 'cui-circle-x',
        },
        {
          name: 'Sheep Enterprise',
          url: '/base/sheep',
          icon: 'cui-circle-x',
        },
      ],
    },
    {
      name: 'Business',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'View/Print',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
  ],
};
