import { useLoaderData } from "react-router-dom";
import Dashboard from "./Dashboard";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import Useaxios from "../Hook/Useaxios";


const Taskmanagment = () => {
    const axiossecure=Useaxios()
    const user=useLoaderData()


    // const handleproduct=e=>{
    //     e.preventDefault()

    //     const tital=e.target.tital.value
    //     const descript=e.target.descript.value
    //     const deadline=e.target.deadline.value
    //     const Priority=e.target.Priority.value
    //     const alltask={tital,descript,deadline,Priority}
    //     console.log(alltask)

      

    //     axiossecure.put(`/addtask/${id}`,alltask)
    //     .then(res=>{
    //         console.log(res)
    //         if(res.data.modifiedCount>0){
    //             Swal.fire(
    //                 'Good job!',
    //                 'You have successfully upadte data!',
    //                 'success'
    //               )
    //         }
    //     })
    // }

    const handledelete=id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiossecure.delete(`/addtask/${id}`)
              .then(res=>{
                if(res.data.deletedCount > 0){
                    // refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                }
              })
            }
          });
}
    return (
        <div className="lg:flex gap-60 items-center my-10">
            <div>
                <Dashboard></Dashboard>

            </div>
            <div className="w-full ">
            <h1  className="text-center text-3xl font-bold mb-10">Task Managment</h1>

            <div>

       
            <div className="overflow-x-auto rounded-lg">
  <table className="table ">
    {/* head */}
    <thead className="bg-orange-400 ">
      <tr>
        <th>
         #
        </th>
        <th className="text-xl font-bold">Titile</th>
        <th className="text-xl font-bold">Description</th>
        <th className="text-xl font-bold">Date</th>
        <th className="text-xl font-bold">Priority</th>
        <th className="text-xl font-bold">Delete</th>
        <th className="text-xl font-bold">Edit</th>
      </tr>
    </thead>
    <tbody>

        {
            user.map((item,index)=>
                <tr key={item._id}>
                <th>
                  {index +1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    
                      <div>
                        <h1>{item.tital}</h1>
                    </div>
                  </div>
                </td>
                <td>
                {item.descript}
                  
                </td>
                <td>
                {item.deadline}
                  
                </td>
                <td>
                {item.Priority}
                  
                </td>

                <th>
                    
                    <button onClick={()=>handledelete(item._id)}  className="btn btn-ghost btn-xs">
                   <  AiOutlineDelete className=" text-2xl text-red-600"></AiOutlineDelete>
                    </button>
                  </th>

                  <th>
                    
                   {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>  <AiOutlineEdit></AiOutlineEdit> </button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Update Your Task</h3>
    <div className="modal-action">
      <form  method="dialog">
        
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


        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</th>
               


              </tr>
                )
        }
      {/* row 1 */}
    
    </tbody>
  </table>
</div>

        </div>



            </div>
           
        </div>
    );
};

export default Taskmanagment;