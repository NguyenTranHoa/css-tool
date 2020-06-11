import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import App from './App'
import {Button} from 'react-bootstrap'
import { ReactSortable } from "react-sortablejs";

export default class CardSession extends Component {

    render() {
        let {css} = this.props;
        return (
            <div className="cardSession">
                <Card className="cardSession-inner">
                    <div>
                        <Button variant="info" onClick={this.props.onClickAddLayer}>Add Layer</Button>
                    </div>
                    <div className='mt-3'>
                        <ReactSortable
                            list={css}
                            setList={data => this.props.onSwapLayer(data)}
                        >
                            {css.map((item, key) => (
                                <Card border="light" key={key}>
                                    <div onClick={() => this.props.onClickLayer(key)} 
                                        style={key === this.props.selectedLayer ? {background: '#404DA0', color: '#fff'} : null}
                                        className='px-2 py-2' 
                                    >
                                        {App.getCssLayer(item)}
                                        <span className="float-right" onClick={() => this.props.onRemoveLayer(key)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </span>
                                    </div>
                                </Card>
                                )
                            )}
                        </ReactSortable>
                    </div>
                </Card>
            </div>
        )
    }
}
