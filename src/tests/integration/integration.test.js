const request = require("supertest");
const app = require("../../app");

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

test("If startDate is later than endDate in request body.", async () => {
  const body = {
    startDate: "2018-01-26",
    endDate: "2017-02-02",
    minCount: 2700,
    maxCount: 3000,
  };
    const resp = await request(app).post("/records").send(body);
      expect(resp.status).toEqual(400);
});

test("If minCount is larger than maxCount in request body.", async () => {
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
