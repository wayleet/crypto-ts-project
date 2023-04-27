import {
	HomeOutlined,
	AutoGraphOutlined,
	BookOutlined,
	SettingsOutlined
} from '@mui/icons-material';

import { ReactNode } from 'react';

interface MenuField {
	name: string;
	icon: ReactNode;
	path: string;
	id: number;
}
export const navigateMenu: MenuField[] = [
	{
		name: 'Главная',
		icon: <HomeOutlined />,
		path: '/',
		id: 1
	},
	{
		name: 'Избранное',
		icon: <AutoGraphOutlined />,
		path: '/watchlist',
		id: 2
	},
	{
		name: 'Новости',
		icon: <BookOutlined />,
		path: '/news',
		id: 3
	},
	{
		name: 'Настройки',
		icon: <SettingsOutlined />,
		path: '/settings',
		id: 4
	}
];
