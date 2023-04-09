import React from 'react';

const VerticalLine = () => {
    return (
        <div style={styles.lineContainer}>
            <div style={styles.line}></div>
            <div style={styles.dotTop}></div>
            <div style={styles.dotMiddle}></div>
        </div>
    );
};

const styles = {
    lineContainer: {
        position: 'relative',
        // backgroundColor:'yellow',
        width : '1rem'
    },
    line: {
        width: '2px',
        height: '25rem',
        backgroundColor: 'gray'
    },
    dotTop: {
        position: 'absolute',
        top: '0',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: 'gray',
        left: '-5px'
    },
    dotMiddle: {
        position: 'absolute',
        top: '50%',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: 'gray',
        left: '-5px'
    }
};

export default VerticalLine;
