import 'reflect-metadata';
import routes from './routes';
import { createConnection } from 'typeorm';
import express, { NextFunction, Request, Response } from 'express';
import AppError from '../../errors/AppErrors';
import ArduinoData from '../../../modules/arduinodata/infra/typeorm/entities/ArduinoData';

const app = express();

app.use(express.json());

// createConnection();

app.use(routes);

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            });
        }

        return response.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    },
);

// createConnection().then(async connection => {

//     console.log("Inserting a new Student into the database..."); const std = new ArduinoData(); std.arduinoId = "teste";
//     std.distance = 3000;
//     await connection.manager.save(std); console.log("Saved a new user with id: " + std.id);

//     console.log("Loading users from the database...");
//     const stds = await connection.manager.find(ArduinoData); console.log("Loaded users: ", stds);

//     console.log("TypeORM with MongoDB");
// }).catch(error => console.log(error));

app.listen(3000, () => {
    console.log("Server started on port 3000");
})