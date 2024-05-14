import SubComponent1 from './Subcomponents/MyComponent'

interface Props {
    name: string
}
export default function MyComponent(props: Props) {
    return (
        <>
            <h1>hello {props.name}</h1>

            <SubComponent1 />
        </>
    )
}
