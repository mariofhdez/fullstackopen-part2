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
        <p style={{ fontWeight: 'bold' }}>
            Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</p>
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