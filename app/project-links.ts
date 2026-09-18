export function getProjectUrl(value: string | undefined): string | null {
  const input = value?.trim();
  if (!input || /\s/.test(input)) return null;

  try {
    const hasScheme = /^[a-z][a-z\d+.-]*:/i.test(input);
    const url = new URL(hasScheme ? input : `https://${input}`);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.href
      : null;
  } catch {
    return null;
  }
}
