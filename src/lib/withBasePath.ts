const ABSOLUTE_URL_PATTERN = /^(?:[a-z]+:)?\/\//i;

export function withBasePath(path: string) {
  if (!path || ABSOLUTE_URL_PATTERN.test(path) || path.startsWith("data:")) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalizedPath = path.replace(/^(\.\.\/|\.\/)+/, "").replace(/^\/+/, "");

  return basePath ? `${basePath}/${normalizedPath}` : `/${normalizedPath}`;
}
