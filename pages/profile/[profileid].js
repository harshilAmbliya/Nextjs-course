import React from 'react'

const profileId = (props) => {
    return (
        <div>profileId - {props.id}</div>
    )
}


 export const getServerSideProps = async(Context) => {
     const {req,res,params} = Context;
     const id = params.profileid
    //  console.log(Context.params.profileid);

        return{
            props:{
                id
            }
        }
}

export default profileId