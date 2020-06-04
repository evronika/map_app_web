import PreviewPage from './Preview';
import ExpiredPage from './Expired';
import MapPage from './Map';
import RoomPage from './Room';
import LeftRoomPage from './LeftRoom';

export default [
	{
		path: '/',
		exact: true,
		component: MapPage
	},
	{
		path: '/preview',
		exact: true,
		component: PreviewPage
	},
	{
		path: '/expired',
		component: ExpiredPage
	},
	{
		path: '/room',
		component: RoomPage
	},
	{
		path: '/left',
		component: LeftRoomPage
	}
];
