import request from "supertest";
import app from "../app";

describe("app", () => {
  describe("route /", () => {
    it("should return pink flamingo result for numbers 0 to 100", async () => {
      const response = await request(app).get("/");

      expect(response.text).toMatchSnapshot();
    });
  });

  describe("route /:number", () => {
    it("should return pink flamingo result for the numbers", async () => {
      const response = await request(app).get("/0");

      expect(response.text).toEqual("Pink Flamingo");
    });
  });
});
