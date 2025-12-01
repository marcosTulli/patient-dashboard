import { routes } from '@/config/routes';
import { Navigation } from '@/models/navigation';
import { useRouter } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import NotesIcon from '@mui/icons-material/Notes';

const navToRouteKey: Record<Navigation, keyof typeof routes> = {
  [Navigation.home]: 'home',
  [Navigation.patients]: 'patientsList',
  [Navigation.sessionNotes]: 'sessionNotes',
};

const navToIcon: Record<Navigation, React.ComponentType> = {
  [Navigation.home]: HomeIcon,
  [Navigation.patients]: PeopleIcon,
  [Navigation.sessionNotes]: NotesIcon,
};

const useRoutesList = () => {
  const router = useRouter();
  const routesList = Object.values(Navigation).map((navItem) => {
    return {
      name: navItem,
      onClick: () => router.push(routes[navToRouteKey[navItem]]),
      label: navItem,
      path: routes[navToRouteKey[navItem]],
      Icon: navToIcon[navItem],
    };
  });

  return { routesList };
};

export default useRoutesList;
