import { ResponsiveBar } from '@nivo/bar'
import React, { useEffect, useState } from 'react'
import HttpService from '../services/http-service';
import { LatLng } from 'leaflet';

const BarChartComponent: React.FC<{ position: LatLng }> = ({ position }) => {
    const [statData, setStatData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchData();
    }, [position]);

    async function fetchData(): Promise<any> {
        try {
            const data = await HttpService.fetchStatisticsData(position.lat, position.lng, '2024-02');
            let mappedData = data.map(el => {
                    let obj: any = {
                        "age": el.ageRange,
                    };
                    el.ethnicityStats.map(o=>{
                        obj[o.ethnicityTitle] = o.count;
                    });
                    return obj;
                });
                
                setStatData(mappedData);
        } catch (error: any) {
            setError(error.message);
        }
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (statData.length == 0) {
        return <div>Sry, no data for this area ;(</div>;
    }
    return (
        <div style={{height:400}}>
        <ResponsiveBar
            data={statData}
            keys={['White', 'Asian', 'Black', 'Other']}
            indexBy="age"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'age',
                legendPosition: 'middle',
                legendOffset: 32,
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'ethnicity',
                legendPosition: 'middle',
                legendOffset: -40,
                truncateTickAt: 0
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        /></div>
    )
}

export default BarChartComponent; 