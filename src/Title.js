import React, {Component} from "react";

const TITLES = [
    "a developer",
    "a UH graduate",
    "a music producer",
    "a tech junkie"
]

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true};

    componentDidMount() {
        setTimeout(() => this.setState({fadeIn: false}), 3000);
        this.animateTitles();
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({titleIndex, fadeIn:true});
            setTimeout(() => this.setState({fadeIn: false}), 3000);
        }, 4000);

        console.log(this.titleInterval);
    }

    componentWillUnmount() {
        
        clearInterval(this.titleInterval);
    }

    render() {
        const { fadeIn, titleIndex} = this.state;
        const title = TITLES[titleIndex];

        return(
            <p className={fadeIn? "title-fade-in": "title-fade-out"}>I am {title}</p>
        )
    }
}

export default Title;