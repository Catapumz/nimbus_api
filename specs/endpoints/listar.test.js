const { app } = require("../../src/app");
const mongoose = require("mongoose");
const request = require("supertest");
const Bloques_vias = require("../../src/models/Bloques_vias");

describe("Listar", () => {
  beforeAll(async () => {
    mongoose.set("strictQuery", true);
    await mongoose.connect("mongodb://mongo:3010/NIMBUS");
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Bloques_vias.deleteMany({});
    await new Bloques_vias({
      name: "tusmuertos",
      autor: "hector",
      dificultad: 215151515,
      comentario: "QUE ME DEJES TIO",
      presas: ['"20,255","21,255"'],
      quepared: 15,
      isbloque: "Bloque",
    });
  });

  it("Retrieves", async () => {
    const result = await request(app).get("/listar").expect(200);

    expect(result.body.vias.length).toEqual(1);
  });
});
