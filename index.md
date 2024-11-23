---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "zarrs"
  text: "A <i>Rust</i> library for the Zarr storage format"
#   tagline: + Python bindings for the zarr-python reference implementation<br>+ C/C++ bindings <br>+ CLI tools for array manipulation
  actions:
    - theme: brand
      text: GitHub
      link: https://github.com/LDeakin/zarrs
    - theme: alt
      text: Rust API
      link: https://docs.zarrs.dev
    - theme: alt
      text: Python API
      link: https://zarrs-python.readthedocs.io/en/latest/
    - theme: alt
      text: C/C++ API
      link: https://ldeakin.github.io/zarrs_ffi/
    - theme: alt
      text: The zarrs Book
      link: https://book.zarrs.dev
    - theme: alt
      text: Performance Benchmarks
      link: https://github.com/LDeakin/zarr_benchmarks
    - theme: alt
      text: CLI Tools
      link: https://github.com/LDeakin/zarrs_tools

features:
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 256.32"><image width="100%" height="100%" xlink:href="rust-logo-128x128.png"/></svg>
    #   src: ./rust-logo-blk.svg
    #   src: ./rust-logo-128x128.png
    title: Performance-Driven Design
    details: Powered by Rust, and designed for high-performance. Leverages chunk and codec parallelism for encoding/decoding performance.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 256.32"><image x="10%" y="10%" height="100%" xlink:href="python-logo-only.svg"/></svg>
    title: Accelerated Codec Pipeline for Python
    details: zarrs-python includes a drop-in high-performance codec pipeline for the zarr-python reference implementation.
  - icon: ✔️
    title: Zarr V2 and V3 Compatible
    details: Written from the ground up for Zarr V3, with support for a compatible subset of Zarr V2. Up-to-date with Zarr V3 revisions and active ZEPs.
  - icon: 💾
    title: Diverse storage support
    details: Supports a huge range of storage backends (e.g. HTTP, S3, GCP, etc.) via the <code>object_store</code> and <code>opendal</code> crates. Also supports <code>icechunk</code>.
  - icon: 🔨
    title: Tools Built with Zarrs
    details: <code>zarrs_reencode</code> reencode/convert V2->V3<br><code>zarrs_ome</code> create OME-Zarr multiscale images<br><code>zarrs_filter</code> manipulate arrays (crop, blur, ...)<br>... and more in <code>zarrs_tools</code>
  - icon: 🧪
    title: Draft ZEP/Experimental Codec Support
    details: ✅ ZEP 2 - Sharding Codec <br> ✅ ZEP 3 - Variable Chunking <br> ✅ ZEP 7 - Strings <br> ✅ <code>bitround</code>, <code>zfp</code>, <code>pcodec</code>, <code>bz2</code>, <code>gdeflate</code> codecs
---

