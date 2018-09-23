import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Catalog',
    icon: 'far fa-bookmark',
    link: '/pages/catalog',
    children: [
      {
        title: 'Customers',
        link: '/pages/catalog/customers',
      },
      {
        title: 'Suppliers',
        link: '/pages/catalog/suppliers',
      },
    ],
  },
  {
    title: 'Inventor',
    icon: 'fas fa-cubes',
    link: '/pages/inventory',
    children: [
      {
        title: 'Products',
        link: '/pages/inventory/products',
      },

    ],
  },
  {
    title: 'Purchases',
    icon: 'fas fa-clipboard-list',
    link: '/pages/catalog',
    children: [
      {
        title: 'ProductsComponent',
        link: '/pages/catalog/customers',
      },
      {
        title: 'Suppliers',
        link: '/pages/catalog/suppliers',
      },
    ],
  },
  {
    title: 'Sales',
    icon: 'fas fa-receipt',
    link: '/pages/catalog',
    children: [
      {
        title: 'Customers',
        link: '/pages/catalog/customers',
      },
      {
        title: 'Suppliers',
        link: '/pages/catalog/suppliers',
      },
    ],
  },
  {
    title: 'Accounting',
    icon: 'far fa-edit',
    link: '/pages/catalog',
    children: [
      {
        title: 'Customers',
        link: '/pages/catalog/customers',
      },
      {
        title: 'Suppliers',
        link: '/pages/catalog/suppliers',
      },
    ],
  },
  {
    title: 'Receipts',
    icon: 'fas fa-donate',
    link: '/pages/catalog',
    children: [
      {
        title: 'Customers',
        link: '/pages/catalog/customers',
      },
      {
        title: 'Suppliers',
        link: '/pages/catalog/suppliers',
      },
    ],
  },
  {
    title: 'Reports',
    icon: 'far fa-chart-bar',
    link: '/pages/catalog',
    children: [
      {
        title: 'Customers',
        link: '/pages/catalog/customers',
      },
      {
        title: 'Suppliers',
        link: '/pages/catalog/suppliers',
      },
    ],
  },
  {
    title: 'Settings',
    icon: 'far fa-sun',
    link: '/pages/catalog',
    children: [
      {
        title: 'Customers',
        link: '/pages/catalog/customers',
      },
      {
        title: 'Suppliers',
        link: '/pages/catalog/suppliers',
      },
    ],
  },
  {
    title: 'Admin',
    icon: 'far fa-lightbulb',
    link: '/pages/catalog',
    children: [
      {
        title: 'Customers',
        link: '/pages/catalog/customers',
      },
      {
        title: 'Suppliers',
        link: '/pages/catalog/suppliers',
      },
    ],
  },
];
