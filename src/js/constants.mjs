import { load } from "/src/js/storage/storage.mjs";

export const baseUrl = "https://api.noroff.dev/api/v1/auction";
export const key = `Bearer ${load("token")}`;
