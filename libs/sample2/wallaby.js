/* #region file-header
 * File: wallaby.js
 * Project: DevRoot
 * Created Date: November 4 2019
 * Author: David Mann (I506251)
 * Last Modified: Thu Nov 07 2019
 * Modified By: David Mann (I506251)
 * Copyright (c) 2019 SAP SE or an SAP affiliate company, www.sap.com/copyright
 * ------------------------------------
 #endregion */


 module.exports = function (w) {

    return {
      files: [
        
        'src/**/*.ts',
        '!src/**/*.spec.ts'
      ],
  
      tests: [
        'src/**/*.spec.ts'
      ],
      testFramework: 'jest'
    };
  };
  