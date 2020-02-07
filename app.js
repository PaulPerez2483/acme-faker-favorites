console.log(React)

console.log(ReactDOM)

const root = document.querySelector('#root')

const accounts = [];

for (let i=0; i<10; i++) {
    accounts.push({
        name: faker.name.findName(),
        email: faker.internet.email()
    })
}



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            accounts,
            count : 0
        }
    }

    
    render() {
        const clickMe = (ev) => {

            ev.currentTarget.classList.toggle('orange');
            // console.log(ev.currentTarget.classList.includes('orange'))
            console.dir(ev.target.classList)
            if(ev.currentTarget.classList.contains('orange')) {
                this.setState({count: this.state.count + 1})
            }else {
                this.setState({count: this.state.count - 1})
            }

        }

        const {accounts, count} = this.state;

        let h1 = React.createElement('h1', null, 'Acme Faker Favorites');
        
        let p3 = React.createElement('p', null, `You have ${count} favorite users!`);

        let divs = accounts.map(account => {
            let p1 = React.createElement('p', null, account.name)
            let p2 = React.createElement('p', null, account.email)
            return React.createElement('div', {className: 'child', onClick: clickMe, key: account.name}, p1, p2);
        });

        let div = React.createElement('div', {className: 'parent'}, h1, p3, divs)

        return div;
    }
}

ReactDOM.render(React.createElement(App), root)
