import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { getForm } from '../redux/actions/actionCreator'


export const Form = () => {
    const data=useSelector(state=>state.Reducers.register)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit2 = (data) => dispatch(getForm(data))
    const dispatch=useDispatch()
  return (
    <div>

     <form onSubmit={handleSubmit(onSubmit2)}>
         <div >
    <label htmlFor="fullName">Full Name</label>
    <input type="text"    {...register("fullName", { required: true })} />
    {errors.fullName && <p> name is required.</p>}
  </div>
  <div >
    <label htmlFor="email">Email address</label>
    <input type="email"  {...register("email", { required: true })} />
    {errors.email && <p> email is required.</p>}
  </div>
   <div >
    <label htmlFor="phone">Phone Number</label>
    <input type="text"    {...register("phone", { required: true })} />
    {errors.phone && <p> Phone is required.</p>}

  </div>
  <div >
    <label htmlFor="password">Password</label>
    <input type="password"   {...register("password", { required: true })} />
    {errors.password && <p> Password is required.</p>}

  </div>
  <div >
    <label htmlFor="address">Address</label>
    <input type="text" placeholder='Enter Country'  {...register('address.country', { required: true })} />
    {/* {errors.address && <p> Country is required.</p>} */}
    {/* <input type="text" placeholder='Enter state'  {...register("address.state", { required: true })} />
    {errors.address && <p> state is required.</p>} */}

  </div>
  <input type="submit" />
    </form>
    <br/>
       {
           [data].map((data,index)=>{
               return(
                      <div>                    
                   <div key={index}></div>
                   <div> 
                       <p>{data.fullName}</p>
                       <p>{data.email}</p>
                       <p>{data.phone}</p>
                       <p>{data.password}</p>
                       {/* <p>{data.address.country}</p> */}
                       {/* <p>{data.state}</p> */}
                   
                   </div>
                   </div>
               )
           })
       }
       
    </div>
  )
}






{/* <form onSubmit={handleSubmit(onSubmit2)}>
<div>

 <label> Full Name :-</label>

<input {...register('fullName', { required: true })} />
</div>
{errors.fullName && <p> name is required.</p>}
<div>

 <label> Age :-</label>
<input {...register('age', { pattern: /\d+/ ,required: true })} />
</div>
{errors.age && <p>Please enter valid number for age.</p>}
<input type="submit" />
</form> */}