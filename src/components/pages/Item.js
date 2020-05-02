import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { SideBySideMagnifier } from "react-image-magnifiers";
import { addItem } from '../../actions/actions';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}
const titleP = {
    fontWeight: 'bold',
}
const titleSpan = {
    fontSize: '1em',
    textTransform: 'uppercase',
    backgroundImage: 'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)',
}
const button = {
    backgroundColor:'white',
    border:'2px solid black',
    fontWeight:'bold',
    width:'70',
    fontSize:'15px',
    outline:'none',
    cursor: 'pointer',
    marginBottom: '20px'
}

class Item extends React.Component {
    constructor(props) {
        super(props);

        let currentItemID = new URLSearchParams(window.location.search).get('id');
        if (currentItemID) {
            currentItemID = parseInt(currentItemID, 10);
        }

        this.state = {
            item: props.items.find(item => item.id === currentItemID)
        };
    }
    
    handleAddToCart = (id) => {
        this.props.dispatch(addItem(id));
    }

    render() {

        let item = this.state.item;
        if (!item) return null;
        
        return (
            <Grid container key={item.id} style={{margin:'20px'}} spacing={2}>
                <Grid item xs={12} md={6}>
                    <SideBySideMagnifier imageSrc={item.img} imageAlt={item.title} alwaysInPlace="true" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <p style={titleP}><span style={titleSpan}>{item.title}</span></p>
                    <p style={titleP}>${item.price}</p>
                    <p>{item.desc}</p>
                    <div>
                        <Link 
                            to="/cart"
                            onClick={ () => { 
                                this.handleAddToCart(item.id);
                            }}
                        >
                        <button style={button}>ADD TO CART</button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default connect(mapStateToProps)(withRouter(Item));