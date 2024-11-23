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
        text: 'GitHub',
        items: [
          { text: 'zarrs (Rust)', link: 'https://github.com/LDeakin/zarrs' },
          { text: 'zarrs-python (Python)', link: 'https://github.com/ilan-gold/zarrs-python' },
          { text: 'zarrs_ffi (C/C++)', link: 'https://github.com/LDeakin/zarrs_ffi' },
        ]
      },
      {
        text: 'API Docs',
        items: [
          { text: 'zarrs (docs.rs)', link: 'https://docs.rs/zarrs/latest/zarrs/' },
          { text: 'zarrs-python (readthedocs.io)', link: 'https://zarrs-python.readthedocs.io/en/latest/' },
          { text: 'zarrs_ffi (doxygen)', link: 'https://ldeakin.github.io/zarrs_ffi/' },
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
