import React from 'react';
import { Card } from 'react-bootstrap';

const CssCodeBox = ({cssCode}) => {
    return (
        <Card>
            <div className='codeB'>
                <h5 className='mb-4 font-weight-bold'>CSS code</h5>
                <div style={{fontSize: '14px'}}>
                    {`box-shadow: ${cssCode};`}
                </div>
            </div>
        </Card>
    )
}

export default CssCodeBox