import React from 'react'

const profile = (props) => {
  // console.log(props.profileData);
  // console.log(props);

  return (
    <>
      {
        props.profileData.map((profile) => {
          return (
            <div key={profile.id}>
              <h1>{profile.name}</h1>
              <div>{profile.address}</div>
            </div>)
        })
      }

    </>
  )
}


export const getServerSideProps = (context) => {

  const profile = [
    {
      "id": "1",
      "name": "harshil",
      "address": "This is a harshil's address",
    },

  ];

  return {
    props: {
      profileData: profile,
    }
  }
}

export default profile