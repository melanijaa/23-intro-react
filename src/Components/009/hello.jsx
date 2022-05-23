function Hello({spalva, color}) {
    return <h2 style = {
        {
            color: color,
            backgroundColor: spalva,
            padding: '7px 50px'
        }
    }>Hello</h2>
};

export default Hello;