import { decode } from "universal-base64";

/**
 * Parse the header using a scheme prefix.
 */
export function parse(scheme: string, header: string) {
  const input = header.trim();
  if (input.slice(0, scheme.length + 1).toLowerCase() !== `${scheme} `) return;
  return input.slice(scheme.length + 1).trimLeft();
}

/**
 * Parse the basic credentials from an authorization header.
 */
export function basic(header: string): [string, string] | undefined {
  const input = parse("basic", header);
  if (!input) return;
  const value = decode(input);
  const index = value.indexOf(":");
  if (index === -1) return;
  return [value.substr(0, index), value.substr(index + 1)];
}

/**
 * Parse the bearer token from an authorization header.
 */
export function bearer(header: string): string | undefined {
  return parse("bearer", header);
}
