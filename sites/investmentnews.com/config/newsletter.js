const baseConfig = {
  action: '/user/subscribe',
  hiddenInputs: [],
};

module.exports = {
  signupBannerLarge: {
    ...baseConfig,
    name: 'Don’t Miss Out',
    description: 'Actionable intelligence that empowers financial advisers.',
  },
  signupFooter: {
    ...baseConfig,
    colspan: 5,
    enable: true,
    name: 'Stay Connected',
    description: 'News, analysis and information essential to financial advisers.',
  },
};
