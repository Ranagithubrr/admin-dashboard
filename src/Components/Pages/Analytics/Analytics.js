import React from 'react';
import ChartTop from '../../MainHome/Chart/ChartTop';

const Analytics = () => {
    const data = [
        { name: 'Page A', uv: 150, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 300, pv: 1900, amt: 2400 },
        { name: 'Page C', uv: 250, pv: 400, amt: 2400 },
        { name: 'Page A', uv: 760, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 360, pv: 2700, amt: 2400 },
        { name: 'Page A', uv: 660, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 460, pv: 3400, amt: 2400 },
    ]
    return (
        <div>
            <ChartTop data={data} displayName="User Analytics"/>
            
        </div>
    );
};

export default Analytics;