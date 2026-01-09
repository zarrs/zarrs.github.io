import zarr

# Enable the accelerated zarrs codec pipeline
zarr.config.set({"codec_pipeline.path": "zarrs.ZarrsCodecPipeline"})

# Use zarr-python as normal with a Rust-accelerated codec pipeline and storage
array = zarr.open_array("hierarchy.zarr/array")
data = array[:]
array[0:10, 0:10] = 5

# High-level libraries that use `zarr-python` (e.g. dask) work too
import dask.array as da
dask_array = da.from_zarr("hierarchy.zarr/array")
result = dask_array.mean().compute()
