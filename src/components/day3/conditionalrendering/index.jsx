
const Conditionalrender = () => {
    //    const marks=60

    let stdmarks = [
        {
            "name": "John",
            "marks": 90,
            "id": 1
        },
        {
            "name": "Jane",
            "marks": 80,
            "id": 2
        },
        {
            "name": "Johny",
            "marks": 70,
            "id": 3
        }, {
            "name": "Jenny",
            "marks": 50,
            "id": 4
        }
    ]
    return (
        <div>
            <h1>Student name : John</h1>
            {
                stdmarks.map((eac) => {
                    const { name, marks,id } = eac
                    return (
                       <div key={id}>

                            <h1 style={{background:"blue",color:"white"}}>{name} and the marks is {marks}</h1>
                            <div>the grade is
                                <span style={{color:"orange"}}>
                                {marks > 90 ? <h5>A+</h5> : marks > 80 ? <h5>A grade</h5> : marks > 70 ? <h5>b gradee</h5> : <h5>fail: better luck next time</h5>}
                                </span>
                            </div>
                            <hr></hr>
                        </div>
                     
                    )

                })
            }
        </div>
    )
}

export default Conditionalrender;