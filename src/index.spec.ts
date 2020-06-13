import { bearer, basic } from "./index";

describe("parse authorization", () => {
  describe("bearer", () => {
    it("should parse bearer token", () => {
      expect(bearer("Bearer 123")).toEqual("123");
      expect(bearer("bearer 123")).toEqual("123");
      expect(bearer("  bEaReR   123  ")).toEqual("123");
      expect(bearer("BEARER 123")).toEqual("123");
      expect(bearer("Basic 123")).toEqual(undefined);
      expect(bearer("Unknown 123")).toEqual(undefined);
      expect(bearer("")).toEqual(undefined);
      expect(bearer("Test")).toEqual(undefined);
      expect(bearer("Bearer")).toEqual(undefined);
    });
  });

  describe("basic", () => {
    it("should parse basic token", () => {
      expect(basic("Basic dGVzdDoxMjPCow==")).toEqual(["test", "123£"]);
      expect(basic("basic dGVzdDoxMjPCow==")).toEqual(["test", "123£"]);
      expect(basic("BASIC dGVzdDoxMjPCow==")).toEqual(["test", "123£"]);
      expect(basic("  bAsIc   dGVzdDoxMjPCow==  ")).toEqual(["test", "123£"]);
      expect(basic("Basic")).toEqual(undefined);
      expect(basic("Basic ***")).toEqual(undefined);
      expect(basic("Test")).toEqual(undefined);
    });
  });
});
