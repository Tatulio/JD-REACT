const Navbar = () => {
    return (
        <ul style={{
            width: "100%",
            height: "50%",
            border:"2px solid black",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
        }}>
            <li style={{listStyle: "none", cursor:"pointer"}}>Menu</li>
            <li style={{listStyle: "none", cursor:"pointer"}}>Nosotros</li>
            <li style={{listStyle: "none", cursor:"pointer"}}>Legales</li>
        </ul>
    )
}

export default Navbar