module.exports = {
  name: 'api-client',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/api-client',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
