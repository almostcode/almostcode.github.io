type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
  support: {
    message: string
  }
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Proyectos",
    path: "/projects",
  },
  {
    title: "Github",
    path: "https://github.com/AlmostCode",
  },
];


export const footer: Footer = {
  columns: [
    {
      title: "Paginas",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Proyectos",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Github",
          link: "https://github.com/AlmostCode",
          leavesWebsite: true,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/AlmostCode",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Whatsapp",
          link: "https://api.whatsapp.com/send/?phone=%2B584125459537&text&type=phone_number&app_absent=0",
          icon: "/static/icons/whatsapp.svg",
          leavesWebsite: true,
        }
      ],
    },
  ],
  support: {
    message: "Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.",
  },
};
