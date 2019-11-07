/* #region file-header
 * File: test.spec.ts
 * Project: http-client
 * Created Date: November 7 2019
 * Author: David Mann (I506251)
 * Last Modified: Thu Nov 07 2019
 * Modified By: David Mann (I506251)
 * Copyright (c) 2019 SAP SE or an SAP affiliate company, www.sap.com/copyright
 * ------------------------------------
 #endregion */


 describe('Samples1', () => {
    it("passes-1", () => {
        expect(1).toBe(1);
    });
    it("fails-1", () => {
        expect(1).toBe(2);
    })
});