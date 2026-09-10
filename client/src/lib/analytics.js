// Thin wrapper around the GTM dataLayer so lead events are consistent.
export const track = (event, params = {}) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};

export default track;
