const request = require("supertest");
const app = require("../../app");
const envPath = __dirname + "/../../.env";
require("dotenv").config({ path: envPath });

describe("POST /records", () => {
  it("Successfull filtering of records.", async () => {
    const body = {
      startDate: "2016-01-26",
      endDate: "2018-02-02",
      minCount: 2700,
      maxCount: 3000,
    };
    const resp = await request(app).post("/records").send(body);
    expect(resp.headers["content-type"]).toEqual(
      "application/json; charset=utf-8"
    );
    expect(resp.statusCode).toEqual(200);
  });
  it("Invalid request body", async () => {
    const body = {
      dummy: "dummy",
    };
    const resp = await request(app).post("/records").send(body);
    // .expect("Content-Type", /json/)
    // .expect(400);
  });
  it("Min count is larger than max count request body.", async () => {
    const body = {
      startDate: "2016-01-26",
      endDate: "2018-02-02",
      minCount: 3200,
      maxCount: 3000,
    };
    const resp = await request(app).post("/records").send(body);
    // .expect("Content-Type", /json/)
    // .expect(400);
  });
  it("Method other than POST request.", async () => {
    const resp = await request(app).get("/records");
  });
});
