import { routes } from '@/config/routes';
import { Navigation } from '@/models/navigation';
import { useRouter } from 'next/navigation';

const navToRouteKey: Record<Navigation, keyof typeof routes> = {
  [Navigation.home]: 'home',
  [Navigation.patients]: 'patientsList',
  [Navigation.sessionNotes]: 'sessionNotes',
};

const useRoutesList = () => {
  const router = useRouter();
  const routesList = Object.values(Navigation).map((navItem) => {
    return {
      name: navItem,
      onClick: () => router.push(routes[navToRouteKey[navItem]]),
      label: navItem,
      path: routes[navToRouteKey[navItem]],
    };
  });

  return { routesList };
};

export default useRoutesList;
