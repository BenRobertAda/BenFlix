import Table from "react-bootstrap/Table";
import React from "react";
import Item from "./Item";
import Video from "./video";

class List extends React.Component {

    state ={
        result: [],
        isLoad: true
    };
componentWillMount()
{
fetch("http://localhost:8000/api/film")
.then(res => res.json())
.then(data => this.setState({result: data, isLoad: false}));
}

  render() {
    const { result, isLoad } = this.state;

    const renderItem = !isLoad ? (
        result.data.map(item =>{
        return ( 
        <div>
            <Item title={item.title} vignette={item.vignette} description={item.description}/>
            </div>
            );
        })
        ) : (
        <p>Chargement de données en cours...</p>
            );
            return <div>{renderItem}</div>;
}
}

export default List;
