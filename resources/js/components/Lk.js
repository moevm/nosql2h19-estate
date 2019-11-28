import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const left =  {
    display: 'table-cell',
    verticalAlign: 'top',
    width: '25%',
    height: '100%',
    padding: '20px',
};

const right =  {
    display: 'table-cell',
    verticalAlign: 'top',
    width: '75%',
    height: '100%',
    padding: '20px',
};

export default class Lk extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.user)

        this.state = {
            userId: this.props.user,
            articles: [],
            pagination: [],
            url: ''
        };
    }

    loadNextPage() {
        this.setState({
            url: this.state.pagination.nextPageUrl
        });

        if (this.state.pagination.nextPageUrl) {
            axios.get(this.state.pagination.nextPageUrl).then(response => {
                this.setState({
                    articles: response.data.data
                });
                this.makePagination(response.data);
            });
        }
    }

    loadPrevPage() {
        this.setState({
            url: this.state.pagination.prevPageUrl
        });

        if (this.state.pagination.prevPageUrl) {
            axios.get(this.state.pagination.prevPageUrl).then(response => {
                this.setState({
                    articles: response.data.data
                });
                this.makePagination(response.data);
            });
        }
    }

    makePagination(data) {
        let pagination = {
            currentPage: data.current_page,
            lastPage: data.last_page,
            nextPageUrl: data.next_page_url,
            prevPageUrl: data.prev_page_url,
            url: data.path
        };

        this.setState({
            pagination: pagination
        })
    }

    componentDidMount() {
        this.returnFields();
    }

    returnFields() {
        axios.post('/api/get-articles', {
            user_id: this.state.userId
        }).
        then(response => {
            this.setState({
                articles: response.data
            });
        });
    }

    componentDidUpdate() {

    }

    render() {
        let tableTemplate;

        function makeColumns(row, i) {
            return (
                <tr key={i} onClick={handleClick.bind(this, row.Estate_id)}>
                    <td>{row.Name}</td>
                    <td>{row.Description}</td>
                    <td>{row.Placement_date}</td>
                </tr>
            );
        }

        function handleClick(i) {
            window.location.assign('/estates/' + i);
        }

        tableTemplate = this.state.articles.map((row, i) => {
            return makeColumns(row,i);
        });

        let adminMenu;

        function renderAdminMenu() {
            if(/*this.userId == admin id ||*/ true)
                return(
                    <div style={{textAlign:'center'}}>
                        <p>
                            Фамилия
                        </p>
                        <p>
                            Имя
                        </p>
                        <p>
                            Отчество
                        </p>
                        <h3 style={{textAlign:'center'}}>
                            Действия с бд
                        </h3>
                        {/*<div style={{textAlign:'center', background: 'green'}}>*/}
                            <p style={{width: 'auto', display:'inline-block'}}>
                                <button className="btn btn-default">Экспорт</button>
                            </p>
                            <p style={{width: 'auto', display:'inline-block'}}>
                                <button className="btn btn-default" >Импорт</button>
                            </p>
                            <p style={{width: 'auto', display:'inline-block'}}>
                                <button className="btn btn-default" >Статистика</button>
                            </p>
                        {/*</div>*/}
                    </div>

                )
            else
                return(
                    <div>

                    </div>
                )
        }

        adminMenu = renderAdminMenu();

        return(
            <div className="container" style={{display: 'table', width: '100%'}}>
                <div style={left}>
                    {adminMenu}
                </div>
                <div style={right} >
                    <h2>
                        Закладки
                    </h2>
                    <table className="user-list table table-striped">
                        <thead>
                        <tr>
                            <td>Страна</td>
                            <td>Город</td>
                            <td>Планировка</td>
                            <td>Цена</td>
                        </tr>
                        </thead>
                        <tbody>
                        {tableTemplate}
                        </tbody>
                    </table>
                    <button className="btn btn-default" onClick={this.loadNextPage.bind(this)}>Next Page</button>
                    <button className="btn btn-default" onClick={this.loadPrevPage.bind(this)}>Prev Page</button>
                </div>

            </div>
        );
    }
}

if (document.getElementById('lk')) {
    let userId = document.getElementById('lk').getAttribute('data');
    ReactDOM.render(<Lk user={userId}/>, document.getElementById('lk'));
}
