import { DownloadComponent } from '@app/features/download/download.component';
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
];

export default AppRoutes;