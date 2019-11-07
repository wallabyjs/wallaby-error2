/* #region file-header
 * File: jest.config.js
 * Project: DevRoot
 * Created Date: November 7 2019
 * Author: David Mann (I506251)
 * Last Modified: Thu Nov 07 2019
 * Modified By: David Mann (I506251)
 * Copyright (c) 2019 SAP SE or an SAP affiliate company, www.sap.com/copyright
 * ------------------------------------
 #endregion */


module.exports = {
  name: 'spo',
  transform: {
    '^.+\\.[t]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/libs/http-client'
};
