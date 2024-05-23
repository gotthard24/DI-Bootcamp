import React from "react"

type HeadingProps = {
    title: string
}

const Heading = (props: HeadingProps): React.ReactElement =>{
    return (
        <h1>{props.title}</h1>
    )
}

export default Heading