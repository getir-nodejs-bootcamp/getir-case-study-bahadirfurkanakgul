const request = require("supertest");
const app = require("../../app");
const envPath = __dirname + "/../../.env";
require("dotenv").config({ path: envPath });


test("If request body and request type is correct.", async () => {
  const body = {
    startDate: "2016-01-26",
    endDate: "2018-02-02",
    minCount: 2700,
    maxCount: 3000,
  };
    const resp = await request(app).post("/records").send(body);
      expect(resp.status).toEqual(200);
      expect(resp.body).toHaveProperty("msg");
      expect(resp.body).toHaveProperty("code");
      expect(resp.body).toHaveProperty("records");
});

test("If start date is later than end date in request body.", async () => {
  const body = {
    startDate: "2018-01-26",
    endDate: "2017-02-02",
    minCount: 2700,
    maxCount: 3000,
  };
    const resp = await request(app).post("/records").send(body);
      expect(resp.status).toEqual(400);
});

test("If min count is larger than max count in request body.", async () => {
  const body = {
    startDate: "2016-01-26",
    endDate: "2018-02-02",
    minCount: 2700,
    maxCount: 1000,
  };
    const resp = await request(app).post("/records").send(body);
      expect(resp.status).toEqual(400);
});

test("If there is a GET request.", async () => {
  const body = {
    startDate: "2016-01-26",
    endDate: "2018-02-02",
    minCount: 2700,
    maxCount: 1000,
  };
    const resp = await request(app).get("/records").send(body);
      expect(resp.status).toEqual(404);
});
