import { BrokenImagesComponent } from '@app/features/broken-images/broken-images.component';
import { DownloadComponent } from '@app/features/download/download.component';
import { FormComponent } from '@app/features/form/form.component';
import { GeolocationComponent } from '@app/features/geolocation/geolocation.component';
import { UploadComponent } from '@app/features/upload/upload.component';
import CustomRoute from './model/custom-route';

const AppRoutes: CustomRoute[] = [
  {
    path: 'upload',
    component: UploadComponent,
    description: 'Upload a file',
  },
  {
    path: 'download',
    component: DownloadComponent,
    description: 'Download a file',
  },
  {
    path: 'broken-images',
    component: BrokenImagesComponent,
    description: 'Broken images',
  },
  {
    path: 'geolocation',
    component: GeolocationComponent,
    description: 'Geolocation',
  },
  {
    path: 'form',
    component: FormComponent,
    description: 'Forms',
  },
];

export default AppRoutes;
