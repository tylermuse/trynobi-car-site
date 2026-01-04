import MixpanelClient from '../service-clients/mixpanel-client';
import { EVENTS } from '../constants/events';

/**
 * Track an event to multiple analytics providers
 * Currently supports: Mixpanel and Google Analytics
 *
 * @param {string} eventName - The name of the event
 * @param {Object} properties - Event properties
 */
export function trackEvent(eventName, properties = {}) {
  // Track to Mixpanel
  MixpanelClient.track(eventName, properties);

  // Track to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
}

/**
 * Track demo form opened
 */
export function trackDemoFormOpened() {
  trackEvent(EVENTS.DEMO_FORM_OPENED, {
    source: 'website'
  });
}

/**
 * Track scroll preview interaction
 * @param {string} previewText - The text content of the preview at time of click
 */
export function trackScrollPreviewClicked(previewText) {
  trackEvent(EVENTS.SCROLL_PREVIEW_CLICKED, {
    preview_text: previewText,
    source: 'website'
  });
}
