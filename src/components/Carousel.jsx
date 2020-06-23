import React from 'react';
import {
    Container,
    Row,
} from 'reactstrap';
import hublink from '../assets/hublink.png';
import cubeRunner from '../assets/CubeRunnerIcon.png';
import comingsoon from '../assets/comingsoon.jpg';
import Card from './Card';


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'HubLink, Inc.',
                    subTitle: 'Lock in and link up',
                    imgSrc: hublink,
                    link: 'https://hublink.azurewebsites.net/',
                    selected: false,
                },
                {
                    id: 1,
                    title: 'Cube Runner',
                    subTitle: 'Made in Unity',
                    imgSrc: cubeRunner,
                    link: 'https://gamejolt.net/?token=BB2ScnXvjZXaYM6Z843Gtm9ncg6fHm',
                    selected: false,
                },
                {
                    id: 2,
                    title: 'More Projects',
                    subTitle: 'Coming soon',
                    imgSrc: comingsoon,
                    link: '',
                    selected: false,
                },
            ],

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card
                item={item}
                click={(e => this.handleCardClick(item.id, e))}
                key={item.id}>
            </Card>
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel