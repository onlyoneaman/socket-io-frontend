const backend = {
  apiPath: "/api/v1",
  devBaseURL: import.meta.env.VITE_DEV_URL,
  prodBaseURL: "https://api.dreamboat.ai"
} as const

export default backend
