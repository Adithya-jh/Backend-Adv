import {describe, expect, test, it, vi} from 'vitest';
import request from "supertest";
import { app } from "../index"
import { prismaClient } from '../db';


// Mocking the prismaClient
// vi.mock("../db", () => {
//     return {
//       default: () => ({}),
//       prismaClient:{
//         sum:{
//           create: vi.fn()
//         }
//       }
//     }
//   })

//deep mock
console.log(prismaClient);

vi.mock('../db');

describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
        const res = await request(app).post("/sum").send({
          a: 1,
          b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
      });

      it("should return the sum of two negative numbers", async () => {
        const res = await request(app).post("/sum").send({
          a: -1,
          b: -2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
      });

      it("should return the sum of two zero number", async () => {
        const res = await request(app).post("/sum").send({
          a: 0,
          b: 0
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(0);
      });
});
