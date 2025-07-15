import { routes } from '@/config/routes';
import { Navigation } from '@/models/navigation';
import { useRouter } from 'next/navigation';

const useRoutesList = () => {
  const router = useRouter();

  const navToRoute = (nav: Navigation): string => {
    switch (nav) {
      case Navigation.Home:
        return routes.home;
      case Navigation.Patients:
        return routes.patientsList;
      case Navigation.Apointments:
        return routes.appointments; // Add to routes if desired
      default:
        return routes.home;
    }
  };

  const routesList = Object.values(Navigation).map((navItem) => {
    return {
      name: navItem,
      onClick: () => router.push(navToRoute(navItem)),
      label: navItem,
    };
  });

  return { routesList };
};

export default useRoutesList;
