import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}
const categoryP = {
    textTransform: 'uppercase',
    fontSize: '0.8em',
    fontWeight: 'bold',
    marginTop: '-20px',
    color: 'black'
}
const categorySpan = {
    backgroundImage: 'linear-gradient(180deg,transparent 50%,hsla(0,0%,77.3%,.5) 0)'
}

class Clothes extends React.Component {
    render() {
        let itemList = this.props.items.map((item) => {
            if (item.subcat === 'tops') {
                return (
                    <Grid item xs={6} md={4} key={item.id}>
                        <Link
                            to = {{
                                pathname: `/finery/products/${item.category}`,
                                search: `?id=${item.id}`,
                            }}>
                            <img src={item.img} alt={item.title} style={{width:'90%'}} />
                        </Link>
                        <div>
                            <p style={categoryP}><span style={categorySpan}>{item.title}</span></p>    
                        </div>                            
                    </Grid>                                       
                )
            } else {
                return null;
            }
        })

        return (
            <Grid container style={{textAlign:'center'}}>
            {itemList}
                </Grid>
        );
    }
}

export default connect(mapStateToProps)(withRouter(Clothes));