const typography = require('@tailwindcss/typography');

const plugin = typography();

// Tailwind v4 aliases addComponents to addUtilities, so prose rules land in the
// utilities layer with the same specificity as classes like m-0 and win when
// they are emitted later. Wrapping the root in :where() drops that specificity
// so utilities win again, which is how Tailwind v3 ordered the layers.
function rewrite(styles) {
  if (Array.isArray(styles)) return styles.map(rewrite);
  const out = {};
  for (const [key, value] of Object.entries(styles)) {
    out[key.startsWith('.prose') ? `:where(${key})` : key] = value;
  }
  return out;
}

module.exports = {
  handler(api) {
    plugin.handler({
      ...api,
      addComponents(styles, options) {
        api.addComponents(rewrite(styles), options);
      },
    });
  },
  config: plugin.config,
};
