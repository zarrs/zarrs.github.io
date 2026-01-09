// Create a 4x4 `float32` array with 2x2 chunks (shards) and 1x2 subchunks
let store = Arc::new(FilesystemStore::new("hierarchy.zarr")?);
let array =
    ArrayBuilder::new(vec![4, 4], vec![2, 2], data_type::float32(), 0.0f32)
        .subchunk_shape(vec![1, 2])
        .bytes_to_bytes_codecs(vec![Arc::new(ZstdCodec::new(5, false))])
        .build(store.clone(), "/array")?;

// Store and retrieve a chunk
array.store_chunk(&[0, 0], &[1.0f32, 2.0, 3.0, 4.0])?;
let chunk: ndarray::ArrayD<f32> = array.retrieve_chunk(&[0, 0])?;

// Retrieve an arbitrary subset of the array
let region: ndarray::ArrayD<f32> = array.retrieve_array_subset(&[1..2, 0..4])?;
