
import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';

const ContentMeterTrack = () => import(/* webpackChunkName: "content-meter-tracker" */ './track-content-meter.vue');
const PreferenceCenter = () => import(/* webpackChunkName: "braze-preference-center" */ './braze-preference-center.vue');

export default (Browser) => {
  MonoRail(Browser, {
    enableOmedaIdentityX: false,
  });
  Browser.register('ContentMeterTrack', ContentMeterTrack);
  Browser.register('PreferenceCenter', PreferenceCenter);
};
