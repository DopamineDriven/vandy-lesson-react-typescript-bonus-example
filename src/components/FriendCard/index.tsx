import { FC } from 'react';
import './style.css';

export interface FriendCardProps {
	name: string;
	image: string;
	occupation: string;
	location: string;
	id: number | string;
	removeFriend: (id: number) => void;
}

// Props are passed through our functional component.
const FriendCard: FC<FriendCardProps> = ({
	name,
	image,
	occupation,
	location,
	//children, //@typeof ReactNode
	id,
	removeFriend
}: FriendCardProps) => {
	return (
		<div className='card'>
			<div className='img-container'>
				<img alt={name} src={image} />
			</div>
			<div className='content'>
				<ul>
					<li>
						<strong>Name:</strong> {name}
					</li>
					<li>
						<strong>Occupation:</strong> {occupation}
					</li>
					<li>
						<strong>Location:</strong> {location}
					</li>
				</ul>
			</div>
			{/* The onClick method will invoke the removeFriends function passing through the value of id  */}
			<span onClick={() => removeFriend(id as number)} className='remove'>
				𝘅
			</span>
		</div>
	);
};

export default FriendCard;
