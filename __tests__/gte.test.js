// ^ GREATER THAN TEST ==========================================================================================================================
import gte from "../__JS__/gte"

describe('GREATER THAN TEST', () => { 
    it("SHOULD RETURN TRUE WHEN ITS GREATER" , () => {
      expect(gte(5,2)).toBeTruthy();
      expect(gte(5,2)).not.toBeFalsy();
    })
 })