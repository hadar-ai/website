import React from 'react'
import Loader from 'react-spinners/BeatLoader'

export const LoadingIcon: React.FunctionComponent = () => {
  return (
    <div className='inline-block'>
      <Loader 
        size={10}
        loading={true} 
        color={'white'}
      />
    </div>
  )
}
