import { FC, ReactNode } from 'react';
import './style.css';

interface WrapperChildPlus {
	childrenTwo?: ReactNode;
}

const Wrapper: FC<WrapperChildPlus> = ({ children, childrenTwo }) => {
	return (
		<>
			<div className='wrapper'>{children}</div>
			<div className=''>{childrenTwo}</div>
		</>
	);
};

export default Wrapper;
