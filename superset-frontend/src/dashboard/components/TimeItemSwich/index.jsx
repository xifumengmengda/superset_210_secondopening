import React from 'react';
function TimeItemSwich(props) {
    const { updateDashboardType , type } = props;
    const handleChangeText = (typeNext) =>{
        console.log("555555",props);
        if (typeNext && type !== typeNext) {
            updateDashboardType(typeNext);
            props.setForceQuery(false);
            props.triggerQuery(true, props.chart.id);
        }
      }
    return(
        <div>
            <div 
                onClick={()=>{handleChangeText(1)}}
                style={{padding:5,border:"1px soild red"}}>日</div>
            <div 
                onClick={()=>{handleChangeText(2)}}
                style={{padding:5,border:"1px soild green"}}>周</div>
            <div style={{padding:5,border:"1px soild green"}}>当前选择值{type}</div>
        </div>
    )
}

export default TimeItemSwich