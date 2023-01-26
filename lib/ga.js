export const GA_TRACKING_ID = 'G-2T7D0VR4NW';

// log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// log specific events (not used)
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}