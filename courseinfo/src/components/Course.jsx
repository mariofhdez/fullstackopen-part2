const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Part = ({ part }) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part => <Part part={part} />)}
        </>
    )
}

const Total = ({ parts }) => {
    return (
        <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

export default Course