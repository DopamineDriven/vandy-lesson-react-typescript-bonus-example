import { useState } from 'react';
import friends from './friends.json';
import './App.css';
import { FriendCard, Wrapper } from './components';

function App() {
	const [friendsList, setFriendsLst] = useState(friends);

	const removeFriend = (id: number) => {
		const newList = friendsList.filter(friend => friend.id !== id);
		setFriendsLst(newList);
	};

	const InjectReactNodeChildComponent = (
		<>
			<div className=''>
This is a JSX.Element being anchored onto a returned react node
					<img src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5agd45c2f1ctcwbdkb2f.gif'  />

			</div>
		</>
	);

	return (
		<Wrapper childrenTwo={InjectReactNodeChildComponent}>
			<h1 className='title'>TypeScript Friends List</h1>
			{friendsList != null && friendsList.length > 0 ? (
				friendsList.map(friend => {
					return (
						<FriendCard
							removeFriend={removeFriend}
							id={friend.id}
							key={friend.id}
							name={friend.name}
							image={friend.image}
							occupation={friend.occupation}
							location={friend.location}
						/>
					);
				})
			) : (
				<div>
					<img src={"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5agd45c2f1ctcwbdkb2f.gif"} />
				</div>
			)}
		</Wrapper>
	);
}

export default App;
