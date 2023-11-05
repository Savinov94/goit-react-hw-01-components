import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../json/transactions.json';
import friends from '../json/friends.json';
import data from '../json/data.json';
import user from '../json/user.json';



export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

