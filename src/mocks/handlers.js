import { rest } from "msw";
import { API_URL } from "../lib/configuration";

export const mockData = {
    watches: {
        data: [
            {
                name: 'Watch 1',
                brand: 'Apple',
                price: 100
            },
            {
                name: 'Watch 2',
                brand: 'Apple',
                price: 200
            },
        ],
    },
    iphones: {
        data: [
            {
                name: 'IPhone 1',
                brand: 'Apple',
                price: 51
            },
            {
                name: 'IPhone 2',
                brand: 'Apple',
                price: 52
            },
        ],
    },
};

export const handlers = [
    rest.get(`${API_URL}/watches`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mockData.watches)
        );
    }),

    rest.get(`${API_URL}/iphones`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mockData.iphones)
        );
    }),
];
