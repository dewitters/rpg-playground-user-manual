import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'RPG Playground User Manual',
  tagline: 'Make your own Role Playing Games',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.rpgplayground.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dewitters', // Usually your GitHub org/user name.
  projectName: 'rpg-playground-user-manual', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dewitters/rpg-playground-user-manual/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'RPG Playground User Manual',
      logo: {
        alt: 'RPG Playground Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://www.facebook.com/groups/gamesforteachers',
          label: 'Teacher Community',
          position: 'right',
        },
        {
          href: 'https://rpgplayground.com',
          label: 'RPG Playground Website',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    footer: {
      style: 'dark',
      
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Teacher Community',
              href: 'https://www.facebook.com/groups/gamesforteachers',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'RPG Playground Website',
              href: 'https://rpgplayground.com',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Koen Witters. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
