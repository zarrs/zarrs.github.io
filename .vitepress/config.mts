import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zarrs",
  description: "zarrs: a Rust library for the Zarr storage format for multidimensional arrays and metadata",
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
              { text: 'Source (github.com)', link: 'https://github.com/LDeakin/zarrs' },
              { text: 'Docs (docs.rs)', link: 'https://docs.rs/zarrs/latest/zarrs/' },
              { text: 'Rust crate (crates.io)', link: 'https://crates.io/crates/zarrs' },
              { text: 'Changelog (github.com)', link: 'https://github.com/LDeakin/zarrs/blob/main/CHANGELOG.md' },
            ]
          },
          { 
            text: 'zarrs-python (Python)',
            items: [
              { text: 'Source (github.com)', link: 'https://github.com/ilan-gold/zarrs-python' },
              { text: 'Docs (readthedocs.io)', link: 'https://zarrs-python.readthedocs.io/en/stable/' },
              { text: 'Python package (pypi.org)', link: 'https://pypi.org/project/zarrs/' },
            ]
          },
          { 
            text: 'zarrs_ffi (C/C++)',
            items: [
              { text: 'Source (github.com)', link: 'https://github.com/LDeakin/zarrs_ffi' },
              { text: 'Docs (github.io)', link: 'https://ldeakin.github.io/zarrs_ffi/' },
              { text: 'Rust crate (crates.io)', link: 'https://crates.io/crates/zarrs_ffi' },
              { text: 'Changelog (github.com)', link: 'https://github.com/LDeakin/zarrs_ffi/blob/main/CHANGELOG.md' },
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
        link: 'https://github.com/LDeakin/zarr_benchmarks'
      },
      {
        text: 'CLI Tools',
        items: [
          { 
            text: 'Array Manipulation / Reencoding / Inspection',
            items: [
              { text: 'zarrs_reencode', link: 'https://github.com/LDeakin/zarrs_tools/blob/main/docs/zarrs_reencode.md' },
              { text: 'zarrs_filter', link: 'https://github.com/LDeakin/zarrs_tools/blob/main/docs/zarrs_filter.md' },
              { text: 'zarrs_info', link: 'https://github.com/LDeakin/zarrs_tools/blob/main/docs/zarrs_info.md' },
            ]
          },
          { 
            text: 'OME-Zarr (Multiscale Image Pyramids)',
            items: [
              { text: 'zarrs_ome', link: 'https://github.com/LDeakin/zarrs_tools/blob/main/docs/zarrs_ome.md' },
            ]
          },
          { 
            text: 'Conversion to Zarr',
            items: [
              { text: 'zarrs_binary2zarr', link: 'https://github.com/LDeakin/zarrs_tools/blob/main/docs/zarrs_binary2zarr.md' },
              { text: 'zarrs_ncvar2zarr', link: 'https://github.com/LDeakin/zarrs_tools/blob/main/docs/zarrs_ncvar2zarr.md' },
            ]
          },
        ]
      }
    ],

    sidebar: [
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LDeakin/zarrs' }
    ]
  }
})
