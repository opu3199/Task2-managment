import Swal from "sweetalert2";
import Useaxios from "../Hook/Useaxios";
import Dashboard from "./Dashboard";

const Task = () => {
    const axioseccure=Useaxios()


    const handleproduct=e=>{
        e.preventDefault()
        const tital=e.target.tital.value
        const descript=e.target.descript.value
        const deadline=e.target.deadline.value
        const Priority=e.target.Priority.value
        const alltask={tital,descript,deadline,Priority}
        console.log(alltask)

        axioseccure.post('/addtask',alltask)
            .then(res=>{
                console.log(res)
                if(res.data.insertedId){
                    Swal.fire(
                        'Good job!',
                        'You have successfully upadte data!',
                        'success'
                      )
                }
            })
    }
    return (
        <div className="my-10 lg:flex gap-60">

            <div className=" ">
                <Dashboard></Dashboard>
            </div>
     <form onSubmit={handleproduct} className="w-full" >
     <h1 className=" mb-5 text-4xl font-bold text-center">Add Your Task</h1>

     <div className="  gap-10 p-10 bg-stone-200 justify-center ">
        <div className="form-control w-full">
<label className="label">
<span className="label-text">Titals</span>
</label>
<label className="input-group">
<input type="text" placeholder="titals" name="tital" className="input input-bordered w-full " />

</label>
</div>
<div className="form-control w-full">
<label className="label">
<span className="label-text">Description</span>
</label>
<label className="input-group">
<input type="text" placeholder="description" name="descript" className="input input-bordered w-full " />

</label>
</div>
<div className="form-control w-full">
<label className="label">
<span className="label-text">Deadline</span>
</label>
<label className="input-group">
<input type="date" placeholder="Deadline" name='deadline' className="input input-bordered w-full " />

</label>
</div>

<div className="form-control w-full">
<label className="label">
<span className="label-text">Priority</span>
</label>
<label className="input-group">
<input type="text" placeholder="Priority" name="Priority" className="input input-bordered w-full " />

</label>
</div>
</div>
<button className="btn btn-block bg-stone-600 text-white">Add Task</button>

     </form>
        </div>
    );
};

export default Task;