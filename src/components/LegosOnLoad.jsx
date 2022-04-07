import React from "react";


export default class fetchLegos extends React.Component {
    state = {
        loading: true,
        legos: null
    }

    async componentDidMount() {
        const url = "http://localhost:8080";
        const response = await fetch(url);
        const data = await response.json();

        console.log(data[0]);
        }
    


    render() {
        return (
            <>
                <div>{this.state.loading ? <div>loading...</div> : <div>{this.state.legos}</div>}</div>
            </>
        )
    }
}
