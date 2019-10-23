import React from 'react'

const ImageList=(props)=>{

	const images =props.images.map(({description, id, urls})=>{
		// key is assingednot the root elelment of the return satatement
		return <img alt={description} key={id} src={urls.regular}/>
	});
	return(
		<div>{images}
		</div>
	);
}

export default ImageList;