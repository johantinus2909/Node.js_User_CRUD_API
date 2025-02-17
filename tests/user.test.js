const request = require("supertest");
const { app, server } = require("../server");
const db = require('../config/database');


describe("User API", () => {
  it("mengembalikan semua pengguna", async () => {
    const res = await request(app).get("/api/users");
    console.log(res.body); 
    expect(res.status).toBe(200);
  });

  it("Data pengguna berhasil di buat", async () => {
    const res = await request(app).post("/api/users").send({
      name: " mantul",
      email: "mancap@gmail.com",
      age: 28,
    });
    console.log(res.body); 
    expect(res.status).toBe(201);
  });
});

afterAll(async () => {
    if (server && server.close) {
      await new Promise((resolve) => server.close(resolve));
      console.log("Server ditutup setelah test.");
    }
  
    if (db && db.end) {
      await db.end();
      console.log("Koneksi database ditutup.");
    }
  });
  

  