interface Course {
    name: string, 
    duration?: number, // o ? significa que é um atributo opcional
    educator: string
}

class CreateCourseService {

    execute({duration = 8, educator, name}: Course){  //o igual diz qual o valor default
        console.log(name, duration, educator)
    }
}

export default new CreateCourseService();