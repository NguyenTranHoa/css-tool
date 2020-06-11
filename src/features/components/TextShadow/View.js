import React, { Component } from 'react'
import Preview from './Preview'
import Show from './Show'
import Templates from './Templates'
import { Card } from 'react-bootstrap'

export default class View extends Component {
    render() {
        return (
            <div className="view">
                <Card style={{border: '2px solid #eee'}} className ="mb-3">
                    <Preview/>
                </Card>
                <Card style={{border: '2px solid #eee'}} className ="mb-3">
                    <Show/>
                </Card>
                <Card style={{border: '2px solid #eee'}} className ="view-templates">
                    <Templates/>
                </Card>
            </div>
        )
    }
}
