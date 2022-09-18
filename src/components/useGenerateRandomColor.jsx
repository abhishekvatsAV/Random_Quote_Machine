import {useState} from 'react';

const useGenerateRandomColor = () => {
	const [color,setColor] = useState("")
	const generateColor = () =>{
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        
		setColor(`rgb(${red},${green},${blue})`);
	};
	return {color,generateColor};
	
};
export default useGenerateRandomColor;
