const htmlCourse = {
    course: "HTML",
    students: [{ name: "Rodrigo", email: "rodrigo@email.com"}],
}

const jsCourse = {
    ...htmlCourse,
    course: "Javascript",
    students: [
        ...htmlCourse.students,
        { name: "Maria", email: "maria@email.com"}
    ]
}
jsCourse.students.push({ name: "João", email: "joao@email.com"})

console.log(htmlCourse, jsCourse)