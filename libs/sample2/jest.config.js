module.exports = {
  name: 'sample2',
  transform: {
    '^.+\\.[t]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/http-client'
};
