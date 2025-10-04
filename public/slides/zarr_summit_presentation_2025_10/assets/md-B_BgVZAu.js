import{_ as h}from"./slidev/VSwitch-sFizKvW8.js";import{_ as d}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-nnQzXTvz.js";import{a as m,b as f,o as g,w as l,g as n,e,ad as s,m as t,v as _,x as b,T as r}from"./modules/vue-DgPOR5la.js";import{I as y}from"./slidev/default-D_R1tYT3.js";import{u as k,f as z}from"./slidev/context-BTwdl0_I.js";import"./modules/shiki-Dubhsq5u.js";import"./index-Teamus1E.js";import"./modules/unplugin-icons-BmvDl_Li.js";const A={style:{"overflow-y":"scroll",height:"300px"}},R={__name:"slides.md__slidev_15",setup(v){const{$clicksContext:c,$frontmatter:o}=k();return c.setup(),(T,a)=>{const i=m("tt"),p=d,u=h;return g(),f(y,_(b(r(z)(r(o),14))),{default:l(()=>[n("h1",null,[e(i,null,{default:l(()=>[...a[0]||(a[0]=[s("zar",-1),n("u",null,"rs",-1),s("_tools",-1)])]),_:1}),a[1]||(a[1]=s(": CLI Tools",-1))]),n("p",null,[a[3]||(a[3]=s("Various tools for creating and manipulating Zarr data with the ",-1)),e(i,null,{default:l(()=>[...a[2]||(a[2]=[s("zar",-1),n("u",null,"rs",-1)])]),_:1}),a[4]||(a[4]=s(" rust crate.",-1))]),e(u,null,{0:l(()=>[e(p,t({},{title:"",ranges:[]}),{default:l(()=>[...a[5]||(a[5]=[n("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-bash"},[n("span",{class:"line"},[n("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"zarrs_reencode"),n("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," --help")])])],-1)])]),_:1},16),n("div",A,[e(p,t({},{title:"",ranges:[]}),{default:l(()=>[...a[6]||(a[6]=[n("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[n("code",{class:"language-text"},[n("span",{class:"line"},[n("span",null,"Reencode a Zarr array")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"Usage: zarrs_reencode [OPTIONS] <PATH_IN> <PATH_OUT>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"Arguments:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  <PATH_IN>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          The zarr array input path or URL")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  <PATH_OUT>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          The zarr array output directory")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"Options:")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -d, --data-type <DATA_TYPE>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          The data type as a string")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Valid data types:")]),s(`
`),n("span",{class:"line"},[n("span",null,"            - bool")]),s(`
`),n("span",{class:"line"},[n("span",null,"            - int8, int16, int32, int64")]),s(`
`),n("span",{class:"line"},[n("span",null,"            - uint8, uint16, uint32, uint64")]),s(`
`),n("span",{class:"line"},[n("span",null,"            - float16, float32, float64, bfloat16")]),s(`
`),n("span",{class:"line"},[n("span",null,"            - complex64, complex 128")]),s(`
`),n("span",{class:"line"},[n("span",null,"            - r* (raw bits, where * is a multiple of 8)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -f, --fill-value <FILL_VALUE>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Fill value. See <https://zarr-specs.readthedocs.io/en/latest/v3/core/v3.0.html#fill-value>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          The fill value must be compatible with the data type.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Examples:")]),s(`
`),n("span",{class:"line"},[n("span",null,"            int/uint: 0 100 -100")]),s(`
`),n("span",{class:"line"},[n("span",null,'            float: 0.0 "NaN" "Infinity" "-Infinity"')]),s(`
`),n("span",{class:"line"},[n("span",null,'            r*: "[0, 255]"')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --separator <SEPARATOR>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          The chunk key encoding separator. Either . or /")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -c, --chunk-shape <CHUNK_SHAPE>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Chunk shape. A comma separated list of the chunk size along each array dimension.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          If any dimension has size zero, it will be set to match the array shape.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -s, --shard-shape <SHARD_SHAPE>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Shard shape. A comma separated list of the shard size along each array dimension.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          If specified, the array is encoded using the sharding codec.")]),s(`
`),n("span",{class:"line"},[n("span",null,"          If any dimension has size zero, it will be set to match the array shape.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --ignore-input-sharding")]),s(`
`),n("span",{class:"line"},[n("span",null,"          If true, the sharding of the input will be ignored.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --array-to-array-codecs <ARRAY_TO_ARRAY_CODECS>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Array to array codecs.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          JSON holding an array of array to array codec metadata.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Examples:")]),s(`
`),n("span",{class:"line"},[n("span",null,`            '[ { "name": "transpose", "configuration": { "order": [0, 2, 1] } } ]'`)]),s(`
`),n("span",{class:"line"},[n("span",null,`            '[ { "name": "bitround", "configuration": { "keepbits": 9 } } ]'`)]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --array-to-bytes-codec <ARRAY_TO_BYTES_CODEC>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Array to bytes codec.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          JSON holding array to bytes codec metadata.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Examples:")]),s(`
`),n("span",{class:"line"},[n("span",null,`            '{ "name": "bytes", "configuration": { "endian": "little" } }'`)]),s(`
`),n("span",{class:"line"},[n("span",null,`            '{ "name": "pcodec", "configuration": { "level": 12 } }'`)]),s(`
`),n("span",{class:"line"},[n("span",null,`            '{ "name": "zfp", "configuration": { "mode": "fixedprecision", "precision": 19 } }'`)]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --bytes-to-bytes-codecs <BYTES_TO_BYTES_CODECS>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Bytes to bytes codecs.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          JSON holding an array bytes to bytes codec configurations.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Examples:")]),s(`
`),n("span",{class:"line"},[n("span",null,`            '[ { "name": "blosc", "configuration": { "cname": "blosclz", "clevel": 9, "shuffle": "bitshuffle", "typesize": 2, "blocksize": 0 } } ]'`)]),s(`
`),n("span",{class:"line"},[n("span",null,`            '[ { "name": "bz2", "configuration": { "level": 9 } } ]'`)]),s(`
`),n("span",{class:"line"},[n("span",null,`            '[ { "name": "crc32c" } ]'`)]),s(`
`),n("span",{class:"line"},[n("span",null,`            '[ { "name": "gzip", "configuration": { "level": 9 } } ]'`)]),s(`
`),n("span",{class:"line"},[n("span",null,`            '[ { "name": "zstd", "configuration": { "level": 22, "checksum": false } } ]'`)]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --dimension-names <DIMENSION_NAMES>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Dimension names (optional). Comma separated.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --attributes <ATTRIBUTES>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Attributes (optional).")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          JSON holding array attributes.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --attributes-append <ATTRIBUTES_APPEND>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Attributes to append (optional).")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          JSON holding array attributes.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --concurrent-chunks <CONCURRENT_CHUNKS>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Number of concurrent chunks")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --ignore-checksums")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Ignore checksums.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          If set, checksum validation in codecs (e.g. crc32c) is skipped.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --validate")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Validate written data")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -v, --verbose")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Print verbose information, such as the array header")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --cache-size <CACHE_SIZE>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          An optional chunk cache size (in bytes)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --cache-chunks <CACHE_CHUNKS>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          An optional chunk cache size (in chunks)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --cache-size-thread <CACHE_SIZE_THREAD>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          An optional per-thread chunk cache size (in bytes)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --cache-chunks-thread <CACHE_CHUNKS_THREAD>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          An optional per-thread chunk cache size (in chunks)")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"      --write-shape <WRITE_SHAPE>")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Write shape (optional). A comma separated list of the write size along each array dimension.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Use this parameter to incrementally write shards in batches of chunks of the specified write shape.")]),s(`
`),n("span",{class:"line"},[n("span",null,"          The write shape defaults to the shard shape for sharded arrays.")]),s(`
`),n("span",{class:"line"},[n("span",null,"          This parameter is ignored for unsharded arrays (the write shape is the chunk shape).")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Prefer to set the write shape to an integer multiple of the chunk shape to avoid unnecessary reads.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -h, --help")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Print help (see a summary with '-h')")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  -V, --version")]),s(`
`),n("span",{class:"line"},[n("span",null,"          Print version")])])],-1)])]),_:1},16)])]),1:l(()=>[...a[7]||(a[7]=[n("ul",null,[n("li",null,[n("a",{href:"https://github.com/zarrs/zarrs_tools/blob/main/docs/zarrs_reencode.md",target:"_blank"},[n("code",null,"zarrs_reencode")]),s(": reencode an array. "),n("ul",null,[n("li",null,"Manipulate the chunk size, shard size, codecs, fill value, chunk key encoding separator, and attributes.")])]),n("li",null,[n("a",{href:"https://github.com/zarrs/zarrs_tools/blob/main/docs/zarrs_filter.md",target:"_blank"},[n("code",null,"zarrs_filter")]),s(": apply simple image filters (transformations) to an array.")]),n("li",null,[n("a",{href:"https://github.com/zarrs/zarrs_tools/blob/main/docs/zarrs_ome.md",target:"_blank"},[n("code",null,"zarrs_ome")]),s(": convert an array to an "),n("a",{href:"https://ngff.openmicroscopy.org/latest/index.html",target:"_blank"},"OME-Zarr"),s(" multiscale image.")]),n("li",null,[n("a",{href:"https://github.com/zarrs/zarrs_tools/blob/main/docs/zarrs_info.md",target:"_blank"},[n("code",null,"zarrs_info")]),s(": return metadata related info or the range/histogram of an array.")]),n("li",null,[n("a",{href:"https://github.com/zarrs/zarrs_tools/blob/main/docs/zarrs_validate.md",target:"_blank"},[n("code",null,"zarrs_validate")]),s(": validate that two arrays are equivalent.")]),n("li",null,[n("a",{href:"https://github.com/zarrs/zarrs_tools/blob/main/docs/zarrs_binary2zarr.md",target:"_blank"},[n("code",null,"zarrs_binary2zarr")]),s(": create an array from piped binary data.")]),n("li",null,[s("+ benchmarking tools ("),n("code",null,"zarrs_benchmark_read_sync"),s(", "),n("code",null,"zarrs_benchmark_read_async"),s(").")])],-1)])]),_:1})]),_:1},16)}}};export{R as default};
