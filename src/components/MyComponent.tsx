import PropTypes from 'prop-types'
interface Props {
    name: string
}
export default function MyComponent(props: Props) {
    return (
        <>
            <h1>hello {props.name}</h1>
        </>
    )
}
//MyComponent.propTypes = { name: PropTypes.string.isRequired }
