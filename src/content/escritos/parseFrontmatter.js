/**
 * Minimal YAML-like frontmatter parser — handles exactly what the
 * escritos need (flat string/date keys + one bracketed list), so we
 * don't need a dependency for five fields.
 */
export const parseFrontmatter = (raw) => {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error('Missing frontmatter block (expected --- ... --- at the top of the file)');
  }

  const [, frontmatterBlock, body] = match;
  const data = {};

  for (const line of frontmatterBlock.split('\n')) {
    if (!line.trim()) continue;
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
    } else if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      data[key] = value.slice(1, -1);
    } else {
      data[key] = value;
    }
  }

  return { data, body: body.trim() };
};
