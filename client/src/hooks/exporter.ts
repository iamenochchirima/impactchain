export { idlFactory as dataIDL } from "./declarations/data/data.did.js";
export { idlFactory as fileStorageIdlFactory } from "./declarations/file_storage/file_storage.did.js";
export { idlFactory as fileScalingManagerIdlFactory } from "./declarations/file_scaling_manager/file_scaling_manager.did.js";

export const environment = "production";
export const API_BASE_URL = "https://impactchain-production.up.railway.app"
export const network = "ic"
export const dataCanisterId = "hocf4-oyaaa-aaaal-qdmba-cai";
export const storageCanId = "osmo3-paaaa-aaaal-qdvlq-cai";
export const scalingCanId = "ovnip-cyaaa-aaaal-qdvla-cai";

// export const environment = import.meta.env.MODE || "development";
// export const API_BASE_URL = "http://localhost:5000"
// export const network =  import.meta.env.DFX_NETWORK || "local"
// export const dataCanisterId = "br5f7-7uaaa-aaaaa-qaaca-cai";
// export const storageCanId = "be2us-64aaa-aaaaa-qaabq-cai";
// export const scalingCanId = "bkyz2-fmaaa-aaaaa-qaaaq-cai";