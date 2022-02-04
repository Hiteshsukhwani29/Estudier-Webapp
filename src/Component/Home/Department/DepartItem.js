import React from 'react'

export default function DepartItem(props) {

    return (
        <div>
           <div className="card mb-3">
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.departName}</h5>
    
  </div>
</div>
        </div>
    )
}

