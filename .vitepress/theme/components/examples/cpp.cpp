#include "zarrs.h"

// Initialise filesystem storage and open an existing array
ZarrsStorage storage = nullptr;
zarrs_assert(zarrsCreateStorageFilesystem("hierarchy.zarr", &storage));
ZarrsArray array = nullptr;
zarrs_assert(zarrsOpenArrayRW(storage, "/array", &array));

// Retrieve chunk data
size_t indices[] = {0, 0};
size_t chunk_size;
zarrs_assert(zarrsArrayGetChunkSize(array, 2, indices, &chunk_size));
std::vector<uint8_t> data(chunk_size);
zarrs_assert(zarrsArrayRetrieveChunk(array, 2, indices, chunk_size, data.data()));
