module.exports = {
  siteTitle: 'Saravanan C M | Sr Software Engineer',
  siteDescription:
    'Saravanan is a senior software engineer based in Bangalore, IN who specializes in building and launching a SaaS product from scratch.',
  siteKeywords:
    'Saravanan, saravanan, cm, c m, lead software engineer, senior software engineer, software engineer, web developer, javascript, bangalore, chennai',
  siteUrl: 'https://saravanancm.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-173387262-1',
  googleVerification: 'IKT85vVrq5U_HJX1qwY-VyZ4tXtWMqiUHLqO4E65PaI',
  name: 'Saravanan C M',
  location: 'Bangalore, IN',
  email: 'reachcms6@gmail.com',
  github: 'https://github.com/saravanan-cm',
  twitterHandle: '@saravanan_c_m',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/saravanan-cm',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/saravanan_cm',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/saravanan_cm',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/saravanan_c_m',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
