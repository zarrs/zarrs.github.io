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
      link: https://github.com/LDeakin/zarrs
    - theme: alt
      text: Rust API
      link: https://docs.zarrs.dev
    - theme: alt
      text: Python API
      link: https://zarrs-python.readthedocs.io/en/stable/
    # - theme: alt
    #   text: C/C++ API
    #   link: https://ldeakin.github.io/zarrs_ffi/
    - theme: alt
      text: The zarrs Book
      link: https://book.zarrs.dev
    - theme: alt
      text: Benchmarks
      link: https://github.com/LDeakin/zarr_benchmarks
    - theme: alt
      text: CLI Tools
      link: https://github.com/LDeakin/zarrs_tools

features:
  - icon: 🚀 #<svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 256.32"><image width="100%" height="100%" xlink:href="rust-logo-128x128.png"/></svg>
    #   src: ./rust-logo-blk.svg
    #   src: ./rust-logo-128x128.png
    title: A high-performance Zarr V3/V2 library
    details: Powered by Rust. Full support for <a class="custom-link" href="https://zarr-specs.readthedocs.io/en/latest/v3/core/v3.0.html">Zarr V3</a> and a compatible subset of <a class="custom-link" href="https://zarr-specs.readthedocs.io/en/latest/v2/v2.0.html">Zarr V2</a>. Up-to-date with the specifications and accepted <a class="custom-link" href="https://zarr.dev/zeps/">ZEPs</a>.
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 256.32"><image x="10%" y="10%" height="100%" xlink:href="python-logo-only.svg"/></svg>
    title: Accelerated codec pipeline for Python
    details: <a class="custom-link" href="https://github.com/ilan-gold/zarrs-python">zarrs-python</a> includes a drop-in high-performance codec pipeline for the <a class="custom-link" href="https://github.com/zarr-developers/zarr-python">zarr-python</a> reference implementation.
  - icon: 💾
    title: Diverse storage support
    details: Supports filesystem, in-memory, and a huge range of object storage backends (e.g. HTTP, S3, GCP, etc.) via the <a class="custom-link" href="https://crates.io/crates/object_store">object_store</a> and <a class="custom-link" href="https://crates.io/crates/opendal">opendal</a> crates, and <a class="custom-link" href="https://icechunk.io">icechunk</a> transactional storage.
  - icon: 🧪
    title: Draft ZEP/experimental codec support
    details: ✓ ZEP 2 - Sharding Codec<br>✓ ZEP 3 (Draft) - Variable Chunking<br>✓ ZEP 7 (Draft) - Strings<br>✓ <code>bitround</code>, <code>zfp</code>, <code>pcodec</code>, <code>bz2</code>, <code>gdeflate</code> codecs
  - icon: 🔨
    title: Tools built with <code>zarrs</code>
    details: • <a class="custom-link" href="https://github.com/LDeakin/zarrs_tools/blob/main/docs/zarrs_reencode.md">zarrs_reencode</a> reencode, convert V2->V3, ...<br>• <a class="custom-link" href="https://github.com/LDeakin/zarrs_tools/blob/main/docs/zarrs_ome.md">zarrs_ome</a> create OME-Zarr multiscale images<br>• <a class="custom-link" href="https://github.com/LDeakin/zarrs_tools/blob/main/docs/zarrs_filter.md">zarrs_filter</a> manipulate arrays (crop, blur, ...)<br>... and more in <a class="custom-link" href="https://github.com/LDeakin/zarrs_tools">zarrs_tools</a>
  - icon: 🤝
    title: Forever free and open-source
    details: Contributions are welcome.<br>• <a class="custom-link" href="https://github.com/LDeakin/zarrs">zarrs</a> (github.com)<br>• <a class="custom-link" href="https://github.com/ilan-gold/zarrs-python">zarrs-python</a> (github.com)
---
