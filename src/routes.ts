import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService"

export function createCourse(request: Request, response: Response) {

    CreateCourseService.execute("NodeJs", 10, "Bruno");

    return response.send()

}