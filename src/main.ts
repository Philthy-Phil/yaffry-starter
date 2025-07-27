import { Yaffry } from '@philthy-phil/yaffry';
import { routes } from './routes/routes.config';

import './assets/styles/global.css';
import './assets/scripts/global';

// import all registered components
import './components/registry.component';

async function bootstrap() {
  await Yaffry.createApp(
    () => import('./components/app/app.component'),
    'components/app',
    '#app'
  );
  Yaffry.createRouter(routes, 'router-outlet');
}

bootstrap();