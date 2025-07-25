import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zarrs",
  description: "A Rust library for the Zarr storage format for multidimensional arrays and metadata",
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-VHHG8S6E38' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-VHHG8S6E38');`
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'GitHub / Docs',
        items: [
          { 
            text: 'zarrs (Rust)',
            items: [
              { text: 'Source (github.com)', link: 'https://github.com/zarrs/zarrs' },
              { text: 'Docs (docs.rs)', link: 'https://docs.rs/zarrs/latest/zarrs/' },
              { text: 'Rust crate (crates.io)', link: 'https://crates.io/crates/zarrs' },
              { text: 'Changelog (github.com)', link: 'https://github.com/zarrs/zarrs/blob/main/CHANGELOG.md' },
            ]
          },
          { 
            text: 'zarrs-python (Python)',
            items: [
              { text: 'Source (github.com)', link: 'https://github.com/zarrs/zarrs-python' },
              { text: 'Docs (readthedocs.io)', link: 'https://zarrs-python.readthedocs.io/en/stable/' },
              { text: 'Python package (pypi.org)', link: 'https://pypi.org/project/zarrs/' },
            ]
          },
          { 
            text: 'zarrs_ffi (C/C++)',
            items: [
              { text: 'Source (github.com)', link: 'https://github.com/zarrs/zarrs_ffi' },
              { text: 'Docs (github.io)', link: 'https://zarrs.github.io/zarrs_ffi/' },
              { text: 'Rust crate (crates.io)', link: 'https://crates.io/crates/zarrs_ffi' },
              { text: 'Changelog (github.com)', link: 'https://github.com/zarrs/zarrs_ffi/blob/main/CHANGELOG.md' },
            ]
          }
        ]
      },
      {
        text: 'The zarrs Book',
        link: 'https://book.zarrs.dev'
      },
      {
        text: 'Benchmarks',
        link: 'https://github.com/zarrs/zarr_benchmarks'
      },
      {
        text: 'CLI Tools',
        items: [
          { 
            text: 'Array Manipulation / Reencoding / Inspection',
            items: [
              { text: 'zarrs_reencode', link: 'https://github.com/zarrs/zarrs_tools/blob/main/docs/zarrs_reencode.md' },
              { text: 'zarrs_filter', link: 'https://github.com/zarrs/zarrs_tools/blob/main/docs/zarrs_filter.md' },
              { text: 'zarrs_info', link: 'https://github.com/zarrs/zarrs_tools/blob/main/docs/zarrs_info.md' },
            ]
          },
          { 
            text: 'OME-Zarr (Multiscale Image Pyramids)',
            items: [
              { text: 'zarrs_ome', link: 'https://github.com/zarrs/zarrs_tools/blob/main/docs/zarrs_ome.md' },
            ]
          },
          { 
            text: 'Conversion to Zarr',
            items: [
              { text: 'zarrs_binary2zarr', link: 'https://github.com/zarrs/zarrs_tools/blob/main/docs/zarrs_binary2zarr.md' },
            ]
          },
        ]
      }
    ],

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zarrs' }
    ]
  }
})
