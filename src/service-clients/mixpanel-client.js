import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = 'd7b429a44a7a4864684036c75553530c';
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

// Initialize Mixpanel only in production
if (isProduction) {
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: false,
    track_pageview: true,
    persistence: 'localStorage',
    autocapture: false,
    ignore_dnt: true
  });
}

/**
 * MixpanelClient - Handles all Mixpanel tracking for the website
 * Only tracks events in production mode to avoid polluting analytics with dev data.
 */
class MixpanelClient {
  /**
   * Track an event
   * @param {string} eventName - The name of the event
   * @param {Object} properties - Event properties
   */
  static track(eventName, properties = {}) {
    if (isProduction) {
      try {
        mixpanel.track(eventName, properties);
      } catch (error) {
        console.error('[MixpanelClient] Error tracking event:', error);
      }
    } else if (isDevelopment) {
      console.log('[MixpanelClient] Event (not tracked in dev):', eventName, properties);
    }
  }

  /**
   * Identify a user in Mixpanel
   * @param {string} userId - The user ID
   * @param {Object} userProperties - User properties to set
   */
  static identify(userId, userProperties = {}) {
    if (isProduction) {
      try {
        mixpanel.identify(userId);
        if (Object.keys(userProperties).length > 0) {
          mixpanel.people.set(userProperties);
        }
      } catch (error) {
        console.error('[MixpanelClient] Error identifying user:', error);
      }
    } else if (isDevelopment) {
      console.log('[MixpanelClient] Identify user (not tracked in dev):', userId, userProperties);
    }
  }

  /**
   * Reset Mixpanel state (e.g., on logout)
   */
  static reset() {
    if (isProduction) {
      try {
        mixpanel.reset();
      } catch (error) {
        console.error('[MixpanelClient] Error resetting:', error);
      }
    } else if (isDevelopment) {
      console.log('[MixpanelClient] Reset (not executed in dev)');
    }
  }
}

export default MixpanelClient;
