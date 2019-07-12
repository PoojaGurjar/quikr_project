import React from 'react'

const DispalyData = ({datas}) => {

  return (
    <div>
      { 
        datas.map(data => {
          return data.interval > 0 ? (
            <div >
              <div>Last day: { data.lastmdays }</div>
              <div>time interval(hour): { data.interval }</div>
              <div>top catgories: { data.topmcat }</div>
              <br />
            </div>
          ) : null
        })
      }
    </div>
  );

}

export default DispalyData;