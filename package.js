Package.describe({
  name: 'veeramarni:touchstonejs',
  version: '0.7.3',
  summary: 'touchstonejs bundled with meteor',
  git: 'https://github.com/veeramarni/meteor-touchstonejs',
  documentation: 'README.md'
});

Npm.depends({
  "touchstonejs": "0.7.3",
  "externalify": "0.1.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('less', 'client');
  // need this package
  api.use(['cosmos:browserify@0.9.3','veeramarni:ionicons-less@1.2.4'], 'client', {week: true});
  // add browserify file
  api.addFiles(['package.browserify.js','package.browserify.options.json'], 'client');

  api.addFiles(['.npm/package/node_modules/touchstonejs/less/components/Alertbar.less',
    '.npm/package/node_modules/touchstonejs/less/components/Button.less',
    '.npm/package/node_modules/touchstonejs/less/components/DatePicker.less',
    '.npm/package/node_modules/touchstonejs/less/components/Group.less',
    '.npm/package/node_modules/touchstonejs/less/components/keypad.less',
    '.npm/package/node_modules/touchstonejs/less/components/List.less',
    '.npm/package/node_modules/touchstonejs/less/components/NavigationBar.less',
    '.npm/package/node_modules/touchstonejs/less/components/passcode.less',
    '.npm/package/node_modules/touchstonejs/less/components/Popup.less',
    '.npm/package/node_modules/touchstonejs/less/components/SearchField.less',
    '.npm/package/node_modules/touchstonejs/less/components/SegmentedControl.less',
    '.npm/package/node_modules/touchstonejs/less/components/Switch.less',
    '.npm/package/node_modules/touchstonejs/less/components/TabsNavigator.less',
    '.npm/package/node_modules/touchstonejs/less/components.less',
    '.npm/package/node_modules/touchstonejs/less/core/animations.less',
    '.npm/package/node_modules/touchstonejs/less/core/forms.less',
    '.npm/package/node_modules/touchstonejs/less/core/grid.less',
    '.npm/package/node_modules/touchstonejs/less/core/normalize.less',
    '.npm/package/node_modules/touchstonejs/less/core/scaffolding.less',
    '.npm/package/node_modules/touchstonejs/less/core/type.less',
    '.npm/package/node_modules/touchstonejs/less/core/view.less',
    '.npm/package/node_modules/touchstonejs/less/core.less',
    '.npm/package/node_modules/touchstonejs/less/mixins/border-radius.less',
    '.npm/package/node_modules/touchstonejs/less/mixins/buttons.less',
    '.npm/package/node_modules/touchstonejs/less/mixins/clearfix.less',
    '.npm/package/node_modules/touchstonejs/less/mixins/flex.less',
    '.npm/package/node_modules/touchstonejs/less/mixins/gradients.less',
    '.npm/package/node_modules/touchstonejs/less/mixins/image.less',
    '.npm/package/node_modules/touchstonejs/less/mixins/loader.less',
    '.npm/package/node_modules/touchstonejs/less/mixins/nav-divider.less',
    '.npm/package/node_modules/touchstonejs/less/mixins/resize.less',
    '.npm/package/node_modules/touchstonejs/less/mixins/retina-borders.less',
    '.npm/package/node_modules/touchstonejs/less/mixins/size.less',
    '.npm/package/node_modules/touchstonejs/less/mixins/text.less',
    '.npm/package/node_modules/touchstonejs/less/mixins/vendor-prefixes.less',
    '.npm/package/node_modules/touchstonejs/less/mixins.less',
    '.npm/package/node_modules/touchstonejs/less/touchstone.less',
    '.npm/package/node_modules/touchstonejs/less/utils/align.less',
    '.npm/package/node_modules/touchstonejs/less/utils/display.less',
    '.npm/package/node_modules/touchstonejs/less/utils/layout.less',
    '.npm/package/node_modules/touchstonejs/less/utils/position.less',
    '.npm/package/node_modules/touchstonejs/less/utils/spacing.less',
    '.npm/package/node_modules/touchstonejs/less/utils/text.less',
    '.npm/package/node_modules/touchstonejs/less/utils.less',
    '.npm/package/node_modules/touchstonejs/less/variables.less'],'client', {isImport: true});
  api.addFiles('.npm/package/node_modules/react-container/less/component.less','client', {isImport: true});
  api.addFiles(['touchstone.import.less','demo.import.less'], 'client');

  api.export('Touchstone', 'client');
});

