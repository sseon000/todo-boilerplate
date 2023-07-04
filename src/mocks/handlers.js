// src/mocks/handlers.js
import { rest } from "msw";

const KEY = "TODO_LIST";
export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    const store = window.localStorage.getItem(KEY);
    return res(ctx.status(200), ctx.json(store ? JSON.parse(store) : null));
  }),

  rest.get("/todos/:itemId", (req, res, ctx) => {
    const store = window.localStorage.getItem(KEY);
    const id = req.params.itemId;
    const item =
      store && JSON.parse(store).filter((item) => item.id === Number(id));
    if (req.params.itemId) {
      return res(ctx.status(200), ctx.json(item[0]));
    }
    return res(ctx.status(404));
  }),

  rest.post("/todos", (req, res, ctx) => {
    const store = window.localStorage.getItem(KEY);
    const data = typeof req.body === "string" && JSON.parse(req.body);
    const newItem = {
      id: Math.floor(Math.random() * 99999),
      // ...req.body,
      ...data,
    };
    if (store !== null) {
      const result = [...JSON.parse(store), newItem];
      window.localStorage.setItem(KEY, JSON.stringify(result));
    } else {
      window.localStorage.setItem(KEY, JSON.stringify([newItem]));
    }
    return res(ctx.status(200), ctx.json(newItem));
  }),

  // 2023.07.02
  rest.put("/todos/:itemId", (req, res, ctx) => {
    const store = window.localStorage.getItem(KEY);
    const id = Number(req.params.itemId);
    console.log("done handler : ", id);
    const data = typeof req.body === "string" && JSON.parse(req.body);
    const newItem = {
      id: Math.floor(Math.random() * 99999),
      // ...req.body,
      ...data,
    };
    if (store !== null) {
      const result = [...JSON.parse(store), newItem];
      window.localStorage.setItem(KEY, JSON.stringify(result));
    } else {
      window.localStorage.setItem(KEY, JSON.stringify([newItem]));
    }
    return res(ctx.status(200), ctx.json(newItem));
  }),

  rest.put("/todos/:itemId", (req, res, ctx) => {
    const store = window.localStorage.getItem(KEY);
    const id = Number(req.params.itemId);
    const data = typeof req.body === "string" && JSON.parse(req.body);
    const { title, description, isComplete } = data;
    const result =
      store &&
      JSON.parse(store).map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title,
            description,
            isComplete,
          };
        }
        return {
          ...item,
        };
      });
    window.localStorage.setItem(KEY, JSON.stringify(result));
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.delete("/todos/:itemId", (req, res, ctx) => {
    const id = req.params.itemId;
    console.log("del", id);
    const store = window.localStorage.getItem(KEY);
    const filterArr =
      typeof store === "string" &&
      JSON.parse(store).filter((item) => item.id !== Number(id));
    window.localStorage.setItem(KEY, JSON.stringify(filterArr));
    return res(ctx.status(200));
  }),
  // 경고 무시
  rest.get("/favicon.ico", (req, res, ctx) => {
    // Return an empty response or some custom response if needed
    return res(ctx.status(200));
  }),
  rest.get("/logo192.png", (req, res, ctx) => {
    // Return an empty response or some custom response if needed
    return res(ctx.status(200));
  }),
  rest.get("/manifest.json", (req, res, ctx) => {
    // Return the actual contents of your manifest.json file
    return res(
      ctx.status(200),
      ctx.json({
        // Your manifest.json content here
      })
    );
  }),
];
