const common = [
  'tests/features/**/*.feature',
  '--publish-quiet',
  '--format progress-bar',
  '--require tests/features/steps/**/*.steps.js',
  '--require tests/features/support/**/*.js'
].join(' ');

module.exports = {
  default: common,
}