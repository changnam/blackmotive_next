import { getAuthToken } from "./get-token";
import { getShopifyURL } from "@/lib/utils";

export async function getUserMeLoader() {
  const baseUrl = getShopifyURL();

  const url = new URL("/api/users/me", baseUrl);

  const authToken = await getAuthToken();
  console.log("authToken", authToken);
  if (!authToken) return { ok: false, data: null, error: null };

  try {
    const response = await fetch('http://127.0.0.1:1337/api/users/me', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await response.json();
    if (data.error) return { ok: false, data: null, error: data.error };
    return { ok: true, data: data, error: null };
  } catch (error) {
    console.log(error);
    return { ok: false, data: null, error: error };
  }
}