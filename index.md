---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "zar<u>rs</u>"
  text: "A <i>Rust</i> library for the Zarr storage format"
#   tagline: + Python bindings for the zarr-python reference implementation<br>+ C/C++ bindings <br>+ CLI tools for array manipulation
  actions:
    - theme: brand
      text: GitHub
      link: https://github.com/zarrs/zarrs
    - theme: alt
      text: Rust API
      link: https://docs.zarrs.dev
    - theme: alt
      text: Python API
      link: https://zarrs-python.readthedocs.io/en/stable/
    - theme: alt
      text: C/C++ API
      link: https://zarrs.github.io/zarrs_ffi/
    - theme: alt
      text: The zarrs Book
      link: https://book.zarrs.dev
    - theme: alt
      text: Benchmarks
      link: https://github.com/zarrs/zarr_benchmarks
    - theme: alt
      text: CLI Tools
      link: https://github.com/zarrs/zarrs_tools

features:
  - icon: 🚀 #<svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 256.32"><image width="100%" height="100%" xlink:href="rust-logo-128x128.png"/></svg>
    #   src: ./rust-logo-blk.svg
    #   src: ./rust-logo-128x128.png
    title: A high-performance Zarr V3/V2 library
    details: ✓ Powered by Rust.<br>✓ Blazing fast performance.<br>✓ Full support for <a class="custom-link" href="https://zarr-specs.readthedocs.io/en/latest/v3/core/index.html">Zarr V3</a> and a compatible subset of <a class="custom-link" href="https://zarr-specs.readthedocs.io/en/latest/v2/v2.0.html">Zarr V2</a>.
  - icon: 💾
    title: Diverse storage support
    details: Supports filesystem, in-memory, and a huge range of object storage backends (e.g. HTTP, S3, GCP, etc.) via the <a class="custom-link" href="https://crates.io/crates/object_store">object_store</a> and <a class="custom-link" href="https://crates.io/crates/opendal">opendal</a> crates, and <a class="custom-link" href="https://icechunk.io">icechunk</a> transactional storage.
  - icon: 🧪
    title: Array extension support
    details: Supports user-defined array extensions (codecs, data types, chunk grids, chunk key encodings, and storage transformers) with in-built support for many extensions registered at <a class="custom-link" href="https://github.com/zarr-developers/zarr-extensions/">zarr-extensions</a>.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 256.32"><image x="10%" y="10%" height="100%" xlink:href="python-logo-only.svg"/></svg>
    title: Accelerated codec pipeline for Python
    details: <a class="custom-link" href="https://github.com/zarrs/zarrs-python">zarrs-python</a> includes a drop-in high-performance codec pipeline for the <a class="custom-link" href="https://github.com/zarr-developers/zarr-python">zarr-python</a> reference implementation.
  - icon: 🔨
    title: Tools built with <code>zarrs</code>
    details: • <a class="custom-link" href="https://github.com/zarrs/zarrs_tools/blob/main/docs/zarrs_reencode.md">zarrs_reencode</a> reencode, convert V2->V3, ...<br>• <a class="custom-link" href="https://github.com/zarrs/zarrs_tools/blob/main/docs/zarrs_ome.md">zarrs_ome</a> create OME-Zarr multiscale images<br>• <a class="custom-link" href="https://github.com/zarrs/zarrs_tools/blob/main/docs/zarrs_filter.md">zarrs_filter</a> manipulate arrays (crop, blur, ...)<br>... and more in <a class="custom-link" href="https://github.com/zarrs/zarrs_tools">zarrs_tools</a>
  - icon: 🤝
    title: Forever free and open-source
    details: Contributions are welcome.<br>• <a class="custom-link" href="https://github.com/zarrs/zarrs">zarrs</a> (github.com)<br>• <a class="custom-link" href="https://github.com/zarrs/zarrs-python">zarrs-python</a> (github.com)
---

### Announcements

- <tt>2026/02/02</tt>: `zarrs` 0.23 released: improve performance and ergonomics, <tt>optional</tt> data type and codec, more flexible extension point support.
- <tt>2025/09/18</tt>: `zarrs` 0.22 released: new extensions, initial generic indexing/WASM support, expanded experimental partial encoding.
- <tt>2025/06/08</tt>: `zarrs` 0.21 released: several bug fixes and support for a number of additional data types.
- <tt>2025/05/17</tt>: `zarrs` 0.20 released: support for Zarr 3.1, ZEP0009, ZEP0010 (draft), new codecs, and extension data types.
- <tt>2025/05/13</tt>: `LDeakin/zarrs`, `ilan-gold/zarrs-python`, and other `zarrs`-related repositories have moved to the [`zarrs` GitHub organisation](https://github.com/zarrs).
- <tt>2025/05/08</tt>: `zarrs` has joined the newly refreshed [Zarr Implementation Council (ZIC)](https://github.com/zarr-developers/governance/blob/main/GOVERNANCE.md#zarr-implementation-council-zic).
