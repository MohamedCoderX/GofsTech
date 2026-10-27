export const SITE = {
  name: 'GOFS Tech',
  legalName: 'Group of Friends Solutions',
  url: 'https://www.gofstech.in',
  email: 'admin@gofstech.in',
  phone: '+91 63742 70471',
  phoneRaw: '+916374270471',
  whatsapp: 'https://wa.me/916374270471',
  instagram: 'https://www.instagram.com/gofs_tech/',
  foundingYear: 2021,
  founder: 'Mohamed Ibrahim',
  country: 'India',
};

export const whatsappLink = (text) =>
  `${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
